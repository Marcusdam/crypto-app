import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import logo from '../Images/logo.svg';
import Close from '../Images/icon-close.svg';
import Hamburger from '../Images/icon-hamburger.svg'

const Navbar = () => {
  const [toggle, setToggle] = useState (false);
  const handleToggle = () =>{
    setToggle(!toggle);

    
  }
  return ( 
    
    <div >
      <nav className='container-fluid  bg-white w-full fixed py-4 z-10 border-b shadow-md'>
        <div className='navbar container mx-auto  display-flex'>
          <div className='flex items-center justify-between'>
            <div className='logo md: ml-4'>
              <img src={logo} alt='logo' />
            </div>
            
            <div>
            <ul className='hidden space-x-6 md:flex '>
            <Link to='Home' className='hover:border-b-2 border-b-[#2a3866] hover:text-[#2d705f]'>Home</Link>
            <Link to='About' className='hover:border-b-2 border-b-[#2a3866] hover:text-[#2d705f]'>About</Link>
            <Link to='Contact' className='hover:border-b-2 border-b-[#2a3866] hover:text-[#2d705f]'>Contact</Link>
            <Link to='Blog' className='hover:border-b-2 border-b-[#2a3866] hover:text-[#2d705f]'>Blog</Link>
            <Link to='Dashboard' className='hover:border-b-2 border-b-[#2a3866] hover:text-[#2d705f]'>Dashboard</Link>
                    
              </ul>
            </div>

           <Link to='LogIn' className='text-blue-900 border px-2 py-1 hover:border-red-400'>Log In</Link>
            <button className='hidden p-3 px-6 py-2 text-white bg-green-500 rounded-full baseline md:block'><Link to='LogIn'>Request Invite</Link></button>

            <div className='mr-4 lg:hidden'>
              {
                (toggle === false) ? <img onClick={handleToggle} src={Hamburger} alt='img' /> :   <img onClick={handleToggle} src={Close} alt='img' />
              }
             
           
            </div>

          </div>
 
        </div>
        <div className='container mx-auto '>
          
            {
                (toggle === false) ? null : <ul className=' absolute mt-5 py-20 bg-white w-full space-y-6 lg:hidden md:flex flex-col sm:flex flex-col text-center'>
            <Link to='Home'>Home</Link>
            <Link to='About'>About</Link>
            <Link to='Contact'>Contact</Link>
            <Link to='Blog'>Blog</Link>                  
              </ul>
              }
          
        

    </div>


      </nav>
      
    

    </div>
  )
}

export default Navbar
