const HttpError = require('../models/HttpError')
const bcrypt = require('bcryptjs')
const jwt= require('jsonwebtoken')
const Recipe = require('../models/Recipe')
const Ingredient = require('../models/Ingredient')
const Instruction = require('../models/Instruction')
const User = require('../models/User')
const {validationResult} = require('express-validator')
const mongoose = require('mongoose')
const uuid = require('uuid/v4')
const fs = require('fs')
const path = require('path')

const getAllRecipes = async (req, res, next) => {                               //We get all recipes to show users' recipes
   let recipes
   try{
     recipes = await Recipe.find({}).exec()
   }
   catch(err){
     const error = new HttpError('Something went wrong',500)
     return next(error)
   }
   if(!recipes){
     const error = new HttpError('Could not find any recipe',404)
     return next(error)
   }

   res.status(200).json({recipes:recipes.map(recipe => recipe.toObject({getters:true}))})
}
const getRecipesByUserId = async (req, res, next) => {                          // We want to get recipes by userId, so we can show user's recipes
   const userId = req.params.uid
   let existingUser
   try{
      existingUser = await User.findById(userId,'-password').exec().populate('recipes')
   }
   catch(err){
     const error = new HttpError('Could not find any recipes provided user id',500)
     return next(error)
   }
   if(!existingUser){                                                           // We check if this user exist or not in our database.
     const error = new HttpError('Could not find any user provided user id',404)
     return next(error)
   }
   res.status(200).json({recipes:existingUser.recipes.map(recipe => recipe.toObject({getters:true}))})
}
const getRecipeById = async (req,res,next) => {
  const recipeId = req.params.rid
  let existingRecipe
  try {
    existingRecipe = await Recipe.findById(recipeId).populate('creator','-password').exec()
    if(!existingRecipe){
      const error = new HttpError('Could not find any recipes provided user id',404)
      return next(error)
    }
    res.status(200).json({recipe:existingRecipe.toObject({getters:true})})
  }
  catch(err){
    const error = new HttpError('Could not find any recipes provided user id',404)
    return next(error)
  }


}
const setRecipeRating = async (req,res,next) => {
  const recipeId = req.params.rid
  let existingRecipe 
  try{
    existingRecipe = await Recipe.findById(recipeId).populate('creator')
    if(!existingRecipe){
      const error = new HttpError('Could not find any recipes provided user id',404)
      return next(error)
    }
    const {data} = req.body
    const {rating,userId} = data
  
    let isRated = existingRecipe.ratings.filter(rat => rat.user == userId)
    if(isRated.length > 0){
      const error = new HttpError('You already rated  this recipe before',403)
      return next(error)
    }
    existingRecipe.ratings.push({point:parseFloat(rating),user:userId})
   
    if(req.userData.userId === existingRecipe.creator.id){
      const error = new HttpError('You can not give the rating for your recipe',403)
      return next(error)
    }
    
    let sum = 0 
    let average = 0
    for(let i = 0; i< existingRecipe.ratings.length;i++){
      sum += existingRecipe.ratings[i].point
    }
    average = parseFloat(sum / existingRecipe.ratings.length).toFixed( 2 )
    console.log(average)
    try{
      await  existingRecipe.save()
      res.status(200).json({averageRating:average})
    }
    catch(err){
      const error = new HttpError('Could not find any recipes provided user id',404)
      return next(error)
    }

  }
  catch(err){
    const error = new HttpError('Could not find any recipes provided user id',404)
    return next(error)
  }

}
const getRecipeRating = async (req,res,next) => {
  const recipeId = req.params.rid
  let existingRecipe 
  let sum = 0 
  let average = 0
  try{
    existingRecipe = await Recipe.findById(recipeId).populate('creator')
    if(!existingRecipe){
      const error = new HttpError('Could not find any recipes provided user id',404)
      return next(error)
    }
    const {userId} = req.body
    
    const userRated = existingRecipe.ratings.filter( rat => rat.user == userId)
  
    let isRated = userRated.length > 0 ? true : false
  
    if (existingRecipe.ratings.length > 0){
      for(let i = 0; i< existingRecipe.ratings.length;i++){
        sum += existingRecipe.ratings[i].point
      }
      average =   parseFloat(sum / existingRecipe.ratings.length).toFixed( 2 )
    }
    else{
      average = 0
    }
    try{
       let data = {
         rating:average,
         wasUserRated:isRated
       }
       
      res.status(200).json({averageRating:data})
    }
    catch(err){
      const error = new HttpError('Could not find any recipes provided user id',404)
      return next(error)
    }

  }
  catch(err){
    const error = new HttpError('Could not find any recipes provided user id',404)
    return next(error)
  }

}

