"use client";
import Link from "next/link";
import Image from "next/image";
import ToggleBtn from "@/app/components/ToggleBtn";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) {
    return null;
  }
  if (pathname.startsWith("/sign-in")) {
    return null;
  }
  return (
    <div>
      {/*Desktop Primary Nav Bar */}
      <nav className='flex flex-col justify-between py-[1rem] lg:text-3xl text-2xl font-bold text-gray-900 dark:text-white px-1 lg:px-0'>
        <div className='flex lg:flex-row gap-3 lg:gap-0 flex-col lg:justify-between lg:items-center'>
          <Link
            href='/'
            className='flex lg:items-center lg:flex-row flex-col gap-3'
          >
            <Image
              width={300}
              height={300}
              src='/project_images/proj10.webp'
              className='lg:w-14 w-full object-cover h-14 lg:rounded-full'
              alt='Kisakye Moses Full-Stack Software Developer Located in Kampala Uganda.'
            />
            <span className='flex flex-col text-xl'>
              <h2 className='uppercase '>Kisakye Moses</h2>
              <span className='text-sm text-orange-600'>
                Senior FullStack Developer
              </span>
            </span>
          </Link>
          <div className='flex gap-[1rem] items-center lg:justify-center text-xl'>
            <div className='flex items-center gap-1 rounded-full bg-slate-50 dark:bg-transparent dark:border-[1.5px] py-2 px-4'>
              <span class='relative flex h-3 w-3'>
                <span class='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                <span class='relative inline-flex rounded-full h-3 w-3 bg-green-500'></span>
              </span>
              <span className='text-sm ml-2'>Online</span>
            </div>
            <ToggleBtn />
          </div>
        </div>
      </nav>
    </div>
  );
}
