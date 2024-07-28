import React, { useState, useEffect} from 'react'; 
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'
import BackHome from '../component/BackHome';
import Navbar from '../component/Navbar';



const CoinInfo = () => {
  const params = useParams();
  
    const [coin, setCoin] = useState ([]);
    
   
  const coin_url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() =>{ 
      
      const  fetchData = async ()=> {
      const request = await axios.get(coin_url);
      setCoin(request.data);
      console.log(request.data);
  
    }
      fetchData()
      
    })
  return (
    
    <div>
      <Navbar/>
      
      <div className='container-fliud mx-10'>
      <BackHome /> 
    <div className='coin_content pt-8'>
      <div className='coin_rank '>
        <span className='bg-[#a5a4a4] rounded text-white px-2 py-1'>Rank #{coin.market_cap_rank}</span>

      </div>
      <div className='coin_info'>
        <div className='coin_heading flex items-center gap-1 py-3'>
          {
           coin.image ? <img className='w-8' src={coin.image.thumb} alt='' /> : null
          }
          <p className='font-bold text-3xl'>{coin.name}</p>
          <p>{coin.symbol}</p>

        </div>
        <div className='coin_price '>
          {coin.market_data?.current_price ? <h1 className='font-bold text-5xl'>{coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
          {coin.market_data?.current_price ? <p className='pt-2'>{coin.market_data.current_price.btc} btc</p> : null}        

        </div>
        
      </div>

    </div>
    <div className='coin_table py-4'>
    <table className='w-full'>
  <thead>
    <tr className='bg-gray-100 text-#a5a4a4'>
      <th className='p-[10px] border-r text-center'>1hr</th>
      <th className='p-[10px] border-r text-center'>24hr</th>
      <th className='p-[10px] border-r text-center'>7d</th>
      <th className='p-[10px] border-r text-center'>14d</th>
      <th className='p-[10px] border-r text-center'>30d</th>
      <th className='p-[10px] border-r text-center'>1yr</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='text-center'>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd}</p> : null}</td>
      <td className='text-center'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd}</p> : null}</td>
      <td className='text-center'>{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd}</p> : null}</td>
      <td className='text-center'>{coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd}</p> : null}</td>
      <td className='text-center'>{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd}</p> : null}</td>
      <td className='text-center'>{coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd}</p> : null}</td>
    </tr>
  </tbody>
</table>

      

    </div>
    <div>
      <div className='coin_content py-6'>
        <div className='stat'>
          <div >
            <div className='left_stat flex justify-between border-t border-b py-4'>
            <h1 className='font-bold'>24 Hour Low </h1>
            {coin.market_data?.low_24h ? <p>{coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
            
            </div>
            <div className='left_stat flex justify-between border-b py-4'>
            <h1 className='font-bold'>24 Hour High </h1>
            {coin.market_data?.high_24h ? <p>{coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
            
            {/* {coin.market_data?.high_24h ? <p>{coin.market_data.high_24.usd}</p> : null} */}
            {/* <h1>Total supply</h1>
            {coin.market_data?.maximum_supply ? <p>{coin.market_data.maximum_supply}</p> : null} */}
            
            </div>

          </div>
          <div className='right_stat'>
            <div className='left_stat flex justify-between border-b py-4'>
              <h1 className='font-bold'>Market cap</h1>
              {coin.market_data?.market_cap ? <h1>{coin.market_data.market_cap.usd.toLocaleString()}</h1> : null}
              {/* {coin.market_data?.market_cap ? <p>{coin.market_data.market_cap.usd}</p> : null} */}
              
            </div>
            <div className='left_stat flex justify-between  border-b py-4'>
              <h1 className='font-bold'>Circulating supply</h1>
              {coin.market_data?.circulating_supply ? <p>{coin.market_data.circulating_supply.toLocaleString()}</p> : null}
              {/* {coin.market_data?.circulating_supply ? <p>{coin.market_data.circulating_supply}</p> : null } */}
              
            </div>

          </div>

        </div>

      </div>
      <div className=''>
        <div className='about py-10'>
          <h2 className='font-bold text-4xl py-5 text-center'>About</h2>
          <p>{ coin.description ? coin.description.en : '' }</p> 
          

        </div>

      </div>
    </div>
  </div>
    </div>
  )
}

export default CoinInfo
