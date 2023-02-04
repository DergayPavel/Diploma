import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogInContext } from '../../App';
import './Menu.css'

function Menu() {
    const authorizathionCont=useContext(LogInContext);
    console.log('wallet aut: ',authorizathionCont.authorizathion)
    const navigate = useNavigate();
    let linkToWallet='/MyWallet'

    if(!authorizathionCont.authorizathion){
        linkToWallet='/SignIn';
    }

    function LinkToAuthoriazation(){
        if(!authorizathionCont.authorizathion){
            return (
                <Link to='/SignIn'>
                    <div className="menu-logIn">
                        LogIn
                    </div>
                </Link>
            )
        }
        else{
            return (
                <Link to='/'>
                    <div className="menu-logIn" onClick={()=>{
                        authorizathionCont.authorizathion=false}}>
                        LogOut
                    </div>
                </Link>
            )
        }
    }
    return (
        <div className="menu">
            <div className="menu-block">
                <Link to={linkToWallet}>
                    <div className="menu-bag" >
                        My wallet
                    </div>
                </Link>
                {LinkToAuthoriazation()}
            </div>
        </div>
    )
  }
  
  export default Menu;