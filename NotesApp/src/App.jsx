import React, { useEffect, useState } from 'react'
import NoteCard from './components/NoteCard'
import PageHeader from './components/PageHeader'
import NoteForm from './components/NoteForm'

function App() {
  
  const[notes,setNotes] = useState(()=>{
    const savedNotes = localStorage.getItem("notes");
    return savedNotes?JSON.parse(savedNotes):[];
  });

  const addNote = (newNote) =>{
    setNotes((prevNotes) => [...prevNotes ,newNote])
  }

  useEffect(()=>{
    localStorage.setItem( "notes",JSON.stringify(notes))
  },[notes])

  const [search,setSearch] = useState("")
  const [debouncedSearch,setdebouncedSearch] =useState("")

  const filteredNotes = notes.filter((note) =>
  note.title
    .toLowerCase()
    .includes(debouncedSearch.toLowerCase())
);


  useEffect(()=>{
    const timer = setTimeout(() => {
      setdebouncedSearch(search)
    }, 500);

    return () =>{
      clearTimeout(timer);
    };
  },[search])



  return (
    <div className='min-h-screen bg-gray-50 p-6'>

      <div className='mx-auto max-w-5xl '>
     
      <PageHeader/>
       <div className='py-4'>
      <div className='border rounded-2xl border-gray-300 bg-white shadow-sm outline-none py-4 px-5'>
        <h1 className=' text-sm py-2 px-3'>Search</h1>
       <input
  type="text"
  placeholder="Search notes..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 p-3 focus:ring-blue-500"
/>
    </div>
      </div>

      <NoteForm onAddNote={addNote}/>

       <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    {filteredNotes.map((note, index) => (
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