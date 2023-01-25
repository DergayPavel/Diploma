import { useState } from "react";
import eyeOpen from './open-eye.png'
import eyeClose from './close-eye.png'
import './LogIn.css'


function LogIn() {

    const [show,setShow]=useState(false);
    
    const showPassword=()=>{
        setShow(!show)
    }
    
    return (
        <div className="login">
            <div className="form">
                <input
                    className="input-email" 
                    type="email"
                    placeholder="Email"/>
                <div className='mainPassword'>
                    <div className='blockPassword'>
                        <input type={show?'text':'password'}
                            placeholder='Password'
                            className='inputPassword'/>
                        <img src={show? eyeOpen: eyeClose} 
                            onClick={showPassword} 
                            className='imgPassword'
                            alt="1"/>
                    </div>
                </div>
            </div>
        </div>
    );
    }
export default LogIn;