import { Link} from "react-router-dom";
import BirdAnim from "./Bird-anim/Bird-anim";
function addBirdAnim(){
    let arr=[];
    for(let i=0; i<10; i++){
        arr.push(<BirdAnim/>)
    }
    return arr
}

function ConteinerBird(){
    return(
    <div className="container-notfound container-bird">
        {addBirdAnim()}
        <div className="container-title">
            <div className="title">
                <div className="number">4</div>
                <div className="moon">
                    <div className="face">
                        <div className="mouth"></div>
                        <div className="eyes">
                            <div className="eye-left"></div>
                            <div className="eye-right"></div>
                        </div>
                    </div>
                </div>
                <div className="number">4</div>
            </div>
            <div className="subtitle">Oops. Looks like you took a wrong turn.</div>
            <Link to='/'>
                <button>Go home</button>
            </Link>
            
        </div>
    </div>); 
}
export default ConteinerBird;