const addFavouriteRecipe = async (req,res,next ) =>{
  const recipeId  = req.params.rid
  let existingRecipe 

  try{
    existingRecipe = await Recipe.findById(recipeId).populate('creator')
    if(!existingRecipe){
      const error = new HttpError('Could not find any recipes provided user id',404)
      return next(error)
    }
    let user
    try{
       const {userId} = req.body
      user = await User.findById(userId,'-password').exec()                          
    }
    catch(err){
      const errors = new HttpError('Something went wrong ',500)
      return next(error)
    }
    if(!user){
      const error = new HttpError('This user does not exist',422)
      return next(error)
    }
    const index = user.myFavouriteRecipes.indexOf(recipeId)
    if(index > -1){
      const error = new HttpError('This recipe is alread exist',405)
      return next(error)
    }
    user.myFavouriteRecipes.push(existingRecipe)
    try{
      await user.save()
    }
    catch(err){
      const error = new HttpError('Something went wrong could not update recipe', 500)
      return next(error)
     }
     res.status(200).json({user:user.toObject({getters:true})})


  }
  catch(err){
    const error = new HttpError('Something went wrong',500)
    return next(error)
  }

}
const removeFavouriteRecipe = async (req,res,next) => {
  const recipeId = req.params.rid
  let existingRecipe
  try{
    existingRecipe = await Recipe.findById(recipeId).populate('creator')
    if(!existingRecipe){
      const error = new HttpError('Could not find any recipes provided user id',404)
      return next(error)
    }
    const {userId} = req.body
    let user
    try{
        user = await User.findById(userId,'-password').exec()
        if(!user){
          const error = new HttpError('Could not find any recipes provided user id',404)
          return next(error)
        }
       const index = user.myFavouriteRecipes.indexOf(recipeId)
       if(index > -1){
         user.myFavouriteRecipes.splice(index,1)
       }
      
        try{
          await user.save()
        }
        catch(err){
          const error = new HttpError('Something went wrong could not remove recipe', 500)
          return next(error)
         }
         res.status(200).json({user:user.toObject({getters:true})})
    }
    catch(err){
      const error = new HttpError('Something went wrong',500)
      return next(error)
    }

  }
  catch(err){
    const error = new HttpError('Something went wrong',500)
    return next(error)
  }
}

