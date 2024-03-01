import React from "react";

export default function SubHeadings({ title, description }) {
  return (
    <div className='mb-12 text-start'>
      <h2 className='text-lg font-bold text-gray-800 md:text-xl mb-2 dark:text-white'>
        {title}
      </h2>
      <p className='text-gray-600 dark:text-gray-300'>{description}</p>
    </div>
  );
}
