"use client";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  BsX,
  BsLinkedin,
  BsTwitter,
  BsFacebook,
  BsWhatsapp,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";

export default function Alert() {
  const [closed, setClosed] = useState(false);
  //   console.log(closed);

  function handleSubmit() {
    setClosed(true);
    toast.warn(
      "Honestly why din't you follow me?! 😏 Kindly refresh the page and follow me on any platform 🙏"
    );
  }

  return (
    <>
      {closed ? (
        <></>
      ) : (
        <div className='hidden lg:flex lg:justify-center justify-between gap-[4rem] items-center bg-blue-700 shadow-lg py-[1rem] px-[1rem] text-[.9rem] absolute top-[4rem] lg:top-0 left-0 right-0 text-slate-50 font-sans z-10'>
          <div className='flex items-center gap-6'>
            <h2 className='hidden md:inline-block'>
              Thank you for visiting my portfolio. Please you can also connect
              with me on the following social media platforms.{" "}
              <span className='hidden lg:inline-block'>
                Am always active 24/7 🤗{" "}
              </span>
            </h2>
            <span className='font-extrabold flex  items-center px-1 py-1 gap-4'>
              <Link href='#' target='blank'>
                <BsLinkedin />
              </Link>
              <Link href='#' target='blank'>
                <BsTwitter />
              </Link>
              <Link href='#' target='blank'>
                <BsFacebook />
              </Link>
              <Link href='#' target='blank'>
                <BsWhatsapp />
              </Link>
              <Link href='#' target='blank'>
                <BsInstagram />
              </Link>
              <Link href='#' target='blank'>
                <BsGithub />
              </Link>
            </span>
          </div>
          <div className='bg-red-700 lg:bg-transparent'>
            <button onClick={handleSubmit} className='text-slate-50'>
              <BsX size={30} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
