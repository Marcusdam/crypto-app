import React from 'react'
import { Link } from 'react-router-dom'


const BackHome = (props) => {

    
  return (
    <div>
       <div className='flex items-center'>
       <Link to='/' >
           
           <h2 className=' text-blue-400'>Home /</h2>  
       
       </Link>
       <p className='pl-2'>Coins</p>
       </div>
        
      
    </div>
  )
}

export default BackHome
