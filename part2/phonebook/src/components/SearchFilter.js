const SearchFilter = (props)=>{
  return(
    <form>
        search filter: <input type='text' value={props.newFilter} onChange={props.handleNewFilter}></input>
  </form>
  )
  
}

export default SearchFilter