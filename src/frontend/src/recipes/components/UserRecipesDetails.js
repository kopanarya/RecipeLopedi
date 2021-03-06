import React,{useState,useEffect,useContext} from 'react'
import { useParams, useLocation} from "react-router";
import ReactStars from 'react-stars'
import {useHistory} from 'react-router-dom'
import { useSelector, useDispatch}  from 'react-redux'
import './RecipeDetails.css'
import {Container,Row,Col,Figure,Card,ListGroup,Button,InputGroup,FormControl,Spinner,Badge,Modal,Image} from 'react-bootstrap'
import {fetchUsersRecipeDetails} from '../../redux-stuff/actions/recipeActions'
import axios from 'axios';
import {AuthContext} from '../../shared/context/auth-context'
import Comment from '../../shared/components/FormElements/Comment'
import likedIcon from '../../assets/liked.png'
import servedIcon from '../../assets/served.png'
import clockIcon from '../../assets/clock.png'
import moneyIcon from '../../assets/price.png'
import ratingIcon from '../../assets/rating.png'
import dislikeIcon from '../../assets/dislike.png'


  const  UserRecipesDetails = props =>  {
    let location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()
    const [show, setShow] = useState(false)

    const [isCrud,setIsCrud] = useState('')
    const [creator,setCreator] = useState('')
   
    
    const [isError,setError] = useState('')
    const [isCommented,setIsComment]= useState(false)
    const [userComment,setUserComment] = useState('')
    const [isFavourite,setIsFavourite] = useState(true)
    const [selectedIndex,setSelectedIndex] = useState(0)
    const [isRated,setIsRated] = useState(true)
    const [wasRated,setWasRated] = useState(true)
    const [selectedRecipe,setSelectedRecipe] = useState([])
    const [prevRating,setPrevRating] = useState(0)
    const [newRating,setNewRating] = useState(0)
    const [rating,setRating] = useState()
    const [updatedComment,setUpdatedComment] = useState('')
    const auth  = useContext(AuthContext)
    const [isEdit,setIsEdit] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [recComments,setReComments] = useState([])
   

    const {rid} = useParams()
    useEffect( () => { 
        const fetchData = async () => {
            try{
                await  dispatch(fetchUsersRecipeDetails(rid))
                if(location.state !== undefined){
                    setIsCrud(location.state.crud)
                    setCreator(location.state.creator)

                }
                
            }
            catch(err){
                setError(err.response.data.message)
                setShow(true)
            }
         
        }
        fetchData()
    },[dispatch,rid])
    let recipe  = useSelector(state => state.recipes.usersRecipeDetailsInfo )
     useEffect(() => {
         if(!isCommented && recipe.comments !== undefined){
            setReComments(recipe.comments.reverse())
         }
     },[isCommented,recipe])
   
    const ratingChanged = (currentRating) => {
        setRating(currentRating)
        setIsRated(false)
    }
    const handleMyFavouriteClick = async () => {
        if(isFavourite){
            try{
                const responseData = await axios.post(  process.env.REACT_APP_BACKEND_URL+`/recipes/user/myfavouriteRecipe/${rid}`,{userId:auth.userId},
                {
                headers: {Authorization : `Bearer ${auth.token}`} })
                setIsFavourite(!isFavourite)
            }
            catch(err){
                setError('This recipe already exist in your list')
                setShow(true)
            }
        }
        else{
            try{ 
                const responseData = await axios.post(process.env.REACT_APP_BACKEND_URL+`/recipes/user/usermyfavouriteRecipe/delete/${rid}`,{userId:auth.userId},
            {
            headers: {Authorization : `Bearer ${auth.token}`} })
            setIsFavourite(!isFavourite)
           }
           catch(err){
            setError(err.response.data.message)
                setShow(true)
        }
           
        }
     
    
    }
    useEffect(() => {
        const getRating = async () => {
            try{ const responseData = await axios.post(
                process.env.REACT_APP_BACKEND_URL+`/recipes/recipe/getRating/${rid}`,{userId:auth.userId})
              
                setWasRated(responseData.data.averageRating.wasUserRated)
                setPrevRating(responseData.data.averageRating.rating)
            }
            catch(err){
                setError(err.response.data.message)
                setShow(true)
            }
           
            }
        getRating()
    },[rating,prevRating])
     
    useEffect(() => {
          const handleSetRating = async () => {
             
              if(rating > 0 ){
                    
                  try{ 
                      let data = {
                          rating:parseFloat(rating),
                          userId: auth.userId
                      }
                       const responseData = await axios.post(
                                     process.env.REACT_APP_BACKEND_URL+`/recipes/recipe/rating/${rid}`,
                                     {data},
                                     {headers: {Authorization : `Bearer ${auth.token}`}}
                       )
                       console.log(responseData.data)
                       setIsRated(false)
                       setNewRating(parseFloat(responseData.data.averageRating))
                      
                    }
                    catch(err){
                        setShow(true);
                        setError(err.response.data.message)
                    }
             
                  
               }
            
        }
        handleSetRating()

     },[rating,isRated])   

    const handleCommentChange =  (e) => {
        e.preventDefault()
      
        setUserComment(e.target.value)

       
    }
    const handleSendComment = async (e) => {
        e.preventDefault()
        const responseData = await axios.post(process.env.REACT_APP_BACKEND_URL+`/recipes/comment/recipe/${rid}`,{content:userComment,userId:auth.userId},
        {
        headers: {Authorization : `Bearer ${auth.token}`} })
        console.log(responseData.data)
        setSelectedRecipe(responseData.data.recipe.comments.reverse())
        setIsComment(true)
        setUserComment('')
      
    }
 
    const handleUpdateChange = (e) => {
        e.preventDefault()
        setUpdatedComment(e.target.value)
      
    }
    const handleRemoveComment = async (index,userId) => {
        console.log(index)
       const responseData = await axios.post(process.env.REACT_APP_BACKEND_URL +`/recipes/recipe/comments/delete/${rid}`,{commentId:index,userId:userId},{
        headers: {Authorization : `Bearer ${auth.token}`} })
        console.log(responseData)
        setSelectedRecipe(responseData.data.recipe.comments.reverse())
        setIsComment(true)
        
    }
    const handleUpdateComment =   (index,userId) => {
        let selectedComment =  recipe.comments.filter(c => c.id === index)
        if(selectedComment){
            console.log('ada')
            setIsEdit(!isEdit)
            console.log(selectedComment)
            setSelectedIndex(index)
            setUpdatedComment(selectedComment[0].content)
        }
    }
    const handleUpdateCommentSave = async (index,userId) => {
       
        const responseData = await axios.put(process.env.REACT_APP_BACKEND_URL +`/recipes/recipe/comments/update/${rid}`,
        {commentId:index,userId:userId,newContent:updatedComment},{
            headers: {Authorization : `Bearer ${auth.token}`} })
            console.log(responseData)
            setIsComment(true)
            setSelectedIndex(index)
            setUpdatedComment('')
            setSelectedRecipe(responseData.data.recipe.comments.reverse())
           
    }
    const handleDelete = async (e) => {
        e.preventDefault()
        try{
            const responseData = await axios.delete(process.env.REACT_APP_BACKEND_URL+`/recipes/${rid}`,{
                headers: {Authorization : `Bearer ${auth.token}`} })
                console.log(responseData)
                history.push('/users/profile')
        }
        catch(err){
            setShow(true);
            setError(err.response.data.message)
        }

    }
    const handleEdit = async (e) => {
        e.preventDefault()
        history.push('/recipe/update',{data:recipe})
    }
    
    return (
        <React.Fragment>
         {recipe === undefined   && <Spinner animation="border" variant="primary" /> }
         <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Error Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>{isError}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
               </Modal>
         {recipe !==  undefined  &&
         
          <Container className='recipedetails-box'>
            
          <Row>
              <Col xs={12} md={4} lg={4}>
                  <Figure className='card-recipe-image-container'  border="secondary">
                      <Figure.Image className='card-recipe-image'
                          alt="171x180"
                          src={process.env.REACT_APP_ASSET_URL +`/${recipe.image}`}
                      />
                  </Figure>
              </Col>
              <Col xs={12} md={8} lg={8}>
                  <Row>
                      <Col xs={12}  className='some-details'>
                          <h3 className='recipe-title'>{recipe.title}</h3>
                          <Row className='badges badges-container'>
                              <Col xs={12}  md={8} lg={3} className='details-icon'>
                                <div>
                                <Image className='detail-icon-img' src={servedIcon}/>
                                </div>
                                <div>
                                    <Badge variant="secondary" className='badge'>
                                        Serving: {recipe.servings}
                                    </Badge>
                                </div>
                              </Col>
                              <Col xs={12}  md={4} lg={3} className='details-icon'>
                                <div>
                                    <Image className='detail-icon-img' src={moneyIcon}/>
                                </div>
                                <div>
                                    <Badge variant="success" className='badge'>
                                        PerServingPrice:£ {recipe.price} 
                                    </Badge>
                                </div>
                              </Col>
                              <Col xs={12}   md={8} lg={3} className='details-icon'>
                                <div>
                                    <Image className='detail-icon-img' src={ratingIcon}/>
                                </div>
                                <div>
                                    <Badge variant="primary" className='badge'>
                                        Rating: { isRated ?  prevRating : newRating}
                                    </Badge>
                                </div>
                              </Col>
                              <Col xs={12}  md={4} lg={3} className='details-icon'>
                                <div>
                                    <Image className='detail-icon-img' src={clockIcon}/>
                                </div>
                                <div>
                                    <Badge variant="danger" className='badge'>
                                        ReadyInMinutes: {recipe.readyInMinutes}
                                    </Badge>
                                </div>
                              </Col>
                              
                          </Row>
                          {auth.token &&
                           <React.Fragment>
                               {recipe.creator!== undefined && 
                                <>
                                 {auth.userId !== recipe.creator.id && 
                                    <div className='rating-fav-container'>
                                        <div className='fav-container'>
                                          <Button variant="link"  size="lg" onClick={handleMyFavouriteClick}>
                                           {isFavourite ? <Image src={likedIcon} className='like-icon' />  : <Image src={dislikeIcon} className='like-icon' /> } 
                                          </Button>
                                          <div>
                                           <Badge variant="success" className='badge'>
                                               Your Favourite
                                           </Badge>
                                         </div>
                                        </div>
                                        {!wasRated && 
                                            <div className='rating-container'>
                                              <h4 className='rating'>Rating</h4>
                                              <ReactStars
                                                count={5}
                                                onChange={ratingChanged}
                                                size={30}
                                                edit={isRated}
                                                value={rating}
                                                color2={'#ffd700'} />
                                            </div>
                                        
                                        }
                                   </div>
                                    
                                 }
                                </>
                               
                               } 
                                {isCrud === undefined && <div></div>}
                               
                                {isCrud !== undefined   && creator === auth.userId &&
                                    <React.Fragment>
                                        <div  className='crud-buttons'>
                                            <Button variant='warning' className='btn-edit' size="lg" onClick={handleEdit} >Edit</Button>
                                            <Button variant='danger' className='btn-delete'  size="lg" onClick={handleDelete} >Delete</Button>
                                        </div>
                                    </React.Fragment>
                                }
                           </React.Fragment>
                          }
                      </Col>
                  </Row>
              </Col>
          </Row>
          <Row>
              <Col sm={4}>
                  <Card className='ingredient-container' >
                          <ListGroup variant="flush">
                          {recipe.ingredients && recipe.ingredients.map(ing =>
                            <ListGroup.Item key={ing.id}>{ing.amount} {ing.measure} {ing.name}</ListGroup.Item>
                            )}     
                            
                          </ListGroup>
                  </Card>
              </Col>
              <Col sm={8}>
                  <Card className='instruction-container' >
                          <ListGroup variant="flush">
                          {recipe.instructions && recipe.instructions.map(ins =>
                            <ListGroup.Item key={ins.id}>{ins.content}</ListGroup.Item>
                            )}                       
                          </ListGroup>
                  </Card>
              </Col>
          </Row>
          <Row className='comment-container'>
              {auth.token &&
                        <Col>
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Give some comments ..."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={handleCommentChange}
                                value={userComment}
                                />
                                <InputGroup.Append>
                                <Button variant="success" onClick={handleSendComment}>Comment</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
              }
      
          </Row>
          {recipe.comments === undefined   && <Spinner animation="border" variant="primary" /> }
          {recipe.comments !==  undefined  &&
             <div>
               {!isCommented && recComments.map(com => 
                <Comment 
                    key={com.id}
                    id={com.id}
                    user={com.user}
                    content={com.content}
                    updatedAt={com.updatedAt}
                    isEdit={isEdit}
                    selectedIndex={selectedIndex}
                    deleteComment={() => handleRemoveComment(com.id,com.user)} 
                    updateComment={() => handleUpdateComment(com.id,com.user)}
                    updateCommentChange={handleUpdateChange}
                    updatedCommentSave ={() => handleUpdateCommentSave(com.id,com.user)}
                    updatedComment={updatedComment}
                />
                 )} 
               {isCommented && selectedRecipe.length !== 0 &&  selectedRecipe.map(com => 
                <Comment
                    key={com.id}
                    id={com.id}
                    user={com.user.id}
                    content={com.content}
                    updatedAt={com.updatedAt}
                    isEdit={isEdit}
                    selectedIndex={selectedIndex}
                    deleteComment={() => handleRemoveComment(com.id,com.user.id)} 
                    updateComment={() => handleUpdateComment(com.id,com.user.id)}
                    updateCommentChange={handleUpdateChange}
                    updatedCommentSave ={() => handleUpdateCommentSave(com.id,com.user.id)}
                    updatedComment={updatedComment}
                     />
                 )}
             </div>
          }
         
     </Container>
        
         }
        </React.Fragment>
    )
}

export default UserRecipesDetails
