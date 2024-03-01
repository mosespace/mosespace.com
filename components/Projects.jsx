import { getData } from "@/utils/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Projects() {
  const projects = await getData("projects");
  // console.log(projects)
  return (
    <div className='py-8'>
      <div className='m-auto lg:m-0 px-4 lg:px-0 text-gray-600 md:px-12'>
        <div className='mx-auto'>
          {projects?.splice(0, 4).map((project, index) => (
            <div
              key={index}
              className='group relative -mx-2 mb-3 sm:-mx-4 lg:lg:p-4 sm:p-6 rounded-2xl bg-white dark:bg-transparent border border-transparent lg:hover:border-gray-100 dark:shadow-none dark:lg:hover:border-gray-700 dark:lg:hover:bg-gray-800 shadow-2xl shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-4 sm:flex transition duration-300 lg:hover:z-10'
            >
              <div className='sm:w-2/6 rounded-2xl overflow-hidden transition-all duration-500 group-lg:hover:rounded-xl'>
                <Image
                  src={project.image}
                  alt='Kisakye Moses Project 1'
                  loading='lazy'
                  width={1080}
                  height={1080}
                  className='h-[12rem] lg:h-56 sm:h-full w-full object-cover object-center lg:object-top transition duration-500 lg:group-hover:scale-105'
                />
              </div>

              <div className='sm:p-2 sm:pl-0 sm:w-3/4'>
                <span className='mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0'>
                  {project.date}
                </span>
                <h3 className='text-xl font-semibold text-gray-800 dark:text-white line-clamp-2'>
                  {project.title}
                </h3>
                <p className='my-4 text-gray-600 dark:text-gray-300 line-clamp-3'>
                  {project.description}
                </p>

                <div className='flex gap-4'>
                  <Link
                    href={project.github_link}
                    className='px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 lg:hover:border-transparent lg:hover:bg-primary lg:hover:text-orange-600 dark:border-gray-700 dark:text-gray-300'
                  >
                    Code
                  </Link>
                  <Link
                    href={project.preview_link}
                    className='px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 lg:hover:border-transparent lg:hover:bg-primary lg:hover:text-orange-600 dark:border-gray-700 dark:text-gray-300'
                  >
                    Live Preview
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
