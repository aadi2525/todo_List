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
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No Records found</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div>
            { todo.task }
          </div>
          ))
      )}
    </div>
  );
}

export default App;
