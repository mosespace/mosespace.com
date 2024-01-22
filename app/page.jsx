import Blog from "@/components/Blog";
import Projects from "@/components/Projects";
import SubHeadings from "@/components/SubHeadings";
export default function Home() {
  return (
    <div className='min-h-screen'>
      <SubHeadings
        title='About me'
        description='Crafting UIs with React since 2023. Passionate about interface design
          and attention to detail, striving to create great experiences.'
      />
      <SubHeadings
        title='Now'
        description="'I'm fine-tuning my freelancing business, sharing more online, leveling up my design skill. I also experiment more with side projects, try to ship more."
      />

      <div className='xl:container m-auto lg:px-6 text-gray-600 md:px-12 xl:px-0'>
        <div className='lg:space-y-2'>
          <h2 className='text-3xl font-bold text-gray-800 md:text-4xl dark:text-white'>
            Recent Projects
          </h2>
          <p className='text-gray-600 dark:text-gray-300'>
            Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt,
            debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
          </p>
        </div>
      </div>
      <Projects />
      <div className='xl:container m-auto lg:px-6 text-gray-600 md:px-12 xl:px-0'>
        <div className='lg:space-y-2'>
          <h2 className='text-3xl font-bold text-gray-800 md:text-4xl dark:text-white'>
            Recent Blogs
          </h2>
          <p className='text-gray-600 dark:text-gray-300'>
            Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt,
            debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
          </p>
        </div>
      </div>
      <Blog />
    </div>
  );
}
