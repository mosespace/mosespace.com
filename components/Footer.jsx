"use client";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className='flex flex-wrap items-center justify-between gap-4 border-b pb-4'>
      <h2 className='font-bold text-base'>
        Made by ❤️ from <span className='font-bold'>mosespace</span>
      </h2>
      <div className='flex gap-6'>
        <Link
          href='https://github.com/mosespace'
          target='blank'
          aria-label='github'
          className='hover:text-orange-600'
        >
          <BsGithub className='w-5 h-5' />
        </Link>
        <Link
          href='https://x.com/bantu_creative'
          target='blank'
          aria-label='twitter'
          className='hover:text-orange-600'
        >
          <FaXTwitter className='w-5 h-5' />
        </Link>
        <Link
          href='https://discord.gg/V9HAdmFyck'
          target='blank'
          aria-label='medium'
          className='hover:text-orange-600 text-blue-600'
        >
          <FaDiscord className='w-6 h-6' />
        </Link>
        <Link
          href='https://youtube.com/@Coding4Life'
          target='blank'
          aria-label='medium'
          className='hover:text-orange-600 text-red-600'
        >
          <BsYoutube className='w-6 h-6' />
        </Link>
      </div>
    </footer>
  );
}
