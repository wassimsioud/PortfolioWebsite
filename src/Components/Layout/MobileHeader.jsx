import React from 'react'

function MobileHeader() {
  return (
    <div>
        <hr className="w-full bg-black border-1 border-black" />
        <div className="flex flex-col w-full">
  <a href="#" className="py-2 border-b-2 border-transparent hover:border-black active:border-black">HOME</a>
  <a href="#" className="py-2 border-b-2 border-transparent hover:border-black active:border-black text-green-500">ABOUT</a>
  <a href="#" className="py-2 border-b-2 border-transparent hover:border-black active:border-black">EXPERIENCE</a>
  <a href="#" className="py-2 border-b-2 border-transparent hover:border-black active:border-black">EDUCATION</a>
  <a href="#" className="py-2 border-b-2 border-transparent hover:border-black active:border-black">PORTFOLIO</a>
  <a href="#" className="py-2 border-b-2 border-transparent hover:border-black active:border-black">BLOG</a>
  <a href="#" className="py-2 border-b-2 border-transparent hover:border-black active:border-black">CONTACT</a>
</div>
        
    </div>
  )
}

export default MobileHeader