const createRecipe = async (req, res, next) =>{   
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    const error = new HttpError('Invalid inputs passed, please check your data.',422)
    return next(error)
  }                              //We create a new recipe
 
  const {title,ingredients,instructions,readyInMinutes,servings, ratings,comments, nutrients,price} = req.body

   let newIngredients = JSON.parse(ingredients)
   let newInstructions = JSON.parse(instructions)
   const myIngredients = []
   let myInstructions = []
  
   

   for(let i = 0;i<newIngredients.length;i++){
     console.log(newIngredients[i])
    let createIngredient = new Ingredient({
      name:newIngredients[i].name,
      amount:newIngredients[i].amount,
      measure:newIngredients[i].measure
    })
    myIngredients.push(createIngredient)
   }
   for(let i = 0;i<newInstructions.length;i++){
    let createInstruction = new Instruction({
      content:newInstructions[i].content
    })
    myInstructions.push(createInstruction)
   }

 
  const createdRecipe = new Recipe({
    title,
    image:req.file.path,
    ingredients:myIngredients,
    instructions:myInstructions,
    readyInMinutes,
    servings,
    price,
    creator:req.userData.userId,
    ratings:[],
    comments:[],
    nutrients:[],
    
  })
  let user
  try{
    user = await User.findById(req.userData.userId)                             // When we add a new recipe we need user's recipes array,too.That's why We need user who add this recipe.
  }
  catch(err){
    const errors = new HttpError('Something went wrong',500)
    return next(error)
  }
  if(!user){
    const error = new HttpError('This user does not exist',422)
    return next(error)
  }
  try{                                                                          // We need to do this.Because When we add a new recipe that affect user's recipes array, too.We want to make sure to add this recipe both collections.
      const sess = await mongoose.startSession()
      sess.startTransaction()
      await  createdRecipe.save({session:sess})
      user.recipes.push(createdRecipe)
      await user.save({session:sess})
      await sess.commitTransaction()
  }
  catch(err){
    const error = new HttpError('Created recipe failed, please create again ',500)

    return next(error)
  }
  res.status(201).json({recipe:createdRecipe})
}
const updateRecipe = async (req, res, next) => {                             
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    const error = new HttpError('Invalid inputs passed, please check your data.',422)
    return next(error)
  }
  const recipeId  = req.params.rid
  let existingRecipe
  try
  {
    existingRecipe = await Recipe.findById(recipeId).populate('creator')
  }
  catch(err){
    console.log(err.message)
    const error = new HttpError('Something went wrong could not update place', 500)
    return next(error)
   }
   if(existingRecipe.creator.id !== req.userData.userId){                       // We want to know that creator and currentUser same person or not.
      const error = new HttpError('You are not allowed to update this recipe ',403)
      return next(error)
   }
   const {title,ingredients,instructions,readyInMinutes,servings, ratings,comments, nutrients,price} = req.body

   let newIngredients = JSON.parse(ingredients)
   let newInstructions = JSON.parse(instructions)
   const myIngredients = []
   let myInstructions = []
  
   

   for(let i = 0;i<newIngredients.length;i++){
     console.log(newIngredients[i])
    let createIngredient = new Ingredient({
      name:newIngredients[i].name,
      amount:newIngredients[i].amount,
      measure:newIngredients[i].measure
    })
    myIngredients.push(createIngredient)
   }
   for(let i = 0;i<newInstructions.length;i++){
    let createInstruction = new Instruction({
      content:newInstructions[i].content
    })
    myInstructions.push(createInstruction)
   }
    existingRecipe.title = title
    existingRecipe.image = req.file.path
    existingRecipe.ingredients = myIngredients
    existingRecipe.instructions = myInstructions
    existingRecipe.readyInMinutes = readyInMinutes
    existingRecipe.servings = servings
    existingRecipe.nutrients  = nutrients
    existingRecipe.price = price
    try{
      await existingRecipe.save()
    }
    catch(err){
      const error = new HttpError('Something went wrong could not update recipe', 500)
      return next(error)
     }
     res.status(200).json({recipe:existingRecipe.toObject({getters:true})})
}
const deleteRecipe = async (req, res, next) => {
  const recipeId = req.params.rid
  let recipe
  try{
    recipe = await Recipe.findById(recipeId).populate('creator')
  }
  catch(err){
    const error  = new HttpError('Something went wrong',500)
    return next(error)
  }
  if(!recipe){
    const error = new HttpError('This recipe does not exist',404)
    return next(error)
  }
  if(recipe.creator.id !== req.userData.userId){                                // We want to know that creator and currentUser same person or not.
    const error = new HttpError('You are not allowed to delete this recipe',403)
    return next(error)
  }
  const imagePath = recipe.image
  try{
    const sess = await mongoose.startSession()
    sess.startTransaction()
    await recipe.remove({session:sess})
    recipe.creator.recipes.pull(recipe)
    await recipe.creator.save({session:sess})
    await sess.commitTransaction()
  }
  catch(err){
    const error  = new HttpError('Something went me wrong',500)
    return next(error)
  }
  fs.unlink(imagePath, err => {
    console.log(err);
  })

     res.status(200).json({message:'Deleted recipe'})
}
const createComment = async (req,res,next) => {
  const recipeId = req.params.rid
  let existingRecipe
  try{
    existingRecipe = await Recipe.findById(recipeId).populate('creator').populate('comments.user')
    if(!existingRecipe){
      const error  = new HttpError('This recipe does not exist',405)
      return next(error)
    }
    const {userId,content} = req.body
    let user 
    try{
      user = await User.findById(userId,'-password').exec()
      if(!user){
        const error  = new HttpError('This user does not exist',405)
        return next(error)
      }
      existingRecipe.comments.push({user:user,content:content})

    }
    catch(err){
      const error  = new HttpError('Something went wrong',405)
      return next(error)
    }
    try{
        await existingRecipe.save()
    }
    catch(err){
      const error  = new HttpError('Something went wrong',500)
      return next(error)
    }
  }
  catch(err){
    const error  = new HttpError('Something went me wrong',500)
    return next(error)
  }
  res.status(200).json({recipe:existingRecipe.toObject({getters:true})})
}
const deleteComment = async (req,res,next) => {
  const recipeId = req.params.rid
  let existingRecipe 
  try{
    existingRecipe = await Recipe.findById(recipeId).populate('creator').populate('comments.user')
    if(!existingRecipe){
      const error  = new HttpError('This recipe does not exist',405)
      return next(error)
    }
    const {commentId,userId} = req.body
    let user 
    try{
      user = await User.findById(userId,'-password').exec()
      if(!user){
        const error  = new HttpError('This user does not exist',405)
        return next(error)
      }
   
      existingRecipe.comments = existingRecipe.comments.filter(c => c.id !== commentId)
      try{
         await existingRecipe.save()
      }
      catch(err){
        const error  = new HttpError('Something wennt wrong',500)
        return next(error)
      }
    }
    catch(err){
      const error  = new HttpError('Something went wrong',405)
      return next(error)
    }
  }
  catch(err){
    const error  = new HttpError('Something went me wrong',500)
    return next(error)
  }
  res.status(200).json({recipe:existingRecipe.toObject({getters:true})})
}

