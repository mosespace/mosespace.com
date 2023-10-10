// "use client";
// import React, { useRef } from "react";
// import Link from "next/link";
// import { stretchPro, raleway } from "../../../styles/fonts";
// import { FaLink, FaGithub } from "react-icons/fa";
// // import { motion, useScroll, useTransform } from "framer-motion";
// import Proj4 from "../../../public/project_images/proj4.png";
// import Image from "next/image";


// export default function Detailed({params, searchParams}, parent) {

//   return (
//     <section className='px-[2rem] lg:px-[20rem] w-full flex flex-col min-h-screen'>
//       <div className='hidden lg:block relative h-[400px] w-full mb-6'>
//         <Image
//           fill
//           src={Proj4}
//           className='w-full h-full object-cover rounded-b-[5rem]'
//         />
//       </div>
//       <div>
//         {/* Project Intro */}
//         <h2
//           className={`uppercase text-red-700 dark:text-orange-500 font-bold text-3xl ${stretchPro.className} border-b-2 pb-3 border-slate-500`}
//         >
//           Act Responsible
//         </h2>
//       </div>
//       <div>
//         <div className='flex justify-between py-3'>
//           <span className={`uppercase font-light ${stretchPro.className}`}>
//             category
//           </span>
//           <h3 className='font-light dark:font-medium dark:text-orange-500'>
//             Development <br /> Design UX/UI
//           </h3>
//         </div>
//         <div className='flex justify-between py-3'>
//           <span className={`uppercase ${stretchPro.className}`}>year</span>
//           <h3 className='font-light dark:font-medium dark:text-orange-500'>
//             2023
//           </h3>
//         </div>
//         <div className='flex justify-between py-3'>
//           <span className={`uppercase ${stretchPro.className}`}>
//             software <br />
//             used
//           </span>
//           <h3 className='font-light dark:font-medium dark:text-orange-500'>
//             VSCode, NextJs,
//             <br /> Tailwind and react
//           </h3>
//         </div>
//         <div className='flex justify-between py-3'>
//           <span className={`uppercase ${stretchPro.className}`}>client</span>
//           <h3 className='font-light dark:font-medium dark:text-orange-500'>
//             Kisakye Moses
//           </h3>
//         </div>
//       </div>
//       {/* Project Description and Links */}
//       <div className='py-[1rem] flex flex-col gap-[1rem] lg:gap-[2.2rem]'>
//         <p className='break-all whitespace-pre-line'>
//           ACT is the nickname I use on social medias. The goal of this project
//           was to create my own identity, adaptable and modular to work with both
//           my real name and my nickname. First, the identity needed to be defined
//           in brand guidelines and then had to be adapted for digital medias
//           (website, wallpapers, social medias) and physical formats (business
//           cards/stickers, letter paper and resume).
//         </p>
//         <div className='flex justify-between'>
//           <Link
//             href='/live-preview'
//             target='blank'
//             className='flex  button-85 items-center gap-2 font-bold'
//           >
//             <FaLink />
//             Live Link
//           </Link>
//           <Link
//             href='/github-repo'
//             target='blank'
//             className='flex button-52 items-center gap-2 font-bold dark:border-[1px] dark:border-white dark:bg-black'
//           >
//             <FaGithub />
//             GithubRepo
//           </Link>
//         </div>
//       </div>
//       {/* Project Images */}
//       <div className='border-b-2 border-slate-600 pb-[1rem] pt-[2.2rem]'>
//         <h2 className={`text-center py-2 ${stretchPro.className}`}>
//           Projeect Imagees
//         </h2>
//         <div className='flex flex-col gap-[1.5rem]'>
//           <div className='box-shadow h-[200px] lg:h-[400px] bg-[#f7f7f7]'></div>
//           <div className='box-shadow h-[200px] lg:h-[400px] bg-[#ffe54c]'></div>
//           <div className='box-shadow h-[200px] lg:h-[400px] bg-[#f7f7f7]'></div>
//           <div className='box-shadow h-[200px] lg:h-[400px] bg-[#ffe54c]'></div>
//         </div>
//       </div>
//       <div className='py-[1rem] flex justify-between'>
//         <Link href='' className={`${stretchPro.className}`}>
//           next project
//         </Link>
//         <Link href='/' className={`font-bold ${raleway.className}`}>
//           back to home
//         </Link>
//       </div>
//     </section>
//   );
// }
