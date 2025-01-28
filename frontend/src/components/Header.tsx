

const Header = () => {

    
  return (
    <div className='flex flex-col justify-between items-center my-20'>
      <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
         <p>Best text to style generator</p>
      </div>
      <h1  className='text-4xl font-semibold max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center drop-shadow-md'>Turn text to <span className='text-blue-500'>Style</span>,in seconds</h1>
    </div>
  )
}

export default Header
