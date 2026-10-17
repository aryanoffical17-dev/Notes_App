import React, { useState } from 'react'

function NoteForm({onAddNote}) {
    const[title , setTitle] = useState("")
    const[description,setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddNote({
          title:title,
          description: description
        })
        setTitle("")
        setDescription("")
    } 
    
  return (
    
    <form className='flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm   ' onSubmit={handleSubmit} >

      <div>
     
        <label
          className='mb-2 block text-sm font-medium text-gray-700'
          htmlFor="title"
        >
          Note Title
        </label>

        <input
        
          className='w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
          id='title'
          name='title'
          type="text"
          placeholder='Enter note title'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}    
        />
      </div>

      <div>
        <label
          className='mb-2 block text-sm font-medium text-gray-700'
          htmlFor="description"
        >
          Description
        </label>

        <textarea
       
          className='min-h-32 w-full resize-y rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
          id="description"
          name="description"
          placeholder="Write your note..."
          value={description}
          onChange={(e)=>{
            setDescription(e.target.value)
          }}    
        />
      </div>

      <button
        className='self-start rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer'
        type='submit'
        
      >
        Save Note
      </button>
    </form>
  )
}

export default NoteForm