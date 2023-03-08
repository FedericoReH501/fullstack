const Header = ({ name }) => <h1>{name}</h1>

const Part = ({ part }) => <li> {part.name} {part.exercises} </li>


const Content = ({ parts }) => {

  const totale = parts.reduce(
    (accumulator, parte) => accumulator + parte.exercises, 0

  )
  return (
    <>
      <ul>
        {parts.map(part =>
          <Part key={part.id} part={part}></Part>
        )}
        <li><h3>total of {totale} exercises</h3></li>
      </ul>

    </>


  )
}
const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts}></Content>
    </div>
  )
}
const Courses = ({courses})=>{

  return(
    <div>
      {courses.map(course=><Course key ={course.id} course={course}></Course>)}
    </div>
  )
}

export default Courses