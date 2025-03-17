import React, {useState} from 'react'
import MyButton from './MyButton'
import Adduser from './Adduser'
import Displayuser from './Displayuser'


//props are reusable elements i.e. html elements and components



const props = () => {
  const  [users, setusers] = useState({
    name: "",
    class: ""
  })
  
  const [userslist, setUserslist] = useState([])
  
  const register = ()=>{
    alert('registered successfully')
  }
  
  
  const Addussrs = ()=>{
    setUserslist([...userslist, users])
  }
  
  return (
    <div>
     
      <MyButton text='sign up' event = {register} styl = "btn btn-success"/>

      <Adduser setusers ={setusers} users={users} adduser={Addussrs} />

      <Displayuser userslist = {userslist} />
    </div>
  )
}

export default props
