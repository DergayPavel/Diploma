import { useState } from "react";
import { Link } from "react-router-dom";
import './SignUp.css'

interface ProblemType{
    email:boolean,
    userName:boolean,
    password:boolean,
    repeatPassword:boolean
}
interface UserType{
    email:String,
    userName:String,
    password:String,
    repeatPassword:String
}

function SignUp() {
    const [problem, setProblem]=useState<ProblemType>({email:true,userName:true,password:true,repeatPassword:true})

    const [user,setUser]=useState<UserType>({email:'',userName:'',password:'',repeatPassword:''})

    function changeUserName(value:string){
        user.userName=value;
        if(user.userName.toLowerCase()!==user.userName){
            problem.userName=true
        }
        else{
            problem.userName=false
        }
    }

    function changeUserEmail(value:string){
        user.email=value
        if(user.email.includes('@')){
            problem.email=true
        }
        else{
            problem.email=false
        }
    }

    function changeUserPassword(value:string){
        user.password=value;
        let arrPass=user.password.split('');
        let colNumber=0;
        let colLater=0;
        arrPass.map((item:string)=>{
            if(!isNaN(Number(item))){
                colNumber++;
            }
            else{
                colLater++;
            }
        })
        if(colLater>2 && colNumber>2){
            problem.password=true
        }
        else{
            problem.password=false
        }
    }

    function changeUserRepeatPassword(value:string){
        user.repeatPassword=value;
        if(user.repeatPassword===user.password){
            problem.repeatPassword=true
        }
        else{
            problem.repeatPassword=false
        }
    }

    return (
        <div className="signup">
            <div className="signup-form">
                <label htmlFor="UserName">
                        User Name 
                </label>
                <input
                    className="signup-input" 
                    type="text"
                    placeholder="User name"
                    onChange={(event?)=>
                        changeUserName(event.target.value)}/>
                <label htmlFor="ProblemUserName" 
                    className="problems-lable">
                        User Name must contain uppercase and lowercase letters
                </label>
                <label htmlFor="Email">
                        Email
                </label>    
                <input
                    className="signup-input" 
                    type="email"
                    placeholder="Email"
                    onChange={(event?)=>
                        changeUserEmail(event.target.value)}/>
                <label htmlFor="ProblemEmail" className="problems-lable">
                        Email must contain @
                </label>
                <label htmlFor="Password">
                        Password
                </label>     
                <input
                    className="signup-input" 
                    type="text"
                    placeholder="Password"
                    onChange={(event?)=>
                        changeUserPassword(event.target.value)}/>
                <label htmlFor="ProblemPassword" className="problems-lable">
                    Password must contain more than two letters and numbers
                </label>
                <label htmlFor="PasswordRepeat" >
                        Repeat password
                </label>
                <input
                    className="signup-input" 
                    type="email"
                    placeholder="Pereat password"
                    onChange={(event?)=>
                        changeUserRepeatPassword(event.target.value)}/> 
                <label htmlFor="ProblemRepeatPassword" className="problems-lable">
                    Passwords do not match
                </label>
                <button className="signup-btn" 
                    onClick={()=>{
                        console.log(user, problem)
                    }}>
                    Sign up
                </button>
                <Link to='/SignIn'>
                    <div>
                        Log In
                    </div>
                </Link>
            </div>
        </div>
    );
    }
export default SignUp;