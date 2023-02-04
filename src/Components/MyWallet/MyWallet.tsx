import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LogInContext } from "../../App";

function MyWallet() {
    const authorizathionCont=useContext(LogInContext);
    const navigate = useNavigate();
    if(authorizathionCont.authorizathion){
        return ( 
        <>
            MyWallet
        </>
    )
    }
    else{
        navigate('/SignIn');
        return(<></>)
    }
    
}

export default MyWallet;