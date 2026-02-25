import React, { useState } from 'react'
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useSelector } from 'react-redux';
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {

    const [mobileOpen, setMobileOpen] = useState(false);

    let cartLength = useSelector(state => state.cart.cart)


  return (
    <nav className="bg-[#F3F0FF] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
        >
          <div className="text-2xl font-bold text-[#7C3AED] tracking-wide cursor-pointer">
          PastelShop
        </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[#1F2937] font-medium">
          <ul
            className='hidden md:flex items-center gap-8 text-[#1F2937] font-medium'
          >
            <NavLink
              to="/"
              className={({isActive}) => `${isActive ? "text-[#7C3AED]" : "text-[#1F2937] "}`}
            >
              <li
                className="hover:text-[#7C3AED] transition"
            >
                Home
            </li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({isActive}) => `${isActive ? "text-[#7C3AED]" : "text-[#1F2937] "}`}
            >
              <li
                className="hover:text-[#7C3AED] transition"
              >
                Contact
              </li>
            </NavLink>
            <NavLink
              to="/about"
              className={({isActive}) => `${isActive ? "text-[#7C3AED]" : "text-[#1F2937] "}`}
            >
              <li
                className="hover:text-[#7C3AED] transition"
              >
                About
              </li>
            </NavLink>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white px-3 py-2 rounded-full shadow-sm w-72">
          <input
            type="text"
            placeholder="Search products..."
            className="outline-none w-full text-sm bg-transparent"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Link
            to="cart"
          >
            <button 
            className="relative cursor-pointer"
          >
            <ShoppingCart className="text-[#1F2937] hover:text-[#F59E0B] transition" />
            <span className="absolute -top-2 -right-2 bg-[#F59E0B] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartLength.length}
            </span>
          </button>
          </Link>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            {mobileOpen ? (
              <X
                className="text-[#1F2937] cursor-pointer"
                onClick={() => setMobileOpen(false)}
              />
            ) : (
              <Menu
                className="text-[#1F2937] cursor-pointer"
                onClick={() => setMobileOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 text-[#1F2937] font-medium">
          <ul
            className='flex flex-col items-center gap-4 py-3'
          >
            <NavLink
              to="/"
              className={({isActive}) => `${isActive ? "text-[#7C3AED]" : "text-[#1F2937] "}`}
            >
              <li
                onClick={() => setMobileOpen(false)}
                className="hover:text-[#7C3AED] transition"
            >
                Home
            </li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({isActive}) => `${isActive ? "text-[#7C3AED]" : "text-[#1F2937] "}`}
            >
              <li
                onClick={() => setMobileOpen(false)}
                className="hover:text-[#7C3AED] transition"
              >
                Contact
              </li>
            </NavLink>
            <NavLink
              to="/about"
              className={({isActive}) => `${isActive ? "text-[#7C3AED]" : "text-[#1F2937] "}`}
            >
              <li
                onClick={() => setMobileOpen(false)}
                className="hover:text-[#7C3AED] transition"
              >
                About
              </li>
            </NavLink>
          </ul>

          <div className="flex items-center bg-[#F3F0FF] px-3 py-2 rounded-full">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none w-full text-sm bg-transparent"
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
