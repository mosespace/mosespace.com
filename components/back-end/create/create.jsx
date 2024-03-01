"use client";
import ImageInput from "./ImageInput";
import { useForm } from "react-hook-form";

export default function Create() {
  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    data.image = imageUrl;
    console.log(data);
  }

  return (
    <>
      <section className='bg-white dark:bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
          <h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>
            Add a new project
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
              <div className='sm:col-span-2'>
                <label
                  for='title'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Project Title
                </label>
                <input
                  type='text'
                  name='title'
                  id='title'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-0'
                  placeholder='Type project name'
                  {...register("title")}
                />
              </div>
              <div className='w-full'>
                <label
                  for='github_link'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Github Link
                </label>
                <input
                  type='url'
                  name='github_link'
                  id='github_link'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-green-500'
                  placeholder='https://mosespace.com'
                  {...register("github_link")}
                />
              </div>
              <div className='w-full'>
                <label
                  for='preview_link'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Preview Link
                </label>
                <input
                  type='url'
                  name='preview_link'
                  id='preview_link'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-green-500'
                  placeholder='https://mosespace.com'
                  {...register("preview_link")}
                />
              </div>

              <ImageInput
                label='Project Image'
                endpoint='projectImage'
                setImageUrl={setImageUrl}
                imageUrl={imageUrl}
              />

              <div className='sm:col-span-2'>
                <label
                  for='description'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Description
                </label>
                <textarea
                  id='description'
                  rows='8'
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-green-500'
                  placeholder='Project description here'
                  {...register("description")}
                ></textarea>
              </div>
            </div>
            <button className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4  hover:bg-green-800'>
              Add project
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
