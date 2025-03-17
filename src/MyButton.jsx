import React from 'react'


const MyButton = ({styl, event,text}) => {
  return (
    <div>
      <button className= {styl}  onClick={event}  >{text} </button>
    </div>
  )
}

export default MyButton
