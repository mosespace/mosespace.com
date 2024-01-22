import React from "react";

export default function Blog() {
  return (
    <section className='relative items-center w-full px-0 py-12 mx-auto md:px-12 lg:px-0'>
      <ol
        className='relative grid grid-cols-1 gap-3 lg:grid-cols-2 sm:grid-cols-2'
        role='list'
      >
        <li className='border rounded-lg space-y-3 px-3 py-2.5 lg:px-4 lg:py-5 bg-white dark:bg-gray-800 dark:backdrop-blur-md dark:border-gray-600'>
          <a className='group' href='#'>
            <div>
              <div className='py-3'>
                <div className='flex-shrink-0 block'>
                  <div className='flex items-center'>
                    <div>
                      <img
                        alt=''
                        className='inline-block object-cover rounded-full h-9 w-9'
                        src='/me.jpg'
                      />
                    </div>
                    <div className='ml-3'>
                      <p className='text-sm text-black dark:text-orange-500 group-hover:text-blue-500'>
                        Mikaela Andreuzza
                        <span className='text-gray-500'>in</span>
                        Investiments ·
                        <span className='text-gray-500'>4 days ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className='mt-8 text-lg font-medium leading-6 text-black dark:text-orange-500 '>
                The Hidden Danger of QR Codes
              </h3>
            </div>
            <p className='mt-5 text-base text-gray-500 line-clamp-3 dark:text-white '>
              In this article, I will be referring to various amazing Authors
              and resources I strongly recommend that you separately study them
              on your own. The references list is at the end of the article,
              enjoy reading! I will be referring to various amazing. In this
              article, I will.
            </p>
            <div className='py-3'>
              <div>
                <div className='inline-flex items-center justify-between w-full'>
                  <div>
                    <p className='text-sm text-black dark:text-orange-500 group-hover:text-blue-500'>
                      Investiments
                      <span className='text-gray-500'>·</span>
                      10 min read
                    </p>
                  </div>
                  <div>
                    <span>
                      <ion-icon
                        name='bookmark-outline'
                        className='w-5 text-blue-500 group-hover:text-black md hydrated'
                        role='img'
                        aria-label='bookmark outline'
                      ></ion-icon>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className='border rounded-lg space-y-3 px-3 py-2.5 lg:px-4 lg:py-5 bg-white dark:bg-gray-800 dark:backdrop-blur-md dark:border-gray-600'>
          <a className='group' href='#'>
            <div>
              <div className='py-3'>
                <div className='flex-shrink-0 block'>
                  <div className='flex items-center'>
                    <div>
                      <img
                        alt=''
                        className='inline-block object-cover rounded-full h-9 w-9'
                        src='/me.jpg'
                      />
                    </div>
                    <div className='ml-3'>
                      <p className='text-sm text-black dark:text-orange-500 group-hover:text-blue-500'>
                        Mikaela Andreuzza
                        <span className='text-gray-500'>in</span>
                        Investiments ·
                        <span className='text-gray-500'>4 days ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className='mt-8 text-lg font-medium leading-6 text-black dark:text-orange-500 '>
                The Hidden Danger of QR Codes
              </h3>
            </div>
            <p className='mt-5 text-base text-gray-500 line-clamp-3 dark:text-white '>
              In this article, I will be referring to various amazing Authors
              and resources I strongly recommend that you separately study them
              on your own. The references list is at the end of the article,
              enjoy reading! I will be referring to various amazing. In this
              article, I will.
            </p>
            <div className='py-3'>
              <div>
                <div className='inline-flex items-center justify-between w-full'>
                  <div>
                    <p className='text-sm text-black dark:text-orange-500 group-hover:text-blue-500'>
                      Investiments
                      <span className='text-gray-500'>·</span>
                      10 min read
                    </p>
                  </div>
                  <div>
                    <span>
                      <ion-icon
                        name='bookmark-outline'
                        className='w-5 text-blue-500 group-hover:text-black md hydrated'
                        role='img'
                        aria-label='bookmark outline'
                      ></ion-icon>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ol>
    </section>
  );
}
