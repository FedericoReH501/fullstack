import Note from './components/Note'
import { useState, useEffect } from 'react'
import axios from 'axios'
import noteServices from './services/notes'

const Button = (props) => <><button onClick={props.handleClick}>{props.text}</button></>

const App = () => {
  const [note, setNotes] = useState([])
  const [newNote, setNewnote] = useState('new note...')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteServices
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5

    }

    noteServices.add(noteObject)
      .then(newNote => setNotes(note.concat(newNote)))

    setNewnote(' ')
  }

  const handleNoteChange = (event) => {
    setNewnote(event.target.value)
  }

  const handleImportance = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const noteTochange = note.find(n => n.id === id)
    const changedNote = { ...noteTochange, important: !noteTochange.important }
    noteServices.update(id,changedNote)
      .then(response => setNotes(note.map(n => n.id === id ? response :n)))
  }

  const notesToShow = showAll
    ? note
    : note.filter(note => note.important)

  const filterText = showAll
    ? 'important'
    : 'all'

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} handleImportance={() => handleImportance(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}></input>
        <button type='submit'>save</button>
      </form>
      <Button text={filterText} handleClick={() => setShowAll(!showAll)}></Button>
    </div>
  )
}

export default App