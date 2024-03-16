import React from 'react'

function Navbar({data}) {
  return (
    <div className='w-full h-16 items-center justify-between px-14 flex'>
      <h1 className='text-2xl font-semibold text-teal-500'>SONGS</h1>
     <div className='flex bg-teal-600 px-3 py-1 rounded-md items-center cursor-pointer'>
        <h3 className=' text-sm font-semibold text-teal-100 px-2 '>Favourits</h3>
        <h4 className='bg-teal-800 px-2 py-1 rounded-full text-xs font-semibold text-teal-100 '>
          {data.filter(item=>item.added).length}
          </h4>
     </div>
    </div> 
  )
}

export default Navbar
