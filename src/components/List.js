import React from 'react'

function List({ todoData, setTodoData }) {
    

    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
      };

    const handCompleteChange = (id) => {
        let newTodoData = todoData.map((data) => {
          if(data.id === id){
           data.completed = !data.completed; 
          }
          return data;
        })
  
        setTodoData(newTodoData);
      };

    const getStyle = (completed) => {
        return {
          padding: "10px",
          borderBottom: "1px #ccc dotted",
          textDecoration: completed ? "line-through": "none",
        };
      };
    
      // filter 메소드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환하다
      const handleClick = (id) => {
        let newTodoData = todoData.filter(data => data.id !== id)
        console.log('newTodoData', newTodoData);
        setTodoData(newTodoData);
      };

    return(
        <div>
             {todoData.map((data) => (
        <div style={getStyle(data.completed)} key={data.id}>
          <input 
            type="checkbox" 
            defaultChecked={false} 
            onChange={() => handCompleteChange(data.id)} 
            />
          {data.title}
          <button 
            style={btnStyle} 
            onClick={() => handleClick(data.id)}
            >x
          </button>
        </div>
        ))}
        </div>
    )
}

export default List 