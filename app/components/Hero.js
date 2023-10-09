import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Hero() {
  return (
    <main className='bg-white dark:bg-black  flex flex-col justify-center items-center min-h-screen w-full h-screen lg:overflow-hidden'>
      <div className='flex flex-col justify-center items-center  text-[5rem] pt-[2rem] lg:pt-0 lg:text-center px-[2rem]'>
        <h1 className='text-black dark:text-white lg:text-[3rem] text-[2rem] font-extrabold text-center uppercase'>
          <span className='font-bold md:dark:text-blue-700 md:text-stroke-3'>
            HEY, I'M{" "}
          </span>
          KISAKYE MOSES <br />{" "}
          <span className='font-bold dark:md:text-blue-700 md:text-stroke-3'>
            BUT YOU CAN CALL ME{" "}
          </span>
          UNCLE MOSES
        </h1>
        <div className='mt-4 mb-4 text-[1rem] align-center lg:text-[1.5rem] text-black dark:text-white lg:font-extrabold font-medium'>
          <p>
            I am a front-end and back-end web developer <br />& a graphic
            designer, UX/UI designer
          </p>
        </div>
        <div className='lg:flex lg:flex-row w-full flex flex-col justify-center items-center gap-[1rem] lg:items-center lg:justify-center lg:gap-[2rem] text-xl font-medium lg:font-semibold'>
          <Link
            href='my-projects'
            className='flex items-center gap-2 hover:border-b-[2px] border-white dark:border-black hover:ease-in-out hover:transition-all hover:focus dark:text-white text-black'
          >
            <BsArrowRight />
            see my projects
          </Link>
          <Link
            href='about-me'
            className='flex items-center gap-2 hover:border-b-[2px] border-white dark:border-black  hover:ease-in-out hover:transition-all hover:focus dark:text-white text-black'
          >
            <BsArrowRight />
            about me
          </Link>
        </div>
      </div>
    </main>
  );
}
