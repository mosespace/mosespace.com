import React from "react";

import Projects from "@/app/components/my-projects/Projects";
import PageWrapper from "../components/page-wrapper";

export default function page() {
  return (
    <PageWrapper>
      <main className='flex bg-white dark:bg-black lg:pr-[10rem] lg:pt-[16rem] pt-[8rem]  min-h-full lg:h-screen lg:overflow-hidden'>
        <Projects />
      </main>
    </PageWrapper>
  );
}
// bg-[#f7f7f7]
