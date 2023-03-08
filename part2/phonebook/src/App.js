import { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import AddPerson from './components/AddPerson'
import Numbers from './components/Numbers'
import PersonsServices from './services/Persons'
import Notification from './components/Notification'
const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('type Name here...')
  const [newNum, setNewNum] = useState('type Number here...')
  const [newFilter, setNewfilter] = useState('')
  const [notify, setNotify] = useState({message:null,color:''})
  
  useEffect(() => {
    PersonsServices.getAll()
      .then(InitialNumbers => {
        setPersons(InitialNumbers)
      })
  }, [])
  
  const showNotify = (message, timeout,colore) => {
    const newNotify = {message:message,color:colore}
    setNotify(newNotify)
    setTimeout(() => {
      setNotify({...notify,message:null})
    }, timeout)
  }
  
  const handleNewname = (event) => setNewName(event.target.value)
  const handleNewnum = (event) => setNewNum(event.target.value)
  const handleNewFilter = (event) => setNewfilter(event.target.value)
  
  const handleAdd = (event) => {
    event.preventDefault()
    const personsObject = {
      name: newName,
      number: newNum,
    }

    if (persons.every((element) => JSON.stringify(element.name) !== JSON.stringify(newName))) {
      PersonsServices.add(personsObject)
        .then(newPerson => setPersons(persons.concat(newPerson)))
      showNotify(`${newName} succesfully added to the Phonebook`, 2500,'green')
      setNewName('')
      setNewNum('')
      
      return
    }

    if (window.confirm(`${newName} is already in the Phonebook,whant to change number?`)) {
      const id = persons.find(person => person.name === newName).id
      PersonsServices.update(id, personsObject)
        .then(response => setPersons(persons.map(p => p.id !== id ? p : response.data)))
      setNewName('')
      setNewNum('')
      showNotify(`${newName}'number succesfully updated`, 2500,'green')
    }

  }
  const handleDelete = (person) => {
    if (!window.confirm(`Delete ${person.name}?`)) {
      return
    }
    PersonsServices.remove(person.id)
      .then(setPersons(persons.filter(p => p.id !== person.id))).catch(error=>{
        showNotify(`${newName}already deleted`, 2500,'red')
      })
  }
  const personToSHow = (newFilter === '')
    ? persons
    : persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notify.message} color={notify.color}></Notification>
      <SearchFilter
        newFilter={newFilter}
        setNewfilter={setNewfilter}
        handleNewFilter={handleNewFilter}
      />
      <h2>add a new person</h2>
      <AddPerson
        onsubmit={handleAdd}
        newName={newName}
        newNum={newNum}
        handleNewname={handleNewname}
        handleNewnum={handleNewnum}
      />
      <h2>Numbers</h2>
      <Numbers personToSHow={personToSHow} handleClick={handleDelete} />
    </div>
  )
}

export default App
