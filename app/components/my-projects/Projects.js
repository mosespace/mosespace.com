"use client";
import { stretchPro, subfont } from "../../../styles/fonts";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import proj1 from "../../../public/project_images/proj1.jpg";
import proj2 from "../../../public/project_images/proj2.jpg";
import proj3 from "../../../public/project_images/proj3.jpg";
import proj4 from "../../../public/project_images/proj4.png";
import proj5 from "../../../public/project_images/proj5.jpg";
import proj6 from "../../../public/project_images/proj6.png";
import proj7 from "../../../public/project_images/proj7.jpg";
import proj8 from "../../../public/project_images/proj8.jpg";
import proj9 from "../../../public/project_images/proj9.jpg";
import proj10 from "../../../public/project_images/proj10.webp";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(null);
  // console.log(currentProject);

  const projects = [
    {
      id: "001",
      project_title: "Portfolio",
      project_short_desc: "Landing (WEB)",
      project_image: proj1,
    },
    {
      id: "002",
      project_title: "Nile Post Clone",
      project_short_desc: "Fullstack App",
      project_image: proj2,
    },
    {
      id: "003",
      project_title: "Agape Vet",
      project_short_desc: "Landing (WEB)",
      project_image: proj3,
    },
    {
      id: "004",
      project_title: "UNEB Clone",
      project_short_desc: "Landing (WEB)",
      project_image: proj4,
    },
    {
      id: "005",
      project_title: "Mihasoft",
      project_short_desc: "Social Media Design",
      project_image: proj5,
    },
    {
      id: "006",
      project_title: "E and D Website",
      project_short_desc: "Fullstack App",
      project_image: proj6,
    },
    {
      id: "007",
      project_title: "Phaneroo Clone",
      project_short_desc: "Landing (WEB)",
      project_image: proj7,
    },
    {
      id: "008",
      project_title: "Quiz App",
      project_short_desc: "Game Application",
      project_image: proj8,
    },
    {
      id: "009",
      project_title: "BrandRider",
      project_short_desc: "Fullstack App",
      project_image: proj9,
    },
    {
      id: "0010",
      project_title: "Project 10",
      project_short_desc: "Graphics Design",
      project_image: proj10,
    },
  ];

  return (
    <div className='px-[2rem] md:px-0 flex flex-col lg:flex-row md:justify-between w-full md:w-full'>
      <div className='hidden lg:block relative w-[850px] h-[650px]'>
        {projects.map((project) => (
          <div
            key={`${project.id}-image`}
            className={`absolute top-0 left-0 w-[850px] h-[650px] object-cover`}
          >
            <Image
              src={project.project_image}
              fill
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
        <div className='flex justify-between lg:flex-row gap-[.8rem] lg:gap-[4rem] border-slate-950 border-b-2 pb-2 md:pb-4'>
          <h2
            className={`font-bold text-xl md:text-5xl uppercase ${stretchPro.className}`}
          >
            Proojects <span></span>
          </h2>
          <button className='bg-[#f1c40f] md:w-auto px-[2.3rem] cursor-not-allowed'>
            {projects.length}
          </button>
        </div>

        <ul className='flex flex-col justify-between text-2xl lg:gap-4 py-[1rem] lg:overflow-y-auto lg:hover:overflow-scroll lg:no-scrollbar pt-[.8rem] lg:pt-[.8rem]'>
          <div className='pt-[.5rem] md:pt-[1.5rem]'>
            {projects.map((project, id) => {
              return (
                <div
                  className={`${
                    id === 0
                      ? "border-none pb-4"
                      : "border-slate-950 border-t-2 pb-4 pt-[1.5rem]"
                  }`}
                >
                  <Link
                    key={id}
                    href='#'
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
