import React from 'react'

const App = () => {
  return (
  
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-6xl font-bold m-10 text-blue-500'>Short URL</h1>
      <h2 className='text-4xl font-bold m-5 text-zinc-600'>Paste the URL to be shortened</h2>
      <div className='flex flex-col items-center justify-evenly'>
      <div className='wrapper flex items-center justify-center '>
        <input type="text" className='border border-slate-950 text-3xl mr-2' />
        <span className='bg-blue-600 hover:bg-blue-800 rounded-lg  text-2xl p-[5px] text-slate-100 '>Shorten URL</span>
      </div>
      <div className=' absolute bottom-0'>
        <h1 className='text-xl font-medium m-5 text-orange-600'>Developed by Anish 🔥</h1>
      </div>
    </div>
    </div>
   
  )
}

export default App