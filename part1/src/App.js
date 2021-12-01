import React, { useState } from 'react'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const Display = ({text}) => (
  <h1>{text}</h1>
)

const Button = (props) => (
<button onClick={props.handleClick}>{props.text}</button>
)

const Anecdote = ({anecdotes, selected}) => (
  <div>{anecdotes[selected]}</div>
)

const Vote = ({points}) => (
  <div>
    has {points} votes
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  console.log("points", points)
  const maxVote = Math.max(...points)
  const maxVoteIndex = points.indexOf(maxVote)


  const handleAnecdoteClick = () => {
    console.log("next anecdote button has been clicked.")
    return(setSelected(getRandomInt(0,anecdotes.length)))
  }

  const handleVoteClick = () => {
    console.log("vote button has been clicked.")
    const newPoints = [...points]
    newPoints[selected] += 1
    return(setPoints(newPoints))
  }

  return (
    <div>
      <Display text="Anecdote of the day" />
      <Anecdote anecdotes={anecdotes} selected={selected} />
      <Vote points={points[selected]}/>
      <Button handleClick={handleVoteClick} text='vote' /><Button handleClick={handleAnecdoteClick} text='next anecdote' />
      <Display text="Anecdote with most votes" />
      <Anecdote anecdotes={anecdotes} selected={maxVoteIndex} />
      <Vote points={points[maxVoteIndex]} />
    </div>
  )
}

export default App