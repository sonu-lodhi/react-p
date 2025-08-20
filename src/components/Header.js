import React, { useEffect, useState } from 'react';

function Header() {
const [showNav,setShowNav] = useState(false)

useEffect(() => {
  setShowNav(window.screen.width>=640)
}, [])
 

  return (
    <header>
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#About">
            <h1 className="text-2xl font-bold text-blue-300 gradientText cursor-pointer">Portfolio</h1>
          </a>
          <i className="material-icons sm:hidden" onClick={()=>setShowNav(!showNav)}>{showNav?'close':'menu'}</i>
          <ul className={`flex flex-col sm:flex-row  sm:static justify-between absolute bg-[#00dbde] sm:bg-black top-12 right-4 py-2 sm:py-0 rounded-lg w-1/2 sm:h-auto sm:w-auto h-40 z-10 sm:text-[#F4EEE0] text-black transition duration-500 opacity-${showNav?1:0}`}>
            <li className="ml-6 sm:border-b-2 border-black transition duration-500 ease-in-out hover:border-blue-300">
              <a href="#About"  >
                About
              </a>
            </li>
            <li className="ml-6 sm:border-b-2 border-black transition duration-500 ease-in-out hover:border-blue-300">
              <a href="#skills" >
                Skills
              </a>
            </li>
            <li className="ml-6 sm:border-b-2 border-black transition duration-500 ease-in-out hover:border-blue-300">
              <a href="#Projects" >
                Projects
              </a>
            </li>
            <li className="ml-6 sm:border-b-2 border-black transition duration-500 ease-in-out hover:border-blue-300">
              <a href="#Contact" >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
