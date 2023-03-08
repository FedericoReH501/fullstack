const Information = ({ country,meteo}) => {
    const lngsArray = Object.values(country.languages)
    const weathercode=(c)=>{
      if(c===0){
        return 'Clear sky'
      } 
      if(c===1){
        return 'Mainly clear'
      } 
      if(c===2){
        return 'partly cloudy'
      } 
      if(c===3){
        return 'overcast'
      } 
      
      if(c===45){
        return 'Fog '
      } 
      if(c===58){
        return 'depositing rime fog'
      } 
      if(c===51 || c===53||c===55|| c===56|| c===57){
        return 'drizzle'
      } 
      
      if(c===61 || c===63||c===65|| c===66|| c===67 ||c===81|| c===80|| c===82){
        return 'rain'
      } 
      if(c===71 || c===73||c===75|| c===66|| c===67 || c===85 || c===86){
        return 'snowfall'
      } 
      if(c===95 || c===96||c===99){
        return 'Thunderstorm'
      } 
      
    }
    return (
      <div>
        <ul>
          <h1>{country.name.common}</h1>
          <li>capital: {country.capital}</li>
          <li>area: {country.area}</li>
  
          <h3>Lenguages:</h3>
          <ul>
            {lngsArray
              .map(l => <li key={lngsArray.indexOf(l)}>{l}</li>)}
          </ul>
          <img src={country.flags.png}></img>
          <h2>weather in {country.name.common}</h2>
          <ul>
          <li>weather: {weathercode(meteo.weathercode)}</li>
            <li>temperature: {meteo.temperature} celsius</li>
            <li>windspeed:{meteo.windspeed} m/s</li>
          </ul>
        </ul>
  
      </div>
  
    )
  }
  export default Information