"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "public/Link → logo-dark.png";
import Image from "next/image";
import Vector from "public/Vector.png";
import styles from "./header-1/header.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../../src/app/main.css";
import { useMediaQuery } from "react-responsive";


const navlinks = [
  {
    id : 1,
    link : '/',
    name : 'Home'
  },
  {
    id : 2,
    link : '/',
    name : 'About Us'
  },
  {
    id : 3,
    link : '/',
    name : 'Contact Us'
  },
  {
    id : 4,
    link : '/',
    name : 'Blog'
  }
]

const Header_2 = () => {
  const [header, setHeader] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [search, setSearch] = useState(false);

  const desktopMobile = useMediaQuery({
    query: "(max-width:1300px)",
  });

  useEffect(() => {
    const handlScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handlScroll);

    return () => {
      window.removeEventListener("scroll", handlScroll);
    };
  });

  return (
    <div
      className={`${
        header
          ? "top-0 fixed shadow-md transition-all duration-300"
          : "bg-transparent"
      }bg-[#F2F2F2] flex items-center justify-center p-5 w-[100%] shadow-sm header-2`}
    >
      <div className="container mx-auto md:w-[100%] flex justify-between px-6 ">
        <Link href="/" className="logo-res w-[150px] flex items-center">
          <Image src={Logo} alt="" width={120} height={120} />
        </Link>

        <div className="w-[100%] flex items-center ">
          <div className="flex px-[5%] gap-6 ">
            <div className="category-res ">
              <Image src={Vector} alt="" />
              <h6 className="font-semibold cursor-pointer category-res">
                Category
              </h6>
            </div>
          </div>

          {/* <div className={`${navbar ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0 ' : 'max-h-0 xl:max-h-max'} flex flex-row gap-x-5 w-full gap-y-0 overflow-hidden `}>
            {navlinks.map((nav)=>(
              <Link className="cursor-pointer" key={nav.id} href={nav.link}>{nav.name}</Link>
            ))}
          </div> */}

         

     
            <nav className={`${navbar ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'} flex flex-col w-full gap-y-6 bg-white overflow-hidden font-bold xl:font-medium xl:flex-row xl:gap-x-8 pl-[90px]`}>
              <Link className='hover:text-green-500 cursor-pointer transition-all duration-300' href="/" >
                Home
              </Link>
              <Link className='hover:text-green-500 cursor-pointer transition-all duration-300' href="/about">
                Page
              </Link>
              <Link className='hover:text-green-500 cursor-pointer transition-all duration-300' href="/contact">
                Courses
              </Link>
              <Link className='hover:text-green-500 cursor-pointer transition-all duration-300' href="/blog">
                Blog
              </Link>
            </nav>
   
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="p-4 rounded-lg bg-gray-100 input-header-res"
            placeholder="search..."
          />
          <BiSearchAlt className="text-4xl cursor-pointer transition-all duration-300 hover:text-green-900" />
          <AiOutlineShoppingCart className="text-4xl cursor-pointer transition-all duration-300 hover:text-green-900" />
          <div onClick={() => setNavbar(!navbar)} className="cursor-pointer xl:hidden transition-all duration-300 hover:text-green-900">{navbar? (<BiX className='text-4xl cursor-pointer transition-all duration-300 hover:text-green-900' />) : (<BiMenuAltRight className='text-4xl'/>)}</div>
        </div>
      </div>
      {/* logo */}
    </div>
  );
};

export default Header_2;
