import React from "react";
import { toast } from "react-toastify";
import Contact from "../components/Contact";
import PageWrapper from "../components/page-wrapper";

export default function page() {
  return (
    <PageWrapper>
      <div className='flex bg-[#FFFFFF] dark:bg-[#222325] lg:px-[10rem] lg:pt-[16rem] pt-[8rem] justify-center dark:text-white min-h-screen lg:h-full lg:overflow-hidden'>
        <Contact />
      </div>
    </PageWrapper>
  );
}
