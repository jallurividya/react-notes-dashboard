import React from 'react'
import NotesProvider from './NotesProvider'
import NotesDashboard from './NotesDashboard'

const App = () => {
  return (
    <NotesProvider>
      <NotesDashboard />
    </NotesProvider>
  )
}

export default App