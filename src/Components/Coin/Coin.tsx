import axios from "axios";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import Loading from "react-loading";
import { useParams } from "react-router-dom";
import './Coin.css';
import React from 'react';
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


interface CoinType{
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

interface ChartInfoType{
    date:number,
    price:number
}

function Coin() {
    
    const [loading, setLoading] = useState(false);

    const params=useParams()

    const [coin, setCoin]=useState<CoinType>({})

    const [coinChart, setCoinChart]=useState<Array<ChartInfoType>>([])
    
    const url=`https://api.coingecko.com/api/v3/coins/${params.coinId}`;
    
    const urlChart=`https://api.coingecko.com/api/v3/coins/${params.coinId}/market_chart?vs_currency=usd&days=max`

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };
    
    function getData(info:any){
        let arrChart:any=[];
        console.log('info: ',info.prices);
        info.prices.map((item:any)=>{
            let nameFull= new Date(item[0]);
            let name=nameFull.getDate()+'.'+nameFull.getMonth()+'.'+nameFull.getFullYear()
            let obj={
                name:name,
                price:item[1]
            }
            arrChart.push(obj);
        })
        setCoinChart(arrChart)
        console.log('arrChart: ',arrChart)
    }

    useEffect(()=>{
        setLoading(true);
        axios.get(url)
            .then((res)=>{        
                setCoin(res.data)
                console.log('res ',res.data)
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error)
                setLoading(false)});
        axios.get(urlChart)
            .then((res)=>{        
                console.log('res Chart data: ',res.data);
                getData(res.data);
            })
            .catch((error)=>{
                console.log(error)
                setLoading(false)})
    },[])


    return (<>
        {loading
        ? <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center'
        }}>
            <Loading type='balls' color='black'/>
        </div>
        :
        <div>
            <div className="coin-conteiner">
                <div className="content">
                    <h1>{coin.name}</h1>
                </div>
                <div className="content">
                    <div className="rank">
                        <span className="rank-btn">
                            Rank #{coin.market_cap_rank}
                        </span>
                    </div>
                    <div className="info">
                        <div className="coin-heading">
                            {coin.image?<img src={coin.image.small} alt=''/>:null}
                            <p>{coin.name}</p>
                            {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p>:null}
                        </div>
                        <div className="coin-price">
                            {coin.market_data?.current_price ? <h1>{coin.market_data.current_price.usd.toLocaleString()}</h1>:null}
                        </div>
                    </div>
                </div>
                <div className="content">
                    <table>
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1yr</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{coin.market_data?.price_change_percentage_1h_in_currency.usd 
                                    ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</p> 
                                    : null}
                                </td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency.usd 
                                    ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</p>
                                    : null}
                                </td>
                                <td>{coin.market_data?.price_change_percentage_7d_in_currency.usd 
                                    ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</p>
                                    : null}
                                </td>
                                <td>{coin.market_data?.price_change_percentage_14d_in_currency.usd 
                                    ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%</p>
                                    : null}
                                </td>
                                <td>{coin.market_data?.price_change_percentage_30d_in_currency.usd 
                                    ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</p> 
                                    : null}
                                </td>
                                <td>{coin.market_data?.price_change_percentage_1y_in_currency.usd 
                                    ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%</p>
                                    : null}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="content">
                    <div className="stats">
                        <div className="left">
                            <div className="row">
                                <h4>24 Hour Low</h4>
                                {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>:null}
                            </div>
                            <div className="row">
                                <h4>24 Hour High</h4>
                                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>:null}
                            </div>
                        </div>
                        <div className="right">
                            <div className="row">
                                <h4>Market Cap</h4>
                                {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd}</p>:null}
                            </div>
                            <div className="row">
                                <h4>Circulating Supply</h4>
                                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p>:null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="charts">
                        <LineChart width={700} height={300} data={coinChart}>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <CartesianGrid stroke="#eee" strokeDasharray="1 1"/>
                            <Line type="monotone" dataKey="price" stroke="#8884d8" />
                        </LineChart>
                    </div>
                    
                </div>
                <div className="content">
                    <div className="about">
                        <h3>About</h3>
                        <p dangerouslySetInnerHTML={{
                            __html:DOMPurify.sanitize(coin.description ? coin.description.en:''),
                        }}></p>
                    </div>
                </div>
            </div>
        </div>}
    </>
    )
}

export default Coin;