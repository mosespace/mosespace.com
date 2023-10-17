"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { stretchPro, raleway } from "../../styles/fonts";
import { toast } from "react-toastify";

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    // console.log(data);

    try {
      setLoading(true);

      const response = await fetch(process.env.NEXT_PUBLIC_EMAIL_API, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        toast.success("Your email has been sent successfully");
        setLoading(false);
        // console.log(response);
      } else {
        toast.error("Your email has not been sent. Give it a try");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <section
        className={`${raleway.className} lg:mx-[35rem] px-[2rem] lg:mt-[10rem]`}
      >
        {/*Contact Form and Footer Section Together*/}
        <>
          <h2
            className={`${stretchPro.className} mb-4 text-4xl tracking-tight text-center text-gray-900 dark:text-white`}
          >
            Contact Me
          </h2>
          <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
            Got Link project you would like be to jump on? Want to send feedback
            about Link certain project? Need details about my Prices and offers?
            Let me know...
          </p>

          {/*The form handled by React-Hook-Forms*/}
          <form
            onSubmit={handleSubmit(onSubmit)}
            method='POST'
            className='space-y-8'
          >
            {/*Subject Input*/}
            <div>
              <label
                for='subject'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Subject
              </label>
              <input
                type='text'
                id='subject'
                {...register("subject", { required: true })}
                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                placeholder='Let me know how i can help you...🤗'
              />
              {errors.subject && (
                <p class='mt-2 text-sm text-red-600 dark:text-red-500'>
                  <span class='font-medium'>Oops!</span> The subject is
                  required!
                </p>
              )}
            </div>

            {/*Email Input*/}
            <div>
              <label
                for='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                {...register("email", { required: true })}
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                placeholder='kiskayemoses@gmail.com'
              />
              {errors.email && (
                <p class='mt-2 text-sm text-red-600 dark:text-red-500'>
                  <span class='font-medium'>Oops!</span> The Email should be
                  valid eg: `kiskayemoses@gmail.com` and required!
                </p>
              )}
            </div>

            {/*Message */}
            <div className='sm:col-span-2'>
              <label
                for='message'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
              >
                Your message
              </label>
              <textarea
                id='message'
                rows='6'
                {...register("message")}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
                placeholder='Leave your message here... focus:outline-none'
              ></textarea>
            </div>

            {/*Button Loading States*/}
            {loading ? (
              <button
                disabled
                type='button'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center'
              >
                <svg
                  aria-hidden='true'
                  role='status'
                  className='inline w-4 h-4 mr-3 text-white animate-spin'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='#E5E7EB'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentColor'
                  />
                </svg>
                Sending...
              </button>
            ) : (
              <button
                type='submit'
                className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-amber-700 sm:w-fit hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800'
              >
                Send message
              </button>
            )}
          </form>

          {/*Down Footer */}
          <div class='mt-[2rem] px-4 py-6 md:flex text-center md:items-center md:justify-between'>
            <span class='text-sm text-gray-900 lg:text-gray-50 dark:text-gray-300 sm:text-center'>
              © 2023{" "}
              <Link href='https://flowbite.com/'>
                Made with 💚 by Kisakye Moses™
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </>
      </section>
    </>
  );
}
