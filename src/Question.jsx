import React from 'react'
import SingleQuestion from './SingleQuestion'

const Question = ({question}) => {
   console.log(question);
  return (
    <div className='questionContainer'>
        <div className='questionList'>
            <h2>Questions</h2>
            {question.map((quest)=>{
                return <SingleQuestion key={quest.id} {...quest} />
            })}
        </div>
    </div>
  )
}

export default Question