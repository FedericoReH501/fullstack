import { useState } from 'react'

const Button = props => <button onClick={props.handleClick}>{props.text}</button>

const Anecdotes = props => {
  return (
    <>
      <h1>Anecdotes of the day</h1>
      <p>{props.array[props.selected]}</p>
      <p>has: {props.votes[props.selected]}</p>
    </>
  )
}

const Winner = (props)=>{
  const winner = props.votes.indexOf(Math.max(...props.votes))
  return(
    <>
      <h1>Anecdote with most votes</h1>
      {props.array[winner]}
      <p>has: {props.votes[winner]}</p>
    </>
  )

 }
 

 function getRandom(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const clickNext = () => setSelected(getRandom(anecdotes.length))

  const clickVote = () => {
    const copy = [...votes]
    // increment the value in position 2 by one
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Anecdotes votes={votes} array={anecdotes} selected={selected}></Anecdotes>
      <Button text='next anecdote' handleClick={clickNext}></Button>
      <Button text='vote' handleClick={clickVote}></Button>
      <Winner array={anecdotes} votes={votes}></Winner>

    </div>
  )
}

export default App
