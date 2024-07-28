import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo.png';
import candyImg from '../images/candy.svg';

import axios from 'axios';
import Hamburger  from '../images/icon-hamburger.svg';
import Close from '../images/icon-close.svg';


const search_url = `https://api.coingecko.com/api/v3/search?query=`;
const Navbar = () => {

  const [toggler, setToggler] = useState(false);
  const handletoggler = () =>{
    setToggler(!toggler)
  }
    
    const [query,  setQuery] = useState ('');

    const searchCoin = (e) => {
        e.preventDefault();

    
    
        const fetchSearch =async () => {
            const requestSearch = await axios.get(search_url + `${query}`)
            setQuery(requestSearch.data.results);
            console.log(query);
          }
          fetchSearch()

  }
  return (

    <div>
       
    <div className='flex justify-between items-center border-t border-b py-6'>
    <div className='flex items-center ml-8 relative'>
            <img className='w-[150px] mr-10' src={Logo} alt='' />
            <ul className='hidden md:flex gap-3 text-sm text-gray-500 '>
              <li className='group cursor-pointer'>Cryptocurrencies
                <ul className='absolute hidden bg-white border text-justify top-10 space-y-6 rounded group-hover:block'>
                <ul className='border-b pb-2'>
                <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
                  <a href='#' className='p-6'>By Market Cap</a></li>
                  <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
                    <a href='#' className='p-6'>New Cryptocurrencies</a>
                    </li>
                </ul>
                  
                  
                  <ul className='border-b pb-3 -pt-4'>
                  <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
                    <a href='#' className='p-6 '>Catergories</a>
                    </li>
                  <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
                    <a href='#' className='p-6'>WatchLists</a>
                    </li>
                  <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
                    <a href='#' className='p-6'>Gainers & Losers</a>
                    </li>
                  <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
                    <a href='#' className='p-6'>High Volume</a>
                    </li>
                  </ul>
                  <ul className=' pb-4'>
                    <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
                      <a href='#' className='p-6'>All coins</a>
                      </li>
                    <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
                      <a href='#' className='p-6'>Compare coins</a>
                       <span className='text-[#2fd653] text-sm px-2  rounded border bg-[#e0dede]'>New</span>
                       </li>
                    <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
                      <a href='#' className='p-6'>Converter </a>
                      <span className='text-[#33e259] text-sm px-2  rounded border bg-[#e0dede]'>New</span>
                      </li>
                    <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
                      <a href='#' className='p-6'>Global chart</a>
                      </li>
                  </ul>
                  </ul>

                
              </li>
              <li className='group cursor-pointer'>Exchanges

              <ul className='absolute hidden bg-white border text-justify top-10 space-y-6 rounded group-hover:block'>
                <ul className='border-b pb-2'>
                <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
                  <a href='#' className='p-6'>Crypto Exchanges</a></li>
                  <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
                    <a href='#' className='p-6'>Decentralized Exchanges</a>
                    </li>
                  <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
                    <a href='#' className='p-6'>Derivatives</a>
                    </li>
                </ul>
                  </ul>
              </li>
              <li className='relative group cursor-pointer'>NFT
                <ul className='absolute hidden border bg-white text-justify top-10 space-y-2 rounded  group-hover:block'>
                <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
                    <a href='#' className='p-6'>Derivatives</a>
                    </li>
                <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
                    <a href='#' className='p-6'>Derivatives</a>
                    </li>
                <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
                    <a href='#' className='p-6'>Derivatives</a>
                    </li>
                </ul>
              </li>
              <li>Learn Crypto</li>
              <li>Products</li>
            </ul>
            
          </div>
          <div>
            <ul className='hidden md:flex items-center gap-3   text-gray-500 '>
              <img className='w-4' src={candyImg} alt=''/>
              <li>Portfolio</li>
              <li >Login</li>
              <li className='bg-[#4cca11] text-white py-2 px-3 rounded text-md'>Sign Up</li>
              <form onSubmit={searchCoin}> 
              <input placeholder='search' className='border mr-8 py-2  bg-slate-100 text-#a5a4a4 rounded' onChange={e=> setQuery(e.target.value)} />
              
              {/* <Link to='/searchresult'><button className='mr-8 px-4 py-1 rounded border
              bg-gray-100'>search</button> </Link> */}
              </form>
            </ul>
            <div className='mr-8 lg:hidden'>
              {
                (toggler === false) ? <img onClick={handletoggler} src={Hamburger} alt='img' /> :   <img onClick={handletoggler} 
              src={Close} alt='img' />
              }
            
           
            </div>
          </div>
    </div>
    {
            (toggler === false) ? null : <ul className=' absolute mt-5 py-20 bg-white w-full space-y-6 grid md:hidden text-center'>
            <Link to='/'>Home</Link>
            <Link to='About'>Cryptocurrencies</Link>
            <Link to='Contact'>Exchanges</Link>
            <Link to='Blog'>WatchLists</Link>                  
              </ul>
              }
    
    <div>
      
    </div>
  </div>
    
  )
}

export default Navbar
