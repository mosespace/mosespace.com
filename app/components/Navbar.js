"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiGridAlt } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import ToggleBtn from "./ToggleBtn";
import { BsDiscord, BsLinkedin } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { stretchPro } from "../../styles/fonts";

export default function Navbar() {
  const [showNavbar, setShowNavBar] = useState(false);

  function handleNavBar() {
    setShowNavBar(!showNavbar);
  }

  function handleLinkClick() {
    setShowNavBar(false);
  }
  return (
    <div>
      <nav className='flex flex-col justify-between  lg:bg-transparent py-[1rem] lg:px-[10rem] lg:pt-[8rem] lg:text-3xl text-2xl font-bold absolute left-0 right-0 text-slate-950 dark:text-white'>
        <div className='flex justify-between items-center px-[2rem]'>
          <div className={`${stretchPro.className}`}>
            <Link href='/'>
              <h2>
                <span className='font-extrabold text-slate-950 dark:text-white'>
                  MMo.
                </span>
              </h2>
            </Link>
          </div>
          <div className='flex gap-[1rem] items-center justify-center text-xl'>
            <Link href='/eng' className='text-white'>
              In
            </Link>
            <ToggleBtn />
            <button
              onClick={handleNavBar}
              className='text-slate-950 dark:text-white'
            >
              {showNavbar ? <RxCross2 /> : <BiGridAlt size={27} />}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={
          showNavbar
            ? "absolute z-30 break-all flex flex-col h-full mt-[4.5rem] lg:mt-0 "
            : "hidden"
        }
      >
        <div className='backdrop-blur-lg lg:justify-center h-screen fixed py-[2rem] px-[2rem] lg:px-[10rem] w-full flex flex-col gap-4'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-4 w-full lg:w-[20%] lg:justify-between'>
              <Link
                href='/my-projects'
                className='bg-orange-500 px-4 py-4 font-bold'
              >
                See My Projects
              </Link>
              <Link
                href='/about-me'
                className='bg-orange-500 px-4 py-4 font-bold'
              >
                About Me
              </Link>
            </div>
            <div className='hidden lg:block'>
              <button onClick={handleLinkClick}>
                <RxCross2 size={35} />
              </button>
            </div>
          </div>
          <div className='flex gap-[1.5rem] mt-8'>
            <Link
              href='https://www.linkedin.com/in/kisakye-moses/'
              target='blank'
            >
              <BsLinkedin size={25} />
            </Link>
            <Link href='https://discord.gg/5WMr7rz6' target='blank'>
              <BsDiscord size={25} />
            </Link>
            <Link href='https://www.twitter.com/bantu_creative' target='blank'>
              <RiTwitterXFill size={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
