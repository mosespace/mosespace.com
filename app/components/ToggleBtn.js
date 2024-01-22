"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

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
      className='h-6 w-6'
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <BsMoon size={21} color='black dark:text-white' />
      ) : (
        <BsSun size={21} color='black dark:text-white' />
      )}
    </button>
  );
}
