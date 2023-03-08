const AddPerson =(props)=>{
    
    return(
        <form onSubmit= {props.onsubmit}>
        <div>
          name: <input type="text" value={props.newName} onChange={props.handleNewname} />

        </div>
        <div>
          number: <input type="text" value={props.newNum} onChange={props.handleNewnum} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
    )
}
export default AddPerson