import React from "react";
import PageWrapper from "../components/page-wrapper";
import Projects from "@/app/components/my-projects/Projects";

export default async function page() {
  const response = await fetch(process.env.NEXT_PUBLIC_PROJECTS_API, {
    cache: "no-store",
  });
  const projectsData = await response.json();
  // console.log(projectsData);
  return (
    <PageWrapper>
      <main className='flex bg-[#FFFFFF] dark:bg-[#222325] lg:pt-[16rem] pt-[8rem]  min-h-screen lg:h-screen lg:overflow-hidden'>
        <Projects data={projectsData} />
      </main>
    </PageWrapper>
  );
}
