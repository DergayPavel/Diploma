import { Link } from 'react-router-dom';
import './Menu.css'

function Menu() {
    return (
        <div className="menu">
            <div className="menu-block">
                <Link to='/MyWallet'>
                    <div className="menu-bag">
                        My wallet
                    </div>
                </Link>
                <Link to='/SignIn'>
                    <div className="menu-logIn">
                        LogIn
                    </div>
                </Link>
            </div>
        </div>
    )
  }
  
  export default Menu;