import Names from './Names'

const Countries = ({ countriesToShow,handleClick }) => {
    return (
      <div>
        <ul>
          {countriesToShow.map(c => <Names key={parseInt(c.ccn3)} country={c} handleClick={handleClick} />)}
        </ul>
      </div>
    )
  }
  export default Countries