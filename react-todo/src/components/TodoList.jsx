import { useState } from 'react'
import AddTodoForm from './AddTodoForm'

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a todo app', completed: false },
    { id: 3, text: 'Master testing', completed: false }
  ])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <AddTodoForm onAddTodo={addTodo} />
      {todos.length === 0 ? (
        <div className="empty-state">
          <p>No todos yet. Add one to get started!</p>
        </div>
      ) : (
        <ul className="todo-list">
          {todos.map(todo => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
              data-testid={`todo-item-${todo.id}`}
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                data-testid={`todo-text-${todo.id}`}
              >
                {todo.text}
              </span>
              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
                data-testid={`delete-btn-${todo.id}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList
