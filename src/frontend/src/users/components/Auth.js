import React ,{useContext, useState} from 'react'
import axios from 'axios'
import {Form,Container, Button,Card,Modal } from 'react-bootstrap'
import ImageUpload from '../../shared/components/FormElements/ImageUpload'
import Input from '../../shared/components/FormElements/Input'
import {AuthContext} from '../../shared/context/auth-context'
import {useForm} from '../../shared/hooks/form-hooks'
import {VALIDATOR_MINLENGTH,VALIDATOR_EMAIL, VALIDATOR_REQUIRE}  from '../../shared/util/validators'
import './Auth.css'


const genderType = ['Choose','Female','Male','Other']

const singUp = props => {
    const [isLoginMode,setIsLoginMode] = useState(true)
    const [error,SetError] = useState('')
    const auth  = useContext(AuthContext)
    const [errorMsg,setErrorMsg] = useState('')
    const [show, setShow] = useState(false);                                 //Error modal
    const handleClose = () => setShow(false);                                // We  use this for closing the modal.
    const handleShow = () => setShow(true);                                  // We use this for showing the modal.
    const [formState,inputHandler, setFormData]= useForm({
      email:{
        value:'',
        isValid:false
      },
      password:{
        value:'',
        isValid:false
      }
    },false)
    const switchModeHandler = () => {
        console.log(isLoginMode)
        if(!isLoginMode){
          setFormData({
            ...formState.inputs,
            username:undefined,
            age:undefined,
            gender:undefined,
            passwordConfirmation:undefined,
            image:undefined
  
          },formState.inputs.email.isValid && formState.inputs.password.isValid)
        }
        else{
          setFormData({
            ...formState.inputs,
            username:{
              value:'',
              isValid:false
            },
            passwordConfirmation:{
                value:'',
                isValid:false
            },
            age:{
              value:'',
              isValid:false
            },
            gender:{
              value:'',
              isValid:false
            },
            image:{
              value:null,
              isValid:false
            }
  
          },false)
        }
        setIsLoginMode(prevMode => !prevMode)
      }
      const authSubmitHandler = async event =>{
        event.preventDefault()
       
  
        if(isLoginMode){
          try {
         
            const responseData =  await  axios.post(process.env.REACT_APP_BACKEND_URL+'/users/login',
            {email:formState.inputs.email.value,password:formState.inputs.password.value})
            auth.login(responseData.data.userId, responseData.data.token)
          }
          catch(err){
            setShow(true);
            setErrorMsg(err.response.data.message)
          }
         }
        else {
         try {
           
           const formData = new FormData()
           formData.append('email',formState.inputs.email.value)
           formData.append('username',formState.inputs.username.value)
           formData.append('age',formState.inputs.age.value)
           formData.append('password',formState.inputs.password.value)
           formData.append('passwordConfirmation',formState.inputs.passwordConfirmation.value)
           formData.append('gender',formState.inputs.gender.value)
           formData.append('image',formState.inputs.image.value)
         
           if(formState.inputs.password.value !== formState.inputs.passwordConfirmation.value){
            SetError('Password does not match')
           }
           const responseData = await axios.post(process.env.REACT_APP_BACKEND_URL+'/users/signUp', formData)
          
             auth.login(responseData.data.userId, responseData.data.token)
         }
         catch(err) {
          setShow(true);
          setErrorMsg(err.response.data.message)
          }
        }
        }
    return (
        <div className='auth-main'>
           <h3 className='head-border'>-</h3>
          <Container className='authentication'>
              {show && <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Notification</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{errorMsg}</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>} 
                <Card  border="secondary" className='auth-card-container'  >
                      <Form >
                          <Input 
                            element='input'
                            type='email'
                            id='email'
                            name='email'
                            label='Email'
                            validators={[VALIDATOR_EMAIL()]}
                            errorText='Please enter an email...'
                            placeholder='Please enter an email...'
                            onInput={inputHandler}
                        />
                        <Input 
                            element='input'
                            type='password'
                            id='password'
                            name='password'
                            validators={[VALIDATOR_MINLENGTH(6)]}
                            label='Password'
                            errorText= 'Please enter a password...' 
                            placeholder='Please enter a password...'
                            onInput={inputHandler}
                        />
                        {!isLoginMode && (
                        <React.Fragment>
                              <Input 
                                element='input'
                                type='password'
                                validators={[VALIDATOR_MINLENGTH(6)]}
                                id='passwordConfirmation'
                                name='passwordConfirmation'
                                label='Password Confirmation'
                                errorText='Please enter a passsword with min 6 characters'
                                placeholder='Please enter confirm your password...'
                                onInput={inputHandler}
                                />
                              <Input 
                                element='input'
                                type='text'
                                id='username'
                                name='username'
                                label='Username'
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText='Please enter an username'
                                placeholder='Please enter an username...'
                                onInput={inputHandler}
                              
                              />
                              <Input
                                element='input'
                                type='number'
                                id='age'
                                label='Age'
                                name='age'
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText='Please enter your age...'
                                placeholder='Please enter your age...'
                                onInput={inputHandler}
                            
                              />
                              <Input
                                element='select'
                                id='gender'
                                label='Gender'
                                name='gender'
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText='Please choose your gender..'
                                placeholder='Please choose your gender..'
                                options={genderType}
                                onInput={inputHandler}
                              />
                              <div className='image-container'>
                                <ImageUpload
                                  id='image' 
                                  name='image'
                                  validators={[VALIDATOR_REQUIRE()]}
                                  errorText='Please import an image file.'
                                  onInput={inputHandler}
                                  
                                />
                              </div>
                             
                        </React.Fragment>

                        )}                  
                          <Button type='submit' disabled={!formState.isValid} onClick={authSubmitHandler}>
                            {isLoginMode ? 'LOGIN':'SIGN UP'}
                          </Button>
                    </Form>
                          <Button variant="outline-danger"  onClick={switchModeHandler}>SWITCH TO {isLoginMode ? 'SIGN UP' : 'LOGIN'}</Button>

                </Card>
          </Container>
        </div>
        
   
 )
}


export default singUp