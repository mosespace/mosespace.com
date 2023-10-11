import React from "react";
import PageWrapper from "../components/page-wrapper";
import Projects from "@/app/components/my-projects/Projects";

export default async function page() {
  const response = await fetch(process.env.PROJECTS_API);
  const projectsData = await response.json();
  return (
    <PageWrapper>
      <main className='flex bg-white dark:bg-black lg:pr-[10rem] lg:pt-[16rem] pt-[8rem]  min-h-full lg:h-screen lg:overflow-hidden'>
        <Projects data={projectsData} />
      </main>
    </PageWrapper>
  );
}
