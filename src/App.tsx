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
import { CoinsType, LogInType } from './ComponentsType/ComponentsType'

export const LogInContext =React.createContext<LogInType>({authorizathion:false,setAuthorizathion:()=>{}});

function App() {
  const [loading, setLoading] = useState(false);

  const [pageCoins,setPageCoins] = useState<number>(1);
  
  const [coins,setCoins]=useState<Array<CoinsType>>([]);
  
  function addCoins(infoCoins:Array<CoinsType>){
    infoCoins.map(itemMap=>{
      coins.push(itemMap)
    });
    
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
      {/* <Menu/> */}
      <Routes>
        <Route path='/' element={<><Menu/><Coins coins={coins} load={loading} setPageCoins={addPage} pageCoins={pageCoins}/> </>}/>
        <Route path='/coin' element={<><Menu/><Coin/></>}>
          <Route path=':coinId' element={<><Menu/><Coin/></>}/>
        </Route>
        <Route path='/SignIn' element={<><Menu/><LogIn/></>}/>
        <Route path='/SignUp' element={<><Menu/><SignUp/></>}/>
        <Route path='/MyWallet' element={<><Menu/><MyWallet/></>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </LogInContext.Provider>
    </>

  )
}

export default App;