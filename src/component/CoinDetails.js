import React from 'react'
import { BsStar } from 'react-icons/bs';



const CoinDetails = (props) => {
  return (
    <div className=' '>
      <div className='grid grid-cols-6 mx-8 py-3 md:w-[1030px] gap-4 items-center text-[10px] md:text-[14px]   border-b hover:bg-gray-100'>
        <p className='flex items-center -pl-8 '><BsStar className='mr-2'/>{props.coins.market_cap_rank}</p>
        <div className='flex items-center gap-2 '>
            <img className='w-6  h-6' src={props.coins.image } alt='img' />
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div >
        <p>${props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p>${props.coins.total_volume.toLocaleString()}</p>
        <p>${props.coins.market_cap.toLocaleString()}</p>
      </div>
      
      
    </div>
  )
}

export default CoinDetails
