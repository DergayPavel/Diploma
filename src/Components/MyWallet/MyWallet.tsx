import { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { LogInContext } from "../../App";
import CoinItem from "../CoinItem/CoinItem";

function MyWallet() {
    const authorizathionCont=useContext(LogInContext);

    const navigate = useNavigate();

    const storeWallet=useSelector((state:any)=>state.coins.wallet);
    
    console.log('storeWallet: ',storeWallet);
    
    if(authorizathionCont.authorizathion){
        return ( 
        <div>
            <div className="container">
                <div>
                    <div className="heading" style={{
                        maxWidth:'200px',
                        margin:'10px auto',
                    }}>
                        <p>#</p>
                        <p className="coin-name">My coin</p>
                    </div>
                    {storeWallet.map((item:any,index:number)=>{
                        return(
                        <>
                            <NavLink    
                                to={`/coin/${item}`} 
                                key={item}
                                style={{
                                    border:'none'
                                }}>
                                <div className="container">
                                    <div>
                                        <div className="heading" style={{
                                            maxWidth:'200px',
                                            margin:'10px auto',
                                        }}>
                                            <div>
                                                {index}
                                            </div>
                                            <div>
                                                {item.toUpperCase()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </>
                        )
                    })}
            </div>
        </div>
    </div>
        )
    }
    else{
        navigate('/SignIn');
        return(<></>)
    }
    
}

export default MyWallet;