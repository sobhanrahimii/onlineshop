import Link from "next/link";
import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import "./header.module.css";

const Header_1 = () => {
  return (
    <div className="flex items-center w-full h-20 bg-[#1F2432] text-white">
      <div className="px-4 lg:px-24  mx-auto md:bg-none">
        <div className="flex justify-between">
          <div className="flex ">
            <p>First 20 students get 50% discount.</p>
            <h6 className="text-red-400">Hurry Up!</h6>
          </div>
          <section className="flex justify-end">
            <div className="icon flex">
            <Link href='/login'>Login</Link>|
              <Link href='/register'>Register</Link>
            </div>
            <div className="cursor-pointer flex gap-2  ">
              <span><BsFillEnvelopeFill className='text-red-400 inline-block'/> Call : 123-456-789</span> | <span><FiPhoneCall className='text-red-400 inline-block'/> Email : info@gmail.com</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Header_1;
