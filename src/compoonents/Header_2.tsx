"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "public/Link → logo-dark.png";
import Image from "next/image";
import Vector from "public/Vector.png";
import styles from "./header-1/header.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../../src/app/main.css";
import { useMediaQuery } from "react-responsive";

const Header_2 = () => {
  const [header , setHeader] = useState(false)
  const [navbar, setNavbar] = useState(false);
  const [search, setSearch] = useState(false);

  const desktopMobile = useMediaQuery({
    query : '(max-width:1300px)'
  });

  useEffect(()=>{
   const handlScroll = () => {
    if(window.scrollY > 40){
      setHeader(true)
    }else{
      setHeader(false)
    }
   };

   window.addEventListener('scroll' , handlScroll);

   return ()=> { window.removeEventListener('scroll' , handlScroll) }
  })

  return (
    <div className={`${header ? 'top-0 fixed shadow-md ' : 'bg-transparent'}bg-[#F2F2F2] flex items-center justify-center p-5 w-[100%] shadow-sm header-2`}>
      <div className="container mx-auto md:w-[100%] flex justify-between px-6 ">
        <Link href="/" className="logo-res w-[150px] flex items-center">
          <Image src={Logo} alt="" width={120} height={120}/>
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

          <div className="flex items-center pl-[5%] nav-res">
            <nav className=" flex gap-9 hover-link">
              <Link className={styles.hoverlink} href="/">
                Home
              </Link>
              <Link className={styles.hoverlink} href="/">
                Page
              </Link>
              <Link className={styles.hoverlink} href="/">
                Courses
              </Link>
              <Link className={styles.hoverlink} href="/">
                Blog
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="p-2 rounded-lg input-header-res"
            placeholder="search..."
          />
          <BiSearchAlt className="text-4xl cursor-pointer transition-all duration-300 hover:text-green-900" />
          <AiOutlineShoppingCart className="text-4xl cursor-pointer transition-all duration-300 hover:text-green-900" />
          
        </div>
      </div>
      {/* logo */}
    </div>
  );
};

export default Header_2;
