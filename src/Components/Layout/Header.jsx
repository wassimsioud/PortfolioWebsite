import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MobileHeader from './MobileHeader';

function Header() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div>
    <div className='bg-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-10 xl:px-20 xl:py-6 text-gray-700'>
        <div className='sm:flex sm:gap-7 hidden justify-end '>
          <a href='#'>HOME</a>
          <a href='#'>ABOUT</a>
          <a href='#'>EXPERIENCE</a>
          <a href='#'>EDUCATION</a>
          <a href='#'>CONTACT</a>
        </div> 
        
        <div className='sm:hidden flex justify-end'>
          <button className='w-10 h-10 border border-black focus:bg-black transition-colors duration-300' 
            onFocus={() => setIsFocused(true)}   
            onBlur={() => setIsFocused(false)}>
          <FontAwesomeIcon icon={faBars} className={`${isFocused ? 'text-white' : 'text-black'} transition-colors duration-300`} /> 
          </button>
        </div>
        
    </div>
    <MobileHeader/>
    </div>
  )
}

export default Header