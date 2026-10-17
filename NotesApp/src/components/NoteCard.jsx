import React from 'react'

function NoteCard({title,description}) {

    const date = new Date();

  return (

    <article className='rounded-2xl p-5 border bg-white shadow-sm w-full'>

    <div className='mb-3 flex items-start justify-between gap-3' >

      <h3 className='text-lg font-bold text-gray-800 leading-6'>{title}</h3>
      <button className="rounded-lg px-2 py-1 text-gray-500 hover:bg-gray-100" aria-label="More options">
            ⋮
       </button>

    </div>
    
      <p className='text-sm mb-5 font-normal text-gray-600 leading-6'>{description}</p>
       
        <footer className='mt-4 border-t border-gray-100 flex gap-3 pt-4 items-center justify-between'>

        <span className='text-xs text-gray-400' >{date.toDateString()}</span>

      <div className='flex items-center gap-2'>
      <button className=' rounded-lg px-3 py-2 hover:bg-blue-50 text-sm font-medium transition-colors cursor-pointer text-blue-500' >Edit</button>
      <button className=' rounded-lg px-3 py-2 hover:bg-red-50 transition-colors text-red-600 font-medium text-sm cursor-pointer'>Delete</button>
      </div>

        </footer>


    </article>
    
  )
}

export default NoteCard 