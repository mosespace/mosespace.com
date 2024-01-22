import ToggleBtn from "@/app/components/ToggleBtn";
import React from "react";
import { MdArrowUpward } from "react-icons/md";

export default function ScrollTop() {
  return (
    <div className='fixed lg:bottom-8 bottom-10 z-30 right-0 md:right-[16rem]'>
      <div className='flex items-center justify-center md:justify-between gap-4 bg-slate-50 dark:bg-orange-500 py-2 px-4 md:px-6 rounded-l-full md:rounded-full'>
        <ToggleBtn />
        <div className='w-9 h-9 bg-orange-500 dark:bg-[#030712] text-white flex justify-center items-center rounded-lg md:rounded-full'>
          <button>
            <MdArrowUpward className='w-5 h-5' />
          </button>
        </div>
      </div>
    </div>
  );
}
