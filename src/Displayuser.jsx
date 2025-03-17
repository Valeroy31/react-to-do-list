import React from 'react'

const Displayuser = ({userslist}) => {
    console.log(userslist);
    
  return (
    <div>
     {userslist.map((user, index) => (
        <div key={index}>
            <p>{user.name}</p>
            <p>{user.class}</p>
        </div>
       
     ))} 
    </div>
  )
}

export default Displayuser
