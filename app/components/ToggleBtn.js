"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function ToggleBtn() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // console.log(theme);

  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);
  //   if (!mounted) {
  //     return null;
  //   }

  return (
    <button
      className='px-[.7rem] py-[.8rem] rounded-md'
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <BsMoonFill size={21} color='black dark:text-white' />
      ) : (
        <BsSunFill size={21} color='black dark:text-white' />
      )}
    </button>
  );
}
