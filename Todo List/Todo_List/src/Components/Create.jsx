import React, { useState } from 'react'
import axios from 'axios';

const Create = () => {

const [task,setTask] = useState();

const handleAdd = () => {
<<<<<<< HEAD
  axios.post('http://localhost:3000/add', {task:task}).then(result => console.log(result))
=======
  axios
  .post('http://localhost:3001/add', {task:task})
  // eslint-disable-next-line no-restricted-globals
  .then(result => location.reload())
>>>>>>> 4b3c194 ('Completed')
  .catch(err => console.log(err)) 

}

  return (
    <div className='create_form'>
      <input type="text" placeholder='ente the task' onChange={(e) => {setTask(e.target.value)}}/>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
