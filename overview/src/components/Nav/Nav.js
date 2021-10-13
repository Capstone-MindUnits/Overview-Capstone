import React from 'react';
import icon from  './icon.png'
import './Nav.scss';

function Nav() {
    return (
        <nav className=" navc w-2/3 h-20  mx-auto px-4 flex justify-between items-center  ">

            <a href="#" className=" text-white flex align-middle  font-black text-xl italic font-sans underline  " >
                Logo
            </a>

            <div className="  align-middle flex flex-row gap-2.5">
            <input type='text'  className=" bg-transparent  leading-tight focus:outline-none  text-white border-b-2  border-white w-32"  />
            <svg href=""
              width="20"
              height="20"
              fill="currentColor"
              className="text-white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
            </svg>
            </div>



        </nav>
    )
}

export default Nav
