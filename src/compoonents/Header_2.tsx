import Link from "next/link";
import React from "react";
import Logo from "public/Link → logo-dark.png";
import Image from "next/image";
import Vector from "public/Vector.png";
import styles  from './header-1/header.module.css'
import {BiSearchAlt} from "react-icons/bi"
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Header_2 = () => {
   
  return (
    <div className="bg-[#F2F2F2] flex items-center justify-center p-2 w-[100%]">
      <div className="container mx-auto md:w-[100%] flex justify-between px-6 ">
      <Link href="/" className="text-[15px]">
        <Image src={Logo} alt="" width={120} height={120} />
      </Link>

      <div className="w-[100%] flex items-center ">
        <div className="flex px-[5%] gap-2">
        <Image src={Vector} alt="" />
        <h6 className="font-semibold">Category</h6>

        </div>

          <div className="flex items-center pl-[5%]">
            <nav className=" flex gap-9 hover-link" >
                
                <Link className={styles.hoverlink} href="/">Home</Link>
                <Link className={styles.hoverlink} href="/">Page</Link>
                <Link className={styles.hoverlink} href="/">Courses</Link>
                <Link className={styles.hoverlink} href="/">Blog</Link>
            </nav>
          </div>


          
       
      </div>
      <div className="flex items-center gap-2">
        <input type="text"  className="p-2 rounded-lg" placeholder="search..."/>
        <BiSearchAlt className='text-2xl lg:text-3xl cursor-pointer' />

        
        <AiOutlineShoppingCart className='text-3xl cursor-pointer' />
      </div>
      </div>
      {/* logo */} 
      

    
    </div>
  );
};

export default Header_2;
