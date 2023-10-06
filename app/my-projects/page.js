import React from "react";

import Projects from "@/app/components/my-projects/Projects";

export default function page() {
  return (
    <main className='flex bg-[#f7f7f7] lg:pr-[10rem] lg:pt-[16rem] pt-[8rem]  min-h-full lg:h-screen lg:overflow-hidden'>
      <Projects />
    </main>
  );
}
