import CoinItem from "../CoinItem/CoinItem";
import {NavLink} from 'react-router-dom'
import './Coins.css'
import Loading from "react-loading";
import { propsCoinsType } from "../../ComponentsType/ComponentsType";

function Coins(props:propsCoinsType) {
    return (<div>
        <div className="container">
            <div>
                <div className="heading">
                    <p>#</p>
                    <p className="coin-name">Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className="hide-mobile">Volume</p>
                    <p className="hide-mobile">Mkt Cap</p>
                </div>
                {props.coins.map(coins=>{
                    return(
                    <>
                        <NavLink    
                            to={`/coin/${coins.id}`} 
                            key={coins.id}
                            style={{
                                border:'none'
                            }}>
                            <CoinItem coins={coins} key={coins.id}/>
                        </NavLink>
                    </>
                    )
                })}
                {props.load 
                    ? <div style={{
                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'center'
                        }}>
                            <Loading type='balls' color='black'/>
                        </div>
                    :null}
                <div className="btn-conteiner">
                    <button style={{margin:0 }}onClick={()=>{props.setPageCoins(props.pageCoins+1)}}>
                        Add Coins
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Coins;