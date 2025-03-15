import React,{useState} from "react";


const App = () => {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [allToDo, setallTodo] = useState([])

    const addTodo = () => {
        let newTodo = { title,text };
        console.log(newTodo);
        setallTodo([...allToDo, newTodo])
        // setallTodo([...allToDo, {title,text}])  // this is the same as the line above
        
        // spread operator ... dupicates the array and adds the new element to the array
       // copyoftodo = [...allToDo, content: 'exercise']
    }

    const deleteTodo = (index) => {
        let newTodo = [...allToDo]
        newTodo.splice(index, 1)
        setallTodo(newTodo)
    }
    const editTodo = (index) => {
        let newTodo = [...allToDo]
        newTodo[index].title = e.target.value
        newTodo[index].text = e.target.value
        setallTodo(newTodo)}

  return (
    <>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center", margin:'auto',  borderRadius:'10px'}} >

    
<div style={{display:"flex",flexDirection:"column",alignItems:"center", margin:'auto', }}>
   <h1>To-do List</h1>
    <input type="text" placeholder="title" onChange={(e)=> setTitle(e.target.value)}/>
    <input type="text" placeholder="time" onChange={(e)=> setText(e.target.value)} />
  

   </div>
   <div>
   <button style={{margin: '10px'}} onClick={addTodo}>Add To-do </button>
   </div>
    <hr />
    {allToDo.map((todo, index) => {
           return (
               <div key={index} style={{display:"flex",justifyContent:"space-between"}}>
                   <div>
                       <h3>{todo.title}</h3>
                       <p>{todo.text}</p>
                   </div>
                   <button style={{margin:'5px'}} onClick={deleteTodo}>Delete</button>
                   <button style={{margin:'5px'}} onClick={editTodo}>Edit</button>
               </div>
           )
    })}
    </div>  

    </>
   
  );
}

export default App;

//event.target == document.getElementById("title"