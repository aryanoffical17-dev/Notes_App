import React, { useState } from 'react'
import NoteCard from './components/NoteCard'
import PageHeader from './components/PageHeader'
import NoteForm from './components/NoteForm'

function App() {

  const[notes,setNotes] = useState([])

  const addNote = (newNote) =>{
    setNotes((prevNotes) => [...prevNotes ,newNote])
  }

  return (
    <div className='min-h-screen bg-gray-50 p-6'>

      <div className='mx-auto max-w-5xl'>
      <PageHeader/>

      <NoteForm onAddNote={addNote}/>

       <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    {notes.map((note, index) => (
      <NoteCard
        key={index}
        title={note.title}
        description={note.description}
      />
    ))}
   </div>


      </div>

    </div>
  )
}

export default App