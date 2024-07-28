import React from 'react'
import CoinDetails from './CoinDetails'
import { Link } from 'react-router-dom';
import CoinInfo from '../pages/CoinInfo';
import axios from 'axios';
import Navbar from './Navbar';
import AdImg from '../images/AdImage.png'
import { useEffect, useState } from 'react';


const url = ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");

const Coins = () => {
    const [coins, setCoins] = useState ([]);
  

  useEffect(() =>{ 
    
    const  fetchData = async ()=> {
    const request = await axios.get(url);
    setCoins(request.data);
    console.log(request.data);

  }
    fetchData()
    
  },[]);

 

  return (
    <div >
       <div>
        <Navbar/>
        
      </div>
      <div className='flex justify-center ml-6 md:ml-0 py-8 w-[90%] md:w-full  '><img src={AdImg} alt='' /> </div>
      <div className='border-b'> 
        <ul className='hidden md:flex gap-4  font-bold-md mx-12 text-gray-500 '>
          <li className='pb-4 hover:border-b-2 cursor-pointer lg:text-lg md:text-md sm:text-sm '>Portfolio</li>
          <li className='pb-4 hover:border-b-2 cursor-pointer lg:text-lg md:text-md sm:text-sm'>Coins</li>
          <li className='pb-4 hover:border-b-2 cursor-pointer lg:text-lg md:text-md sm:text-sm'>New Coins</li>
          <li className='pb-4 hover:border-b-2 cursor-pointer lg:text-lg md:text-md sm:text-sm'>Gainers & Losers</li>
          <li className='pb-4 hover:border-b-2 cursor-pointer lg:text-lg md:text-md sm:text-sm'>Catergories</li>
          <li className='pb-4 hover:border-b-2 cursor-pointer lg:text-lg md:text-md sm:text-sm'>Chains</li>
          <li className='pb-4 hover:border-b-2 cursor-pointer lg:text-lg md:text-md sm:text-sm lg:flex md:flex sm:hidden'>Real World Assets (RWA)</li>
          <li className='pb-4 hover:border-b-2 cursor-pointer lg:text-lg md:text-md sm:text-sm lg:flex md:flex sm:hidden'>Stable Coin</li>
          <li className='pb-4 hover:border-b-2 cursor-pointer lg:text-lg md:text-md sm:text-sm lg:flex md:flex sm:hidden'>Yeild Aggregator</li>
        </ul>
      </div>
        <div className='flex flex-col items-center mx-4 md:mx-0'>
          <div className='grid grid-cols-6 ml-6 py-3 w-full md:w-[1030px] border-b font-bold'>
            <p >#</p>
            <p >Coins</p>
            <p >Price</p>
            <p>24hrs</p>
            <p>Volume</p>
            <p>Mkt Cap</p>
          </div>
          <div>
          {
          coins.map(coin =>{
            return(
              <Link to={`/coin/${coin.id}`} element={<CoinInfo />} key={coin.id}>
              <CoinDetails coins={coin}  />
             </Link>

            )
          }  
            )             
}
          </div>
        
          </div> 
          
          
        
        
      </div>   
    
  )
}

export default Coins
