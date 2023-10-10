"use client";
import { stretchPro, subfont } from "../../../styles/fonts";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function Projects({ data }) {
  const [currentProject, setCurrentProject] = useState(null);

  return (
    <div className='px-[2rem] md:px-0 flex flex-col lg:flex-row md:justify-between w-full md:w-full'>
      <div className='hidden lg:block relative w-[850px] h-[650px]'>
        {data.map((project) => (
          <div
            key={`${project.id}-image`}
            className={`absolute top-0 left-0 w-[850px] h-[650px]`}
          >
            <Image
              src={project.project_image}
              layout='fill'
              loading='lazy'
              objectFit='cover'
              className={`rounded-tr-[2rem]
              ${
                currentProject === project.id
                  ? "transition duration-300 delay-10 ease-out"
                  : "hidden"
              }
              `}
            />
          </div>
        ))}
      </div>

      <div className='flex lg:justify-between flex-col'>
        <div className='flex justify-between lg:flex-row gap-[.8rem] lg:gap-[4rem] border-slate-950 dark:border-slate-50 border-b-2 pb-2 md:pb-4'>
          <h2
            className={`font-bold text-xl md:text-5xl uppercase ${stretchPro.className}`}
          >
            Proojects <span></span>
          </h2>
          <button className='bg-orange-500 md:w-auto px-[2.3rem] cursor-not-allowed'>
            {data.length}
          </button>
        </div>

        <ul className='flex flex-col justify-between text-2xl lg:gap-4 py-[1rem] lg:overflow-y-auto lg:hover:overflow-scroll lg:no-scrollbar pt-[.8rem] lg:pt-[.8rem]'>
          <div className='pt-[.5rem] md:pt-[1.5rem]'>
            {data.map((project, id) => {
              return (
                <div
                  className={`${
                    id === 0
                      ? "border-none pb-4"
                      : "border-black dark:border-slate-50 border-t-2 pb-4 pt-[1.5rem]"
                  }`}
                >
                  <Link
                    key={id}
                    href={`/my-projects/${project.slug}`}
                    className={`flex lg:flex-row justify-between font-extrabold text-[1.2rem] ${subfont.className} lg:text-2xl`}
                    onMouseEnter={() => setCurrentProject(project.id)}
                    onMouseLeave={() => setCurrentProject(null)}
                  >
                    {project.project_title}
                    <h3 className='font-bold text-[.9rem]'>
                      {project.project_short_desc}
                    </h3>
                  </Link>
                </div>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
}
