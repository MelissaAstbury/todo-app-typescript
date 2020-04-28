import React, { useState } from "react";

import "./App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState(["nails", "hair"]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, input]);
  };

  const minusTodo = (i: number) => {
    let newTodos = todos.filter((item, index) => {
      return index !== i;
    });
    setTodos(newTodos);
  };

  const onInputChange = (event: any) => {
    setInput(event.target.value);
  };

  return (
    <div className="app">
      <div className="todos">
        {todos.map((item, index) => {
          return (
            <div key={index} className="todo-item">
              <p>
                {item}
                <span
                  onClick={() => {
                    minusTodo(index);
                  }}
                >
                  -
                </span>
                <span
                  onClick={() => {
                    minusTodo(index);
                  }}
                >
                  edit
                </span>
              </p>
            </div>
          );
        })}
        <input type="text" name="todo" value={input} onChange={onInputChange} />
        <button onClick={addTodo}>+</button>
      </div>
    </div>
  );
};

export default App;
