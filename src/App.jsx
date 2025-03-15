import React,{useState} from "react";

// useState is used to define a state you want to change on the webpage. i.e. A live html
// update
// useState can only be used when first imported, as seen above

const App = () => {
  // const [nameOfVariable, functionToChangeVariable] = useState(initialValue)

  const [myNum, setMyNum] = useState(10) // This is a state variable. The use state hook is used
  // to define a state variable. The first value is the variable name, the second value is the
  // function to change the variable and the third value is the initial value of the variable
  // The function to change the variable is used to change the value of the variable. It is only used
  // when there has to be an active change to a variable value on the webpage

 
   const increment = (inc) => {
    setMyNum( myNum+inc)
    
    console.log(myNum)
   }
  return (
    <div>
      <h1>Hello, {myNum}</h1>
      <button onClick={()=> increment(10)}>Increment</button>
      {/* // if you want to pass a parameter to a function in the onClick event, you have to use an arrow
      // function to call the function. The arrow function is used to call the function with the
      // parameter. The parameter is then passed to the function */}
    </div>
  );
}

export default App;