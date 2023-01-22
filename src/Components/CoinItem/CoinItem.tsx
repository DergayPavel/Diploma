import './CoinItem.css';

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
    coins:CoinsType
}



function CoinItem(props:propsType) {

    return (
        <div className="coin-row">
            <p>{props.coins.market_cap_rank}</p>
            <div className="img-symbol">
                <img src={props.coins.image} alt='1'/>
                <p>{props.coins.symbol?.toUpperCase()}</p>
            </div>
            <p>${props.coins.current_price?.toLocaleString()}</p>
            <p>{props.coins.price_change_percentage_24h?.toFixed(2)}%</p>
            <p className="hide-mobile">${props.coins.total_volume?.toLocaleString()}</p>
            <p className="hide-mobile">${props.coins.market_cap?.toLocaleString()}</p>
        </div>
    )
}

export default CoinItem;