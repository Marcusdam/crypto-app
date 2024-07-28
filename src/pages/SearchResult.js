// import React from 'react';
// import Navbar from '../component/Navbar';
// import BackHome from '../component/BackHome';
// const search_url = `https://api.coingecko.com/api/v3/search?query=`;

   

// const SearchResult = (props) => {
//   return (
//     <div>
//        <div>
       
//        <div className='flex justify-between items-center border-t border-b py-6'>
//        <div className='flex items-center ml-8 relative'>
//                <img className='w-[150px] mr-10' src={Logo} alt='' />
//                <ul className='flex gap-3 text-sm text-gray-500  group cursor-pointer'>
//                  <li>Cryptocurrencies
//                    <ul className='absolute hidden bg-white border text-justify top-10 space-y-6 rounded group-hover:block'>
//                    <ul className='border-b pb-2'>
//                    <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
//                      <a href='#' className='p-6'>By Market Cap</a></li>
//                      <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
//                        <a href='#' className='p-6'>New Cryptocurrencies</a>
//                        </li>
//                    </ul>
                     
                     
//                      <ul className='border-b pb-3 -pt-4'>
//                      <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
//                        <a href='#' className='p-6 '>Catergories</a>
//                        </li>
//                      <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
//                        <a href='#' className='p-6'>WatchLists</a>
//                        </li>
//                      <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
//                        <a href='#' className='p-6'>Gainers & Losers</a>
//                        </li>
//                      <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
//                        <a href='#' className='p-6'>High Volume</a>
//                        </li>
//                      </ul>
//                      <ul className=' pb-4'>
//                        <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
//                          <a href='#' className='p-6'>All coins</a>
//                          </li>
//                        <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
//                          <a href='#' className='p-6'>Compare coins</a>
//                           <span className='text-[#2fd653] text-sm px-2  rounded border bg-[#e0dede]'>New</span>
//                           </li>
//                        <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
//                          <a href='#' className='p-6'>Converter </a>
//                          <span className='text-[#33e259] text-sm px-2  rounded border bg-[#e0dede]'>New</span>
//                          </li>
//                        <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
//                          <a href='#' className='p-6'>Global chart</a>
//                          </li>
//                      </ul>
//                      </ul>
   
                   
//                  </li>
//                  <li className=''>Exchanges
//                  <ul className='absolute hidden bg-white border text-justify top-10 space-y-6 rounded group-hover:block'>
//                    <ul className='border-b pb-2'>
//                    <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
//                      <a href='#' className='p-6'>Crypto Exchanges</a></li>
//                      <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
//                        <a href='#' className='p-6'>Decentralized Exchanges</a>
//                        </li>
//                      <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
//                        <a href='#' className='p-6'>Derivatives</a>
//                        </li>
//                    </ul>
//                      </ul>
//                  </li>
//                  <li className='relative group'>NFT
//                    <ul className='absolute hidden group-hover:block'>
//                    <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
//                        <a href='#' className='p-6'>Derivatives</a>
//                        </li>
//                    <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
//                        <a href='#' className='p-6'>Derivatives</a>
//                        </li>
//                    <li className='hover:bg-slate-300 hover:border-l-4 border-[#a5a4a4] cursor-pointer py-2'>
//                        <a href='#' className='p-6'>Derivatives</a>
//                        </li>
//                    </ul>
//                  </li>
//                  <li>Learn Crypto</li>
//                  <li>Products</li>
//                </ul>
//              </div>
//              <div>
//                <ul className='flex items-center gap-3  text-gray-500 '>
//                  <img className='w-4' src={candyImg} alt=''/>
//                  <li>Portfolio</li>
//                  <li >Login</li>
//                  <li className='bg-[#4cca11] text-white py-2 px-3 rounded text-md'>Sign Up</li>
//                  <form onSubmit={searchCoin}> 
//                  <input placeholder='search' className='border mr-8 py-2  bg-slate-100 text-#a5a4a4 rounded' onChange={e=> setQuery(e.target.value)} />
                 
//                  <Link to='/searchresult'><button>search</button> </Link>
//                  </form>
//                </ul>
//              </div>
//        </div>
//        <div className='flex justify-center py-8'><img src={AdImg} alt='' /> </div>
//        <div>
         
//        </div>
//      </div>
//       <div className='ml-10'>
//       <BackHome/>
//       </div>
      


//     </div>
//   )
// }

// export default SearchResult
