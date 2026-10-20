import React from 'react'

function PageHeader() {

 

  return (
    <div className='flex items-center justify-between gap-4 mb-8'>

    <div >
      <h1 className='text-2xl font-bold tracking-tight text-gray-900'>My Note</h1>
      <p className='mt-1 text-sm text-gray-500'>Organize Your thoughts in One Place</p>
    </div>

      <button className='inline-flex items-center rounded-xl bg-blue-600 px-4 py-3 text-sm transition-colors text-white font-medium shadow-sm hover:bg-blue-700 cursor-pointer gap-2'>

        <span className=''>+</span>
        Add Notes
        
      </button>

    </div>

  );
}

export default PageHeader