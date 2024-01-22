"use client";
import ToggleBtn from "@/app/components/ToggleBtn";
import React, { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";

export default function ScrollTop() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to smoothly scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Attach scroll event listener to show/hide the button based on the scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.pageYOffset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='fixed lg:bottom-8 bottom-10 z-30 right-0 md:right-[16rem]'>
      <div className='flex items-center justify-center md:justify-between gap-4 bg-slate-50 dark:bg-orange-500 py-2 px-4 md:px-6 rounded-l-full md:rounded-full'>
        <ToggleBtn />
        {showScrollButton && (
          <div
            id='scroll-top-button'
            className='flex w-9 h-9 bg-orange-500 dark:bg-[#030712] text-white justify-center items-center rounded-full cursor-pointer'
            onClick={scrollToTop}
          >
            <MdArrowUpward className='w-5 h-5' />
          </div>
        )}
      </div>
    </div>
  );
}
