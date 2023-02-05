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
import SignUp from './Components/SignUp/Signup'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { createCoins } from './Components/Redux/Reducer/coinSlice'


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

interface LogInType{
  authorizathion:boolean,
  setAuthorizathion?:(authorizathion:boolean)=>void
}

export const LogInContext =React.createContext<LogInType>({authorizathion:false,setAuthorizathion:()=>{}});

function App() {
  const [authorizathion,setAuthorizathion]=useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [pageCoins,setPageCoins] = useState<number>(1);
  const [coins,setCoins]=useState<Array<CoinsType>>([]);

  const storeInfo=useSelector((state:any)=>state.coins.coinsArray);
  
  const dispatch=useDispatch();

  console.log('info from store: ',storeInfo);

  
  function addCoins(infoCoins:Array<CoinsType>){
    infoCoins.map(itemMap=>{
      coins.push(itemMap)
    });
    dispatch(createCoins({}));
    setCoins(coins);
  }

  const url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${pageCoins}&sparkline=false`
  
  function addPage(){
    setPageCoins(pageCoins+1);
    
    console.log('pageCoins: ',pageCoins);
  }

  useEffect(()=>{
    setLoading(true);
    axios.get(url)
      .then((res)=>{
        addCoins(res.data);
        setLoading(false);
      })
      .catch((error)=>{
        console.log(error)
      })
  },[pageCoins,coins])
 //сделать автообновление данных по времени 1 мин, 5 мин, 10 мин
  return ( 
    <>
    <LogInContext.Provider value={{authorizathion:false,setAuthorizathion:()=>{}}}>
      <Navbar/>
      <Menu/>
      <Routes>
        <Route path='/' element={<Coins coins={coins} load={loading} setPageCoins={addPage} pageCoins={pageCoins}/> }/>
        <Route path='/coin' element={<Coin/>}>
          <Route path=':coinId' element={<Coin/>}/>
        </Route>
        <Route path='/SignIn' element={<LogIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/MyWallet' element={<MyWallet/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </LogInContext.Provider>
    {/* {storeInfo.map((item:any,index:any)=>{
      return (
      <p key={index}>
        <li>
          {item}
        </li>
      </p>)
      })} */}
    </>

  )
}

export default App;