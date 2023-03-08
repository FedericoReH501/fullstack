import Information from './Information'
import Countries from './Countries'

const Display = ({ countriesToShow,handleClick,meteo}) => {
    if (countriesToShow.length >= 10) {
      return <><p>type more</p></>
    }
    else if (countriesToShow.length === 1) {
      return <Information country={countriesToShow[0]} meteo={meteo}></Information>
  
    }
  
    return <div><Countries countriesToShow={countriesToShow} handleClick={handleClick}/></div>
  
  }
  export default Display