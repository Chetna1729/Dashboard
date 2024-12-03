import React from "react";
import { LiaWarehouseSolid } from "react-icons/lia";
import { GiCircle } from "react-icons/gi";
import { BsLayoutSidebar } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbStackFront } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { HiChatAlt2 } from "react-icons/hi";
import { CiCalendarDate } from "react-icons/ci";
import { TbLayoutKanban } from "react-icons/tb";
import { LuShoppingCart } from "react-icons/lu";
import { GoBook } from "react-icons/go";
import { CiDeliveryTruck } from "react-icons/ci";
import logo from "C:/Users/cheta/OneDrive/Desktop/DashBoard/src/assets/logo.webp";

const SideBar = () => (
  <div className="bg-gray-800 text-white w-64 h-screen p-5">
    <h2 className="text-2xl font-bold mb-8 flex items-center">
      <img
        src={logo}
        alt="Logo"
        className="h-8 w-8 mr-2"
      />
      Vuexy
    </h2>
    <ul>
      {/* Dashboards */}
      <li className="mb-4 hover:text-purple-500">
        <a href="#" className="flex items-center">
          <LiaWarehouseSolid className="mr-2" />
          Dashboards
        </a>
      </li>

      {/* Analytics */}
      <li className="mb-4 hover:text-purple-500">
        <a href="#" className="flex items-center">
          <GiCircle className="mr-2 h-2 w-2" />
          Analytics
        </a>
      </li>

      {/* CRM */}
      <li className="mb-4 hover:text-purple-500">
        <a href="#" className="flex items-center">
          <GiCircle className="mr-2 h-2 w-2" />
          CRM
        </a>
      </li>

      {/* eCommerce */}
      <li className="mb-4 hover:text-purple-500">
        <a href="#" className="flex items-center">
          <GiCircle className="mr-2 h-2 w-2" />
          eCommerce
        </a>
      </li>

      {/* Logistics */}
      <li className="mb-4 hover:text-purple-500">
        <a href="#" className="flex items-center">
          <GiCircle className="mr-2 h-2 w-2" />
          Logistics
        </a>
      </li>

      {/* Academy */}
      <li className="mb-4 hover:text-purple-500">
        <a href="#" className="flex items-center">
          <GiCircle className="mr-2 h-2 w-2" />
          Academy
        </a>
      </li>

      {/* Layouts */}
      <li className="mb-4 hover:text-purple-500">
        <a href="#" className="flex items-center justify-between">
          <span className="flex items-center">
            <BsLayoutSidebar className="mr-2" />
            Layouts
          </span>
          <MdKeyboardArrowRight />
        </a>
      </li>

      {/* Front Pages */}
      <li className="mb-4 hover:text-purple-500">
        <a href="#" className="flex items-center justify-between">
          <span className="flex items-center">
            <TbStackFront className="mr-2" />
            Front pages
          </span>
          <MdKeyboardArrowRight />
        </a>
      </li>
      <h6>APPS & PAGES</h6>
      <br />
      {/* Email */}
      <li className="mb-4 hover:text-purple-500">
        <a href="#" className="flex items-center">
          <MdOutlineMail className="mr-2" />
          Email
        </a>
      </li>

      {/* Chat */}
      <li className="mb-4 hover:text-purple-500">
        <a href="#" className="flex items-center">
          <HiChatAlt2 className="mr-2" />
          Chat
        </a>
      </li>

      {/* Calendar */}
      <li className="mb-4 hover:text-purple-500">
        <a href="#" className="flex items-center">
          <CiCalendarDate className="mr-2" />
          Calendar
        </a>
      </li>

      {/* Kanban */}
      <li className="mb-4 hover:text-purple-500">
        <a href="#" className="flex items-center">
          <TbLayoutKanban className="mr-2" />
          Kanban
        </a>
      </li>

      {/* eCommerce */}
      <li className="mb-4 hover:text-purple-500">
        <a href="#" className="flex items-center justify-between">
          <span className="flex items-center">
            <LuShoppingCart className="mr-2" />
            eCommerce
          </span>
          <MdKeyboardArrowRight />
        </a>
      </li>

      {/* Academy */}
      <li className="mb-4 hover:text-purple-500">
        <a href="#" className="flex items-center justify-between">
          <span className="flex items-center">
            <GoBook className="mr-2" />
            Academy
          </span>
          <MdKeyboardArrowRight />
        </a>
      </li>

      {/* Logistics */}
      <li className="mb-4 hover:text-purple-500">
        <a href="#" className="flex items-center justify-between">
          <span className="flex items-center">
            <CiDeliveryTruck className="mr-2" />
            Logistics
          </span>
          <MdKeyboardArrowRight />
        </a>
      </li>
    </ul>
  </div>
);

export default SideBar;
