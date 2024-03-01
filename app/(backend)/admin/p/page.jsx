import Project from "@/components/back-end/create/Project";
import { getData } from "@/utils/getData";
import Link from "next/link";

export default async function page() {
  const projects = await getData("projects");
  //   console.log(projects);

  return (
    <div className='flex flex-col min-h-screen'>
      <Link
        href='/admin/c'
        class='text-white w-full bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-amber-600 dark:hover:bg-amber-700 focus:outline-none 800 mb-8'
      >
        Create Project
      </Link>

      <div className='grid md:grid-cols-2 gap-[1rem] grid-cols-1'>
        <Project projects={projects} />
      </div>
    </div>
  );
}
