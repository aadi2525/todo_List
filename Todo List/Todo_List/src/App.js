<<<<<<< HEAD
import Home from "./Components/Home";
import "./App.css";
import Create from "./Components/Create";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(()=> {
    axios.get('http://127.0.0.1:3001/get').then(result=> setTodos(result.data))
    .catch(err=>console.log(err))
  })
  return (
    <div className="app">    
      <Home />
=======
import "./App.css";
import Create from "./Components/Create";
import { useEffect, useState } from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import axios from "axios";
import CheckBoxOutlineBlankTwoToneIcon from "@mui/icons-material/CheckBoxOutlineBlankTwoTone";
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleCheck = (id) => {
    axios
      .put("http://localhost:3001/update/"+id)
      .then(result => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
      
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/"+id)
      .then((result) => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
      }
      )
      .catch((err) => console.log(err));
  };



  return (
    <div className="app">
      <h1>ToDo List</h1>
>>>>>>> 4b3c194 ('Completed')
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No Records found</h2>
        </div>
      ) : (
        todos.map((todo) => (
<<<<<<< HEAD
          <div>
            { todo.task }
          </div>
          ))
=======
          <div className="task" key={todo._id}>
            <div className="checkBox" onClick={() => handleCheck(todo._id)}>
              {todo.Done === true ? (
                <CheckBoxRoundedIcon className="icon"/>
              ) : (
                < CheckBoxOutlineBlankTwoToneIcon className="icon" />
              )}
              <p className={todo.Done ? "line_through" : " "}> {todo.task}</p>
              <DeleteRoundedIcon  onClick={() => handleDelete(todo._id)}/>
            </div>
          </div>
        ))
>>>>>>> 4b3c194 ('Completed')
      )}
    </div>
  );
}

export default App;
