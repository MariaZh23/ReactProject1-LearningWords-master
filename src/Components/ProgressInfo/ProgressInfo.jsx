import './ProgressInfo.scss'
import { useState} from "react";

export default function ProgressInfo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value.toUpperCase());
  };

  const handleAddTodo = () => {
    setTodos([newTodo, ...todos]);
    setNewTodo('');
  };

  return (
    <div className="todo">
      <h1>To Do List</h1>
      <div>
        <input type="text" name='input' value={newTodo} onChange={handleInputChange}/>
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <div key={index} style={{ color: index === 0 ? 'red' : 'black' }}>
            {todo}
          </div>
        ))}
      </div>
    </div>
  );

}
