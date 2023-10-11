"use client";
import Link from "next/link";
import ToggleBtn from "./ToggleBtn";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BiGridAlt } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { stretchPro } from "../../styles/fonts";
import { BsDiscord, BsLinkedin, BsGithub, BsMedium } from "react-icons/bs";

export default function Navbar() {
  const [showNavbar, setShowNavBar] = useState(false);

  function handleNavBar() {
    setShowNavBar(!showNavbar);
  }
  function handleCloseLinkInNavBar() {
    setShowNavBar(false);
  }

  function handleLinkClick() {
    setShowNavBar(false);
  }
  return (
    <div>
      {/*Desktop Primary Nav Bar */}
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

      {/*Mobile Secondary Nav Bar */}
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
                onClick={handleCloseLinkInNavBar}
              >
                My Projects
              </Link>
              <Link
                href='/about-me'
                className='bg-orange-500 px-4 py-4 font-bold'
                onClick={handleCloseLinkInNavBar}
              >
                About Me
              </Link>
              <Link
                href='/contact-me'
                className='bg-orange-500 px-4 py-4 font-bold'
                onClick={handleCloseLinkInNavBar}
              >
                Contact Me
              </Link>
              <Link
                href='/BrandRiderGuildlines.pdf'
                download
                target='blank'
                rel='noopener noreferrer'
                className='border-orange-500 border-2 text-center px-4 py-4 font-bold'
                onClick={handleCloseLinkInNavBar}
              >
                Download CV
              </Link>
            </div>
            <div className='hidden lg:block'>
              <button onClick={handleLinkClick}>
                <RxCross2 size={35} />
              </button>
            </div>
          </div>
          <div className='flex items-center justify-center lg:justify-start gap-[1.5rem] mt-8'>
            <Link
              href='https://www.linkedin.com/in/kisakye-moses/'
              target='blank'
              className='text-orange-400 hover:text-gray-900 dark:hover:text-white'
            >
              <BsLinkedin size={22} />
            </Link>
            <Link
              href='https://github.com/mosespace'
              target='blank'
              className='text-orange-400 hover:text-gray-900 dark:hover:text-white'
            >
              <BsGithub size={25} />
            </Link>
            <Link
              href='https://discord.gg/5WMr7rz6'
              target='blank'
              className='text-orange-400 hover:text-gray-900 dark:hover:text-white'
            >
              <BsDiscord size={25} />
            </Link>
            <Link
              href='https://www.twitter.com/bantu_creative'
              target='blank'
              className='text-orange-400 hover:text-gray-900 dark:hover:text-white'
            >
              <RiTwitterXFill size={25} />
            </Link>
            <Link
              href='https://www.medium.com/mmosespace'
              target='blank'
              className='text-orange-400 hover:text-gray-900 dark:hover:text-white'
            >
              <BsMedium size={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
