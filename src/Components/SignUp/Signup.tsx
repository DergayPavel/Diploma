import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogInContext } from "../../App";
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
    const authorizathionCont=useContext(LogInContext);

    const navigate = useNavigate();

    const [problem, setProblem]=useState<ProblemType>({email:true,userName:true,password:true,repeatPassword:true})

    const [user,setUser]=useState<UserType>({email:'',userName:'',password:'',repeatPassword:''})

    function changeUserName(value:string){
        user.userName=value;
        let Problems=problem
        if(user.userName.toLowerCase()!==user.userName){
            Problems.userName=true;
        }
        else{
            Problems.userName=false
        }
        setProblem(Problems)
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

    function getProblem(){
        if(!problem.userName){
            return(
                alert('User Name mast have one uppercase and one lowwercase letter')
            )
        }
        else if(!problem.email){
            return(
                alert('Email must contain @')
            )
        }
        else if(!problem.password){
            return(
                alert('Password must contain more than two letters and numbers')
            )
        }
        else if(!problem.repeatPassword){
            return(
                alert('Passwords do not match')
            )
        }
        else{
            navigate('/SignIn')
            return;
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
                <label htmlFor="Email">
                        Email
                </label>    
                <input
                    className="signup-input" 
                    type="email"
                    placeholder="Email"
                    onChange={(event?)=>
                        changeUserEmail(event.target.value)}/>
                <label htmlFor="Password">
                        Password
                </label>     
                <input
                    className="signup-input" 
                    type="text"
                    placeholder="Password"
                    onChange={(event?)=>
                        changeUserPassword(event.target.value)}/>
                <label htmlFor="PasswordRepeat" >
                        Repeat password
                </label>
                <input
                    className="signup-input" 
                    type="email"
                    placeholder="Pereat password"
                    onChange={(event?)=>
                        changeUserRepeatPassword(event.target.value)}/> 
                <button className="signup-btn" 
                    onClick={()=>{
                        console.log(user, problem)
                        getProblem()
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