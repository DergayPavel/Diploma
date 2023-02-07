export interface LogInType{
    authorizathion:boolean,
    setAuthorizathion?:(authorizathion:boolean)=>void
}

export interface CoinsType{
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

export interface CoinType{
    additional_notices?:Array<any>,
    asset_platform_id?:null,
    block_time_in_minutes?:number,
    categories?:Array<string>,
    coingecko_rank?:number,
    coingecko_score?:number,
    community_data?:any,
    community_score?:number,
    country_origin?:string,
    description?:any,
    detail_platforms?:any,
    developer_data?:any,
    developer_score?:number,
    genesis_date?:string,
    hashing_algorithm?:string,
    id?:string,
    image?:any,
    last_updated?:string,
    links?:any,
    liquidity_score?:number,
    localization?:any,
    market_cap_rank?:number,
    market_data?:any,
    name?:string,
    platforms?:any,
    public_interest_score?:number,
    public_interest_stats?:any,
    public_notice?:null,
    sentiment_votes_down_percentage?:number,
    sentiment_votes_up_percentage?:number,
    status_updates?:any,
    symbol?:string,
    tickers?:any
}

export interface ChartInfoType{
    date:number,
    price:number
}

export interface propsCoinItemType{
    coins:CoinsType,
    key:string|undefined
}

export interface propsCoinsType{
    coins:Array<CoinsType>,
    load:boolean,
    pageCoins:number,
    setPageCoins:any
}

export interface ProblemType{
    email:boolean,
    userName:boolean,
    password:boolean,
    repeatPassword:boolean
}

export interface UserType{
    email:String,
    userName:String,
    password:String,
    repeatPassword:String
}

export interface ChartItemType{
    market_caps: Array<Array<number>>, 
    prices: Array<Array<number>>, 
    total_volumes:Array<Array<number>>, 
}