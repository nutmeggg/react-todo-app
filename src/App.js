import React, { useState } from 'react';
import './App.css';
import List from "./components/List";
import Form from "./components/Form";


function App() {

  const [todoData, setTodoData ] = useState([]);
  const [value, setValue] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();

    //새로운 할 일 데이터
    if (value.trim() !== ""){
    let newTodo = {
      id: Date.now().toString(),
      title: value,
      completed: false
    }

    //
    setTodoData([...todoData, newTodo]);
    setValue("");
    }
  };

    

    return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData} /> 
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}

export default App;
