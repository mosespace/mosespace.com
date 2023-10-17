import React from "react";
import PageWrapper from "../components/page-wrapper";
import About from "../components/about-me/About";

export default function Page() {
  return (
    <PageWrapper>
      <div className='flex bg-[#FFFFFF] dark:bg-[#222325] px-[2rem] lg:px-[10rem] lg:pt-[16rem] pt-[8rem] justify-center dark:text-white min-h-screen lg:h-full lg:overflow-hidden w-full'>
        <About />
      </div>
    </PageWrapper>
  );
}
