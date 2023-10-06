import Link from "next/link";
import React from "react";
import { BiGridAlt } from "react-icons/bi";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center px-[2rem] bg-[#f1c40f] lg:bg-transparent py-[1rem] lg:px-[10rem] lg:pt-[8rem] lg:text-3xl text-2xl font-bold absolute left-0 right-0 text-slate-50'>
      <div>
        <Link href='/'>
          <h2>
            Uncle <span className='font-extrabold text-slate-950'>Mo.</span>
          </h2>
        </Link>
      </div>
      <div className='flex gap-[1rem] items-center justify-center text-2xl text-slate-50'>
        <Link href='/eng'>In</Link>
        <BsSunFill size={30} />
        <button className='text-slate-50'>
          <BiGridAlt size={40} />
        </button>
      </div>
    </nav>
  );
}
