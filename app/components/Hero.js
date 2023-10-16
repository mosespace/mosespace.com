"use client";
import Link from "next/link";
import { stretchPro2, stretchPro3 } from "../../styles/fonts";
import { BsArrowRight } from "react-icons/bs";

export default function Hero() {
  return (
    <main className='bg-[#FFFFFF] dark:bg-[#222325] lg:pt-[10rem] bg-cover bg-center flex flex-col justify-center items-center min-h-screen w-full h-screen lg:overflow-hidden'>
      <div className='flex flex-col justify-center items-center pt-[2rem] lg:pt-0 lg:text-center px-[2rem] sm:max-w-[75%] lg:max-w-[75%]'>
        <h1
          className={`${stretchPro2.className} leading-[1.1] text-black dark:text-white lg:text-[5rem] text-[2rem] text-center uppercase`}
        >
          <span className='md:dark:text-blue-700 md:text-stroke-3'>
            HEY, I'M{" "}
          </span>
          KISAKYE MOSES{" "}
          <span className='dark:md:text-blue-700 md:text-stroke-3'>
            BUT YOU CAN CALL ME{" "}
          </span>
          UNCLE MOSES
        </h1>
        <div
          className={`${stretchPro3.className} mt-4 mb-4 text-[1rem] text-center align-center lg:text-[1.5rem] text-black dark:text-white`}
        >
          <p>
            I am a front-end and back-end web developer & a graphic designer,
            UX/UI designer
          </p>
        </div>
        <div
          className={`${stretchPro3.className} lg:flex lg:flex-row w-full flex flex-col justify-center items-center gap-[1rem] lg:items-center lg:justify-center lg:gap-[2rem] text-xl sm:flex sm:flex-row`}
        >
          <Link
            href='my-projects'
            className='flex bg-amber-500 px-4 py-3 items-center gap-2 dark:border-black dark:text-white'
          >
            <BsArrowRight />
            see my projects
          </Link>
          <Link
            href='about-me'
            className='flex bg-amber-500 px-4 py-3 items-center gap-2 dark:border-black  dark:text-white'
          >
            <BsArrowRight />
            about me
          </Link>
        </div>
      </div>
    </main>
  );
}
