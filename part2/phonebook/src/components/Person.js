const Person = ({person,handleClick}) => {

    return(
      <li>
    {person.name} {person.number}
    <button onClick={()=>handleClick(person)}>delete</button>
</li>  
    )

}
export default Person