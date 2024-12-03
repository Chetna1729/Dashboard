import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiCirclesFourDuotone } from "react-icons/pi";
import { TbLanguage } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";

const Header = () => (
    <div className="bg-gray-900 text-white flex justify-between items-center p-4 ">
      <IoSearch />
      <input
        type="text"
        
        placeholder="Search (Ctrl+l)"
        className="bg-gray-800 text-sm text-gray-300 p-2 rounded w-full"
        
      />

<div className="flex items-center">
     

        <button className="mx-2">🌙</button>
        
      <TbLanguage className="mx-2 h-5 w-5" />
      <PiCirclesFourDuotone className="mx-2 h-5 w-5"/>
      <IoMdNotificationsOutline className="mx-2 h-5 w-8" />
        <img
          src="https://via.placeholder.com/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
  

export default Header
