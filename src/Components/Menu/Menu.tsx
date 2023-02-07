import { useContext, useState} from 'react';
import { Link} from 'react-router-dom';
import { LogInContext } from '../../App';
import './Menu.css'

function Menu() {
    const authorizathionCont=useContext(LogInContext);

    let link='/SignIn';

    if(authorizathionCont.authorizathion){
        link='/MyWallet';
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
                <Link to='/SignIn'>
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
                <Link to={'/'}>
                    <div className="menu-bag" >
                        Main
                    </div>
                </Link>
                <Link to={link}>
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