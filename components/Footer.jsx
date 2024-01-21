import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className='flex flex-wrap items-center justify-between gap-4 border-b pb-4'>
      <h2 className='font-bold text-base pb-2'>
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
          className='hover:text-orange-600'
        >
          <FaDiscord className='w-5 h-5' />
        </Link>
      </div>
    </footer>
  );
}
