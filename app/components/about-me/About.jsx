import React from "react";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { stretchPro } from "../../../styles/fonts";
import DemoImage from "../../../public/project_images/proj10.webp";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

export default function About() {
  return (
    <div className='text-center flex flex-col-reverse lg:flex-row w-full gap-[3rem] justify-between lg:px-[2rem] overflow-hidden'>
      <div className='flex flex-col text-start'>
        <div>
          <h1
            className={`${stretchPro.className} text-[2rem] lg:text-[2.5rem] leading-[2.6rem]`}
          >
            About Kisakye MMoses
          </h1>
          <p className='mt-6 text-[1rem] lg:text-[1.5rem]'>
            Hey I am Kisakye Moses also known as Uncle Moses; A self passionate
            Full Stack Software Engineer. 💻 🚀 Since I was a kid, I have been
            fascinated by computers and enjoyed the process of creating things.
            🔨💡 As a result, I pursued a career in Software Engineering, which
            combines my interests in technology and creation. 🙌 Here are some
            of the things I am good at;
          </p>
        </div>
        <div className='flex mt-[2rem] flex-wrap justify-between'>
          <div className='group'>
            <FaReact className='text-[#D1D3D7] text-[3rem] lg:text-[6rem] cursor-pointer hover:text-blue-400 transition-all ease-in-out' />
            <span className='group-hover:opacity-100 transition-opacity bg-gray-800 dark:bg-gray-50 px-1 text-sm text-gray-100 dark:text-black rounded-md absolute top-[58%] -translate-x-1 translate-y-1 opacity-0 mx-auto'>
              React
            </span>
          </div>

          <div className='group'>
            <IoLogoJavascript className='text-[#D1D3D7] text-[3rem] lg:text-[6rem]  cursor-pointer hover:text-amber-400 transition-all ease-in-out' />
            <span className='group-hover:opacity-100 transition-opacity bg-gray-800 dark:bg-gray-50 px-1 text-sm text-gray-100 dark:text-black rounded-md absolute top-[58%] -translate-x-1 translate-y-1 opacity-0 mx-auto'>
              JavaScript
            </span>
          </div>

          <div className='group'>
            <SiTypescript className='text-[#D1D3D7] text-[3rem] lg:text-[6rem]  cursor-pointer hover:text-blue-600 transition-all ease-in-out' />
            <span className='group-hover:opacity-100 transition-opacity bg-gray-800 dark:bg-gray-50 px-1 text-sm text-gray-100 dark:text-black rounded-md absolute top-[58%] -translate-x-1 translate-y-1 opacity-0 mx-auto'>
              TypeScript
            </span>
          </div>

          <div className='group'>
            <SiTailwindcss className='text-[#D1D3D7] text-[3rem] lg:text-[6rem] cursor-pointer hover:text-blue-400 transition-all ease-in-out' />
            <span className='group-hover:opacity-100 transition-opacity bg-gray-800 dark:bg-gray-50 px-1 text-sm text-gray-100 dark:text-black rounded-md absolute top-[58%] -translate-x-1 translate-y-1 opacity-0 mx-auto'>
              Tailwind
            </span>
          </div>

          <div className='group'>
            <span className='group-hover:opacity-100 transition-opacity bg-gray-800 dark:bg-gray-50 px-1 text-sm text-gray-100 dark:text-black rounded-md absolute top-[58%] -translate-x-1 translate-y-1 opacity-0 mx-auto'>
              MongoDB
            </span>
            <SiMongodb className='text-[#D1D3D7] text-[3rem] lg:text-[6rem] cursor-pointer hover:text-green-600 transition-all ease-in-out' />
          </div>

          <div className='group'>
            <SiFirebase className='text-[#D1D3D7] text-[3rem] lg:text-[6rem] cursor-pointer hover:text-amber-500 transition-all ease-in-out' />
            <span className='group-hover:opacity-100 transition-opacity bg-gray-800 dark:bg-gray-50 px-1 text-sm text-gray-100 dark:text-black rounded-md absolute top-[58%] -translate-x-1 translate-y-1 opacity-0 mx-auto'>
              Firebase
            </span>
          </div>

          <div className='group'>
            <TbBrandNextjs className='text-[#D1D3D7] text-[3rem] lg:text-[6rem] cursor-pointer hover:text-blue-300 transition-all ease-in-out' />
            <span className='group-hover:opacity-100 transition-opacity bg-gray-800 dark:bg-gray-50 px-1 text-sm text-gray-100 dark:text-black rounded-md absolute top-[58%] -translate-x-1 translate-y-1 opacity-0 mx-auto'>
              NextJs
            </span>
          </div>
        </div>
        <div className='flex'></div>
      </div>

      <div className='box-shadow relative lg:w-[2500px] h-[350px] lg:h-[600px]'>
        <Image src={DemoImage} fill className='w-full h-full object-cover' />
      </div>
    </div>
  );
}
