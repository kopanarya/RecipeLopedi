import React,   {Suspense} from 'react'
import ReactDOM from 'react-dom'
import {Helmet} from "react-helmet";
import titleIcon from '../src/assets/favicon.ico'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Navbar from './shared/components/Navigation/Navbar'
import {AuthContext} from './shared/context/auth-context'
import {Spinner} from 'react-bootstrap'
import {useAuth} from './shared/hooks/auth-hook'
import history from './history';
import {Provider} from 'react-redux'
import store from './store'
import MealPlanList from './mealplans/MealPlanList'

const RecipeComplexDetails = React.lazy(() => import('./recipes/components/RecipeComplexDetails'))
const RecipeSearches = React.lazy(() => import ('./recipes/components/RecipeSearches'))
const Cuisines = React.lazy(() => import('./shared/pages/Cuisines'))
const Home = React.lazy(() => import('./shared/pages/Home'))
const Auth = React.lazy(() => import('./users/components/Auth'))
const CuisineRecipes = React.lazy(() => import('./shared/pages/CuisineRecipes'))
const RecipeDetails = React.lazy(() => import('./recipes/components/RecipeDetails'))
const Profile = React.lazy(() => import('./users/components/Profile'))
const NewRecipe = React.lazy(() => import('./recipes/components/NewRecipe'))
const RecipeEdit = React.lazy(() => import('./recipes/components/RecipeEdit'))
const UsersRecipes = React.lazy(()=> import('./recipes/components/UsersRecipes'))
const UserRecipesDetails = React.lazy(() => import('./recipes/components/UserRecipesDetails'))
const NewMealPlan = React.lazy(() => import ('./mealplans/NewMealPlan'))
const MealPlans = React.lazy(() => import('./mealplans/MealPlans'))
const MealPlanDetails = React.lazy(() => import('./mealplans/MealPlanDetails'))
const NotFound = React.lazy(() => import ('./shared/components/UIElements/NotFound'))



const  App = () => {
  const {token, login, logout, userId} = useAuth()

    let routes 
    if(token){
      routes = (

        <Switch>
           
           <Route path='/users/profile'  exact>
              <Profile />
            </Route>
           <Route path='/cuisines/recipe/:id' exact  >
                <RecipeDetails />
            </Route>
            <Route  exact path='/recipes/usersRecipes/details/:rid'>
              <UserRecipesDetails />
            </Route>
            <Route path='/recipe/update'>
                  <RecipeEdit />
            </Route>
            <Route exact path="/recipes/all">
                  <UsersRecipes />
            </Route>
            <Route path='/recipes/searches' >
                  <RecipeSearches />
            </Route>
            <Route path='/recipes/new' >
                  <NewRecipe />
            </Route>
            <Route path='/recipe/details/:id' >
                 <RecipeComplexDetails   />
            </Route>
            <Route path='/mealplans/new'>
               <NewMealPlan />
             </Route>
             <Route exact path='/mealplans/all'>
               <MealPlans />
             </Route>
             <Route exact path='/mealplan/details/:mid'>
                <MealPlanDetails />
             </Route>
             <Route exact path ='/cuisines/all'>
               <Cuisines />
             </Route>
             <Route path='/cuisines/cuisine/:id' exact>
                  <CuisineRecipes />
            </Route>
            <Route path='/' exact>
               <Home />
            </Route>
           
           <Redirect to='/' />

        </Switch>

      )
    }
    else{
      routes = 
          (  
            <Switch>
              
               <Route exact path ='/cuisines/all'>
                  <Cuisines />
                </Route> 
                <Route exact path='/cuisines/recipe/:id'  >
                  <RecipeDetails />
                 </Route>
                 <Route  exact path='/recipes/usersRecipes/details/:rid' >
                   <UserRecipesDetails />
                 </Route>
                 <Route exact path='/cuisines/cuisine/:id' >
                  <CuisineRecipes />
                 </Route>
                <Route  exact path='/mealplan/details/:mid'>
                   <MealPlanDetails />
                 </Route>
                 <Route exact path='/mealplans/all'>
                  <MealPlans />
                 </Route> 
                 <Route exact path='/recipes/searches' >
                  <RecipeSearches />
                 </Route>  
                 <Route exact path='/recipe/details/:id' >
                  <RecipeComplexDetails   />
                 </Route>
                <Route exact path="/recipes/all">
                  <UsersRecipes />
                </Route>
                <Route path='/auth'  exact>
                  <Auth />
                </Route>
                <Route path='/' exact >
                  <Home />
                </Route>
                <Route path='*'>
                  <NotFound />
                </Route>
                <Redirect to='/auth' />
            
            </Switch>      
          )
        
    }
    
    return(
      <React.Fragment>
         
        <Provider store={store}>
        <AuthContext.Provider
              value={
              {isLoggedIn:!!token,
              token:token,
              userId:userId,
              login:login,
              logout:logout}
            }>
        <Router history={history}>
       
          <Navbar />
          <Helmet>
               <meta charSet="utf-8" />
                <title>RecipeLopedi find your right recipe</title>
                <link rel="icon" type="image/png" href={titleIcon} sizes="32x32" />
        </Helmet>
          <main>
            <Suspense fallback={
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            }>
            {routes}
            </Suspense>
          </main>
         
        </Router>
        </AuthContext.Provider>
        </Provider>
        

      </React.Fragment>

    )

}
ReactDOM.render(
  <App />,document.getElementById('root')
)
