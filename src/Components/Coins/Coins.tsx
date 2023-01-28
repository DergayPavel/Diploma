import CoinItem from "../CoinItem/CoinItem";
import {NavLink} from 'react-router-dom'
import './Coins.css'
import Loading from "react-loading";
// import Coin from "../Coin/Coin";

interface CoinsType{
    id?: string,
    symbol?: string,
    name?: string,
    image?: string,
    current_price?: number,
    market_cap?: number,
    market_cap_rank?: number,
    fully_diluted_valuation?: number,
    total_volume?: number,
    high_24h?: number,
    low_24h?: number,
    price_change_24h?: number,
    price_change_percentage_24h?: number,
    market_cap_change_24h?: number,
    market_cap_change_percentage_24h?: number,
    circulating_supply?: number,
    total_supply?: number,
    max_supply?: number,
    ath?: number,
    ath_change_percentage?: number,
    ath_date?: string,
    atl?: number,
    atl_change_percentage?: number,
    atl_date?: string,
    roi?: null,
    last_updated?: string
}

interface propsType{
    coins:Array<CoinsType>,
    load:boolean
}

function Coins(props:propsType) {
    return (<div>
        {props.load 
            ? <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'center'
            }}>
                <Loading type='balls' color='black'/>
            </div>
            :
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
            </div>
        </div>}
        </div>
    )
}

export default Coins;