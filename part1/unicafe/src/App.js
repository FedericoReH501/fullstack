import { useState } from 'react'

const Button = props => <button onClick={props.handleClick} >{props.text}</button>
const StatisticsLine = props =>{
  return(
  <table>
  <tbody>
  <tr>
  <td>{props.text}</td> 
  <td>{props.value}</td>
  </tr>
  </tbody>
  </table>
  
  
)

}
const Statistics = props => {
  const average = () => (props.good - props.bad) / props.totalfeed
  const percentage = () => 100 * (props.good) / props.totalfeed
  if (props.totalfeed != 0 ) {
    return (
        <div>
          <h2>statistics</h2>
          <StatisticsLine text='good: ' value={props.good}></StatisticsLine>
          <StatisticsLine text='neutral: ' value={props.neutral}></StatisticsLine>
          <StatisticsLine text='bad: ' value={props.bad}></StatisticsLine>
          <StatisticsLine text='all: ' value={props.totalfeed}></StatisticsLine>
          <StatisticsLine text='average: ' value={average()}></StatisticsLine>
          <StatisticsLine text='positive: ' value={percentage()}></StatisticsLine>
        </div>
      )
  }
  return <h2> no feedback given </h2>
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalfeed, setTotal] = useState(0)
  const increase = (state, setState) => () => {
    let updateTotal = totalfeed + 1
    setState(state + 1)
    setTotal(updateTotal)
  }



  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={increase(good, setGood)} text='Good'></Button>
      <Button handleClick={increase(neutral, setNeutral)} text='Neutral'></Button>
      <Button handleClick={increase(bad, setBad)} text='Bad'></Button>
      <Statistics good={good} neutral={neutral} bad={bad} totalfeed={totalfeed}></Statistics>

    </div>
  )
}

export default App