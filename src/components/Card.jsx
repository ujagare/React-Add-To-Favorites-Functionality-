import React from 'react'

function Card({data,handelClick,index}) {
  const {name,image,added,artist } = data
  return (
    <div className='p-4 w-60 bg-teal-500 rounded-md flex gap-4 relative'>
      <div className='w-20 h-20 bg-teal-100 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div className=' '>
        <h3 className='text-xl font-semibold text-teal-800'>{name}</h3>
        <h5 className='text-xs font-semibold text-teal-800'>{artist}</h5>
      </div>
      <button onClick={()=>handelClick(index)} className={`px-3 py-1 ${ added === false ?'bg-teal-800':'bg-orange-600'} absolute text-xs font-semibold rounded-md text-teal-100 bottom-3 right-5`}>
        {added== false ? 'Add To Favorates': "Added"}
      </button>
  
    
    </div>
  )
}

export default Card
