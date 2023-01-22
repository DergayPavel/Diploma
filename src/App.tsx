import axios from 'axios'
import React,{useState, useEffect} from 'react' 
import Coins from './Components/Coins/Coins'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Coin from './Components/Coin/Coin'
import NotFound from './Components/NotFound/Not_found'


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

function App() {
  const [coins,setCoins]=useState<Array<CoinsType>>([])

  const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'

  useEffect(()=>{
    axios.get(url)
      .then((res)=>{
        setCoins(res.data);
        console.log(res.data[0])
      })
      .catch((error)=>{
        console.log(error)
      })
  },[])
 //сделать автообновление данных по времени 1 мин, 5 мин, 10 мин
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <Coins coins={coins}/>
        }/>
        <Route path='*' element={
          <NotFound/>
        }/>
        <Route path='/coin' element={<Coin/>}>
          <Route path=':coinId' element={<Coin/>}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App;