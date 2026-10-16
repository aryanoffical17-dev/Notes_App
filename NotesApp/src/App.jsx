import React from 'react'
import NoteCard from './components/NoteCard'
import PageHeader from './components/PageHeader'
import NoteForm from './components/NoteForm'

function App() {
  return (
    <div className='min-h-screen bg-gray-50 p-6'>

      <div className='mx-auto max-w-5xl'>
      <PageHeader/>
      <NoteCard/>
      <NoteForm/>
      </div>

    </div>
  )
}

export default App