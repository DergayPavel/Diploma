import { useState } from "react";
import eyeOpen from './open-eye.png'
import eyeClose from './close-eye.png'
import './LogIn.css'


function LogIn() {

    const [show,setShow]=useState(false);
    
    const showPassword=()=>{
        setShow(!show)
    }
    const [logInBtn, setLogInBtn]=useState<boolean>(false)
    
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    
    function handleChangeEmail (event:any){
        setEmail(event.target.value);
        if(event.target.value.includes('@') && password.length>7){
            setLogInBtn(true)
        }
        else{
            setLogInBtn(false)
        }
    return;
    }
    
    function handleChangePassword (event:any){
        setPassword(event.target.value);
        if(email.includes('@') && event.target.value.length>7){
            setLogInBtn(true)
        }
        else{
            setLogInBtn(false)
        }
    return;
    }

    return (
        <div className="login">
            <div className="form">
                <input
                    className="input-email" 
                    type="email"
                    placeholder="Email"
                    onChange={(event)=>
                    handleChangeEmail(event)}/>
                <div className='mainPassword'>
                    <div className='blockPassword'>
                        <input type={show?'text':'password'}
                            placeholder='Password'
                            className='inputPassword'
                            onChange={(event)=>
                                handleChangePassword(event)}/>
                        <img src={show? eyeOpen: eyeClose} 
                            onClick={showPassword} 
                            className='imgPassword'
                            alt="1"/>
                    </div>
                </div>
                <button 
                    className="btn-login" 
                    onClick={(logInBtn)=>{
                        if(logInBtn){
                            
                        }
                    }} >
                    Log in
                </button>
                <div>
                    Sign up
                </div>
            </div>
        </div>
    );
    }
export default LogIn;