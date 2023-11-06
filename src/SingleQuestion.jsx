import React, { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'


const SingleQuestion = ({title,info}) => {
    const [isVisible,setIsVisible]=useState(false);
  return (
    <div className='singleQuestion'>
        <div className='question'>
            <div className='title'>{title}</div>
            <div className='button'>
                <button 
                    className='btn'
                    onClick={(()=>setIsVisible(!isVisible))}
                >

                    {isVisible ?(
                        <AiOutlineMinus/> ): (
                            <AiOutlinePlus />)}
                </button>
            </div>
        </div>
        {isVisible? <p>{info}</p>:<></>}
    </div>
  )
}

export default SingleQuestion