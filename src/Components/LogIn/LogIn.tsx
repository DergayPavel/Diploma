import { useState } from "react";
import { useContext } from 'react';
import eyeOpen from '../../ComponentsImage/open-eye.png'
import eyeClose from '../../ComponentsImage/close-eye.png'
import './LogIn.css'
import { LogInContext } from '../../App';
import { Link, useNavigate} from "react-router-dom";

function LogIn() {
    const authorizathionCont=useContext(LogInContext);

    const [show,setShow]=useState(false);
    
    const showPassword=()=>{
        setShow(!show)
    }
    const [logInBtnState, setLogInBtnState]=useState<boolean>(false)
    
    const [email, setEmail]=useState('')

    const [password, setPassword]=useState('')

    const navigate = useNavigate();
    
    function handleChangeEmail (event:any){
        setEmail(event.target.value);
        if(event.target.value.includes('@') && password.length>7){
            setLogInBtnState(true)
        }
        else{
            setLogInBtnState(false)
        }
    return;
    }
    
    function handleChangePassword (event:any){
        setPassword(event.target.value);
        if(email.includes('@') && event.target.value.length>7){
            setLogInBtnState(true)
        }
        else{
            setLogInBtnState(false)
        }
    return;
    }

    const changeLogIn=()=>{
        authorizathionCont.authorizathion=true;
        navigate('/');
    }

    return (
        <div className="login">
            <div className="form">
                <label htmlFor="Email">
                    Email
                </label>
                <input
                    className="input-email" 
                    type="email"
                    placeholder="Email"
                    onChange={(event)=>
                    handleChangeEmail(event)}/>
                <div className='mainPassword'>
                    <label htmlFor="Password">
                        Password
                    </label>
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
                        if(logInBtnState){ 
                            changeLogIn()
                        }
                        }} >
                    Log in
                </button>
                <Link to='/SignUp'>
                    <div>
                        Sign up
                    </div>
                </Link>
                
            </div>
        </div>
    );
    }
export default LogIn;