const updateComment = async(req,res,next) => {
  const recipeId = req.params.rid
  let existingRecipe
  try{
    existingRecipe = await Recipe.findById(recipeId).populate('creator').populate('comments.user')
    if(!existingRecipe){
      const error  = new HttpError('This recipe does not exist',405)
       return next(error)
    }
    const {commentId,userId,newContent} = req.body
    let selectedComment = existingRecipe.comments.filter(c => c.id === commentId)
    if(!selectedComment){
      const error  = new HttpError('This comment does not exist',405)
      return next(error)
    }
  
    let myIndex 
     existingRecipe.comments.some(function(c,index){
      if(c.id === commentId){
        return myIndex = index
      }
    })
    console.log(myIndex)
    if(myIndex > -1){
      existingRecipe.comments[myIndex].content = newContent
    }
    try{
      await existingRecipe.save()
    }
    catch(err){
      const error  = new HttpError('Something went wrong2',500)
      return next(error)
    }

  }
  catch(err){
    const error  = new HttpError('Something went me wrong',500)
    return next(error)
  }
  res.status(200).json({recipe:existingRecipe.toObject({getters:true})})
}

exports.getAllRecipes = getAllRecipes
exports.getRecipesByUserId = getRecipesByUserId
exports.createRecipe = createRecipe
exports.updateRecipe = updateRecipe
exports.deleteRecipe = deleteRecipe
exports.getRecipeById = getRecipeById
exports.setRecipeRating = setRecipeRating
exports.getRecipeRating = getRecipeRating
exports.addFavouriteRecipe = addFavouriteRecipe
exports.removeFavouriteRecipe = removeFavouriteRecipe
exports.createComment = createComment
exports.deleteComment = deleteComment
exports.updateComment = updateComment
