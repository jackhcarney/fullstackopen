import React, { useState } from 'react'

const Header = ({title}) => (
  <h1>{title}</h1>
)

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Statistics = ({good, bad, neutral, all, average, positive}) => {
  if(good===0 && neutral===0 && bad===0) {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return( 
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  const average = (good-bad)/all
  const positive = good/all * 100


  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header title='give feedback' />
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>
      <Header title='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App