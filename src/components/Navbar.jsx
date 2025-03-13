import React, { useState } from 'react';
import logo from "../assets/website/logo.png";
import { FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';

function Navbar({ handleOrderPopup }) {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { id: 1, name: "Home", link: "#/" },
    { id: 2, name: "Best Seller", link: "#/services" },
  ];

  const dropDownLinks = [
    { name: "Trending Books", link: "/#" },
    { name: "Best Selling", link: "/#" },
    { name: "Authors", link: "/#" },
  ];

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src={logo} alt="Logo" className="w-10" /> Books
          </a>

          {/* Desktop Navigation & Dark Mode */}
          <div className="hidden sm:flex items-center gap-4">
            <DarkMode />
            <ul className="flex items-center gap-4">
              {menu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.link} className="inline-block py-4 px-4 hover:text-primary duration-200">
                    {menu.name}
                  </a>
                </li>
              ))}
              <li className="group relative cursor-pointer">
                <a href="/#home" className="flex items-center gap-[2px]">
                  Quick Links <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </a>
                <div className="absolute left-0 z-50 hidden w-[150px] rounded-md bg-white dark:bg-gray-800 dark:text-white p-2 text-black group-hover:block">
                  <ul className="space-y-3">
                    {dropDownLinks.map((data) => (
                      <li key={data.name}>
                        <a className="inline-block w-full rounded-md p-2 hover:bg-primary/20" href={data.link}>
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
            >
              Order <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden bg-white dark:bg-gray-900 dark:text-white w-full flex flex-col items-center py-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        {menu.map((menu) => (
          <a key={menu.id} href={menu.link} className="py-2 hover:text-primary duration-200">
            {menu.name}
          </a>
        ))}
        <div className="relative w-full text-center mt-2">
          <button className="py-2 flex items-center justify-center gap-2 w-full">
            Quick Links <FaCaretDown />
          </button>
          <div className="mt-2 space-y-2">
            {dropDownLinks.map((data) => (
              <a key={data.name} href={data.link} className="block py-2 hover:text-primary duration-200">
                {data.name}
              </a>
            ))}
          </div>
        </div>
        <button
          onClick={handleOrderPopup}
          className="mt-4 bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full"
        >
          Order <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
