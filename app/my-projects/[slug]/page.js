import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLink, FaGithub } from "react-icons/fa";
import { stretchPro, raleway } from "../../../styles/fonts";
import { NextResponse } from "next/server";

export default async function Page({ params: { slug } }) {
  try {
    const projects = await fetch(process.env.PROJECTS_API);
    const projectsData = await projects.json();
    // console.log(projectsData)
    const project = projectsData?.find((project) => project.slug == slug);
    // console.log(project);
  } catch (error) {
    console.error("Error in getting projects:", error);
    return NextResponse.error("Internal Server Error", 500);
  }

  return (
    <section className='px-[2rem] bg-white dark:bg-black lg:px-[20rem] w-full flex flex-col min-h-screen'>
      {/* Project Full Thumbnail Desktop */}
      <div className='hidden lg:block relative h-[400px] w-full mb-6'>
        <Image
          fill
          src={project.project_image}
          className='w-full h-full object-cover rounded-b-[5rem]'
        />
      </div>
      <div>
        {/* Project Intro */}
        <h2
          className={`uppercase text-red-700 dark:text-orange-500 font-bold text-3xl ${stretchPro.className} border-b-2 mt-[6rem] lg:mt-0 pb-3 border-slate-500`}
        >
          {project.project_title}
        </h2>
      </div>

      {/* Project Full Details */}
      <div>
        <div className='flex justify-between py-3'>
          <span className={`uppercase font-light ${stretchPro.className}`}>
            category
          </span>
          <h3 className='font-light dark:font-medium dark:text-orange-500'>
            {project.project_category}
            <br /> Design UX/UI
          </h3>
        </div>
        <div className='flex justify-between py-3'>
          <span className={`uppercase ${stretchPro.className}`}>year</span>
          <h3 className='font-light dark:font-medium dark:text-orange-500'>
            2023
          </h3>
        </div>
        <div className='flex justify-between py-3'>
          <span className={`uppercase ${stretchPro.className}`}>
            software <br />
            used
          </span>
          <h3 className='font-light dark:font-medium dark:text-orange-500'>
            VSCode, NextJs,
            <br /> Tailwind and react
          </h3>
        </div>
        <div className='flex justify-between py-3'>
          <span className={`uppercase ${stretchPro.className}`}>client</span>
          <h3 className='font-light dark:font-medium dark:text-orange-500'>
            Kisakye Moses
          </h3>
        </div>
      </div>

      {/* Project Description and Links */}
      <div className='py-[1rem] flex flex-col gap-[1rem] lg:gap-[2.2rem]'>
        <p className='break-all whitespace-pre-line'>
          ACT is the nickname I use on social medias. The goal of this project
          was to create my own identity, adaptable and modular to work with both
          my real name and my nickname. First, the identity needed to be defined
          in brand guidelines and then had to be adapted for digital medias
          (website, wallpapers, social medias) and physical formats (business
          cards/stickers, letter paper and resume).
        </p>

        {/*Preview Buttons*/}
        <div className='flex justify-between'>
          <Link
            href='/live-preview'
            target='blank'
            className='flex  button-85 items-center gap-2 font-bold'
          >
            <FaLink />
            Live Link
          </Link>
          <Link
            href='/github-repo'
            target='blank'
            className='flex button-52 items-center gap-2 font-bold dark:border-[1px] dark:border-white dark:bg-black'
          >
            <FaGithub />
            GithubRepo
          </Link>
        </div>
      </div>

      {/* Project Images */}
      <div className='border-b-2 border-slate-600 pb-[1rem] pt-[2.2rem]'>
        <h2 className={`text-center py-2 ${stretchPro.className}`}>
          Projeect Imagees
        </h2>
        <div className='flex flex-col gap-[1.5rem]'>
          <div className='box-shadow h-[200px] lg:h-[400px] bg-[#f7f7f7]'></div>
          <div className='box-shadow h-[200px] lg:h-[400px] bg-[#ffe54c]'></div>
          <div className='box-shadow h-[200px] lg:h-[400px] bg-[#f7f7f7]'></div>
          <div className='box-shadow h-[200px] lg:h-[400px] bg-[#ffe54c]'></div>
        </div>
      </div>

      {/*Last Buttons*/}
      <div className='py-[1rem] flex justify-between'>
        <Link href='' className={`${stretchPro.className}`}>
          next project
        </Link>
        <Link href='/' className={`font-bold ${raleway.className}`}>
          back to home
        </Link>
      </div>
    </section>
  );
}
