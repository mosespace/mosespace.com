import React from "react";
import Detailed from "../components/detailed-page/Detailed";
import PageWrapper from "../components/page-wrapper";

export default function page() {
  return (
    <PageWrapper>
      <div className='flex lg:pt-0 dark:bg-black dark:text-white pt-[8rem] pb-[2rem] min-h-full lg:h-full lg:overflow-hidden'>
        <Detailed />
      </div>
    </PageWrapper>
  );
}
