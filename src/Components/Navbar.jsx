'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = <>
    <li>
      <Link href={"/"} className={pathname === "/" ? "active-link" : 'inactive-link'}>Home</Link>
    </li>
    <li>
      <Link href={"/about"} className={pathname === "/about" ? "active-link" : 'inactive-link'}>About</Link>
    </li>
    <li>
      <Link href={"/services"} className={pathname === "/services" ? "active-link" : 'inactive-link'}>Services</Link>
    </li>
    <li>
      <Link href={"/blog"} className={pathname === "/blog" ? "active-link" : 'inactive-link'}>Blog</Link>
    </li>
    <li>
      <Link href={"/contact"} className={pathname === "/contact" ? "active-link" : 'inactive-link'}>Contact</Link>
    </li>
  </>

    return (
<div className="max-w-[1140px] mx-auto navbar py-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {navLinks}
      </ul>
    </div>
    <Link href={""}>
        <Image src={"/assets/logo.svg"} width={80} height={86} alt='logo'></Image>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-4 font-semibold">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end space-x-4 items-center">
    <SlHandbag size={18} />
    <IoIosSearch size={22} />
    <button className='btn btn-outline text-[#FF3811] rounded'>Appointment</button>
  </div>
</div>
    );
};

export default Navbar;