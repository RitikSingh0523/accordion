import React, { useState } from 'react'
import Question from './Question'
import data from './data'

const App = () => {
  const [question,setQuestion]=useState(data);
  return (
    <Question question={question}/>
  )
}

export default App