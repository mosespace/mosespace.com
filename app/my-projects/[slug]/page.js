import React from "react";
import Link from "next/link";
import Image from "next/image";
import DemoImg from "../../../public/bg.jpg";
import { FaLink, FaGithub } from "react-icons/fa";
import { stretchPro, raleway } from "../../../styles/fonts";

export default async function Page({ params: { slug } }) {
  const projects = await fetch(process.env.NEXT_PUBLIC_PROJECTS_API, {
    cache: "no-store",
  });
  const projectsData = await projects.json();
  const project = projectsData?.find((project) => project.slug == slug);
  // console.log(project.project_image[1]);

  return (
    <section className='px-[2rem] bg-[#FFFFFF] dark:bg-[#222325] lg:px-[20rem] w-full flex flex-col min-h-screen'>
      {/* Project Full Thumbnail Desktop */}
      <div className='hidden lg:flex rounded-b-[2rem] items-center justify-center bg-[#f1c40f] h-[400px] w-full mb-6'>
        <h2
          className={`text-center absolute z-50 left-0 right-0 py-2 ${stretchPro.className} lg:text-[3rem]`}
        >
          🚀 {project.project_title} 💥
        </h2>
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
        <p className='break-all whitespace-pre-line lg:text-xl'>
          {project.project_description}
        </p>

        {/*Preview Buttons*/}
        <div className='flex justify-between'>
          <Link
            href={project.project_live_link}
            target='blank'
            className='flex  button-85 items-center gap-2 font-bold'
          >
            <FaLink />
            Live Link
          </Link>
          <Link
            href={project.project_github_link}
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
        <h2
          className={`text-center py-2 ${stretchPro.className} lg:text-[2.5rem]`}
        >
          Projeect Imagees
        </h2>
        <div className='flex flex-col gap-[1.5rem]'>
          <div className='box-shadow relative h-[200px] lg:h-[600px]'>
            <Image
              src={project.project_image[0]}
              fill
              className='w-full h-full object-cover'
            />
          </div>
          <div className='box-shadow relative h-[200px] lg:h-[600px]'>
            <Image
              src={project.project_image[1]}
              fill
              className='w-full h-full object-contain'
            />
          </div>
          {project.project_image[2] && (
            <div className='box-shadow relative h-[200px] lg:h-[600px]'>
              <Image
                src={project.project_image[2]}
                fill
                className='w-full h-full object-contain'
              />
            </div>
          )}
          {project.project_image[3] && (
            <div className='box-shadow relative h-[200px] lg:h-[600px]'>
              <Image
                src={project.project_image[2]}
                fill
                className='w-full h-full object-contain'
              />
            </div>
          )}
          {project.project_image[4] && (
            <div className='box-shadow relative h-[200px] lg:h-[600px]'>
              <Image
                src={project.project_image[2]}
                fill
                className='w-full h-full object-contain'
              />
            </div>
          )}

          {/* <div className='box-shadow h-[200px] lg:h-[600px] relative'>
            <Image
              src={project.project_image[1]}
              fill
              className='w-full h-full object-none'
            />
          </div> */}
          {/* <div className='box-shadow relative h-[200px] lg:h-[600px]'>
            <Image
              src={project.project_image[1]}
              fill={true}
              className='w-[1080px] h-[1080px] object-none'
            />
          </div> */}
          {/* <div className='box-shadow h-[200px] lg:h-[400px]'></div> */}
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
