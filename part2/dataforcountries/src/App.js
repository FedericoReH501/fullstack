import axios from 'axios'
import { useState, useEffect } from 'react'
import Display from './components/Display'

function App() {
  const [countries, setCountries] = useState([])
  const [newfilter, setNewFilter] = useState('')
  const [show, setShow] = useState([])
  const [meteo, setMeteo] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  }, [])

  useEffect(() => {
    if (show.length === 1) {
      const latitude = show[0].latlng[0]
      const longitude = show[0].latlng[1]
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
        .then(response => setMeteo(response.data.current_weather))
    }
  }, [show])

  useEffect(() => {
    setShow(countries.filter(country => country.name.common.toUpperCase()
      .includes(newfilter.toUpperCase())))
  }, [newfilter])

  const handleFilter = event => {
    setNewFilter(event.target.value)
    setMeteo([])
  }
  const handleShowClick = country => setShow([country])


  console.log(meteo)
  return (
    <div className="App">
      <form>
        search for countries:<input type='text' value={newfilter} onChange={handleFilter} ></input>
      </form>
      <Display countriesToShow={show} meteo={meteo} handleClick={handleShowClick} />

    </div>
  );
}

export default App;
