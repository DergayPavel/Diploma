import axios from 'axios'
import React,{useState, useEffect} from 'react' 
import Coins from './Components/Coins/Coins'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Coin from './Components/Coin/Coin'
import NotFound from './Components/NotFound/Not_found'
import Menu from './Components/Menu/Menu'
import LogIn from './Components/LogIn/LogIn'
import MyWallet from './Components/MyWallet/MyWallet'


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
  const [loading, setLoading] = useState(false);
  const [coins,setCoins]=useState<Array<CoinsType>>([])

  const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(()=>{
    setLoading(true);
    axios.get(url)
      .then((res)=>{
        setCoins(res.data);
        setLoading(false);
      })
      .catch((error)=>{
        console.log(error)
      })
  },[])
 //сделать автообновление данных по времени 1 мин, 5 мин, 10 мин
  return ( 
    <>
      <Navbar/>
      <Menu/>
      <Routes>
        <Route path='/' element={<Coins coins={coins} load={loading}/>}/>
        <Route path='/coin' element={<Coin/>}>
          <Route path=':coinId' element={<Coin/>}/>
        </Route>
        <Route path='/SignIn' element={<LogIn/>}/>
        <Route path='/MyWallet' element={<MyWallet/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App;