"use client";
import React from "react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ToggleBtn() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className='h-6 w-6'
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <BsMoon size={21} className='dark:text-white fill-current' />
      ) : (
        <BsSun size={21} className='dark:text-white fill-current' />
      )}
    </button>
  );
}
