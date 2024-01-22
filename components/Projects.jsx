import Image from "next/image";
import React from "react";

export default function Projects() {
  const projects = [
    {
      date: "July 27 2023",
      image: "/project_images/proj8.jpg",
      title:
        "Provident de illo eveniet commodi fuga fugiat laboriosam expedita.July 27 2023",
      description:
        "Laudantium in, voluptates ex placeat quo harum aliquam totam,doloribus eum impedit atque...",
      preview: "/",
      code: "/",
    },
    {
      date: "July 27 2023",
      image: "/project_images/proj8.jpg",
      title:
        "Provident de illo eveniet commodi fuga fugiat laboriosam expedita.July 27 2023",
      description:
        "Laudantium in, voluptates ex placeat quo harum aliquam totam,doloribus eum impedit atque...",
      preview: "/",
      code: "/",
    },
    {
      date: "July 27 2023",
      image: "/project_images/proj8.jpg",
      title:
        "Provident de illo eveniet commodi fuga fugiat laboriosam expedita.July 27 2023",
      description:
        "Laudantium in, voluptates ex placeat quo harum aliquam totam,doloribus eum impedit atque...",
      preview: "/",
      code: "/",
    },
    {
      date: "July 27 2023",
      image: "/project_images/proj8.jpg",
      title:
        "Provident de illo eveniet commodi fuga fugiat laboriosam expedita.July 27 2023",
      description:
        "Laudantium in, voluptates ex placeat quo harum aliquam totam,doloribus eum impedit atque...",
      preview: "/",
      code: "/",
    },
    {
      date: "July 27 2023",
      image: "/project_images/proj8.jpg",
      title:
        "Provident de illo eveniet commodi fuga fugiat laboriosam expedita.July 27 2023",
      description:
        "Laudantium in, voluptates ex placeat quo harum aliquam totam,doloribus eum impedit atque...",
      preview: "/",
      code: "/",
    },
  ];
  return (
    <div className='py-8'>
      <div className='m-auto lg:m-0 px-4 lg:px-0 text-gray-600 md:px-12'>
        <div className='mx-auto'>
          {projects?.splice(0, 4).map((project, index) => (
            <div
              key={index}
              className='group relative -mx-2 mb-3 sm:-mx-4 lg:lg:p-4 sm:p-6 rounded-2xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-4 sm:flex transition duration-300 hover:z-10'
            >
              <div className='sm:w-2/6 rounded-2xl overflow-hidden transition-all duration-500 group-hover:rounded-xl'>
                <Image
                  src={project.image}
                  alt='Kisakye Moses Project 1'
                  loading='lazy'
                  width='1000'
                  height='100'
                  className='h-32 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105'
                />
              </div>

              <div className='sm:p-2 sm:pl-0 sm:w-3/4'>
                <span className='mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0'>
                  {project.date}
                </span>
                <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
                  {project.title}
                </h3>
                <p className='my-4 text-gray-600 dark:text-gray-300'>
                  {project.description}
                </p>

                <div className='flex gap-4'>
                  <a
                    href='#'
                    className='px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-orange-600 dark:border-gray-700 dark:text-gray-300'
                  >
                    Code
                  </a>
                  <a
                    href='#'
                    className='px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-orange-600 dark:border-gray-700 dark:text-gray-300'
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
