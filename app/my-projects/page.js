"use client";

import React, { useEffect } from "react";
import PageWrapper from "../components/page-wrapper";
import Projects from "@/app/components/my-projects/Projects";
import { NextResponse } from "next/server";
import { toast } from "react-toastify";

export default async function page() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await fetch(process.env.PROJECTS_API);
        const data = await projectsResponse.json();
        setProjectsData(data);
      } catch (error) {
        console.error("Error in getting projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PageWrapper>
      <main className='flex bg-white dark:bg-black lg:pr-[10rem] lg:pt-[16rem] pt-[8rem]  min-h-full lg:h-screen lg:overflow-hidden'>
        <Projects data={projectsData} />
      </main>
    </PageWrapper>
  );
}
