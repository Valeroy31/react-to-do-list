import React, { useState } from 'react'

const App = () => {

const [myAge, setmyAge] = useState(18)

const increaseAge=(inc)=>{

  setmyAge(myAge+inc)
}



  return (
    <div>
      my age is {myAge}
      <button onClick={(inc)=>increaseAge(10)} >Increase age</button>
    </div>
  )
}

export default App
