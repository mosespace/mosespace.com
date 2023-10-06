import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Hero() {
  return (
    <main className='flex flex-col justify-center items-center min-h-screen w-full h-screen lg:overflow-hidden'>
      <div className='flex flex-col justify-center items-center  text-[5rem] pt-[2rem] lg:pt-0 lg:text-center px-[2rem]'>
        <h1 className='text-slate-50 lg:text-[3rem] text-[2rem] font-extrabold text-center uppercase'>
          <span className='font-bold text-black md:text-slate-50 md:text-stroke-3'>
            HEY, I'M{" "}
          </span>
          KISAKYE MOSES <br />{" "}
          <span className='font-bold text-black md:text-slate-50 md:text-stroke-3'>
            BUT YOU CAN CALL ME{" "}
          </span>
          UNCLE MOSES
        </h1>
        <div className='mt-4 mb-4 text-[1rem] align-center lg:text-[1.5rem] text-slate-50 lg:font-extrabold font-medium'>
          <p>
            I am a front-end and back-end web developer <br />& a graphic
            designer, UX/UI designer
          </p>
        </div>
        <div className='lg:flex lg:flex-row w-full flex flex-col justify-center items-center gap-[1rem] lg:items-center lg:justify-center lg:gap-[2rem] text-xl font-medium lg:font-semibold'>
          <Link
            href='my-projects'
            className='flex items-center gap-2 hover:border-b-[2px] hover:ease-in-out hover:transition-all hover:focus text-slate-50'
          >
            <BsArrowRight />
            see my projects
          </Link>
          <Link
            href='about-me'
            className='flex items-center gap-2 hover:border-b-[2px] hover:ease-in-out hover:transition-all hover:focus text-slate-50'
          >
            <BsArrowRight />
            about me
          </Link>
        </div>
      </div>
    </main>
  );
}
