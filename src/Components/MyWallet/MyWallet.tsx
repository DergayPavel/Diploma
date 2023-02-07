import { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { LogInContext } from "../../App";
function MyWallet() {
    const authorizathionCont=useContext(LogInContext);

    const navigate = useNavigate();

    const storeWallet=useSelector((state:any)=>state.coins.wallet);
    if(authorizathionCont.authorizathion){
        return ( 
        <div>
            <div className="container">
                <div>
                    <div className="heading" style={{
                        maxWidth:'400px',
                        margin:'10px auto',
                    }}>
                        <p>#</p>
                        <p>Image</p>
                        <p className="coin-name">My coin</p>
                    </div>
                    {storeWallet.map((item:Array<string>,index:number)=>{
                        return (<NavLink    
                                to={`/coin/${item[0]}`} 
                                key={item[0]}
                                style={{
                                    border:'none'
                                }}>
                                <div className="container">
                                    <div>
                                        <div className="heading" style={{
                                            maxWidth:'400px',
                                            margin:'10px auto',
                                        }}>
                                            <div>
                                                {index+1}
                                            </div>
                                            <img src={item[1]} alt="" /> 
                                            <div>
                                                {item[0].toUpperCase()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>)
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

function setLoading(arg0: boolean) {
    throw new Error("Function not implemented.");
}
