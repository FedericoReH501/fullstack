import Person from "./Person"
import axios from "axios"

const Numbers = ({personToSHow,handleClick}) => {
    return(
        <ul>
        {personToSHow
        .map(person => <Person key={person.id} person={person} handleClick={handleClick} />)}
    </ul> 
    )
   
}

export default Numbers