import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from '../components/TodoList'

describe('TodoList Component', () => {
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />)
    
    expect(screen.getByText('Learn React')).toBeInTheDocument()
    expect(screen.getByText('Build a todo app')).toBeInTheDocument()
    expect(screen.getByText('Master testing')).toBeInTheDocument()
  })

  test('adds a new todo', () => {
    render(<TodoList />)
    
    const input = screen.getByTestId('todo-input')
    const addButton = screen.getByTestId('add-todo-btn')
    
    fireEvent.change(input, { target: { value: 'New Todo Item' } })
    fireEvent.click(addButton)
    
    expect(screen.getByText('New Todo Item')).toBeInTheDocument()
  })

  test('toggles todo completion status', () => {
    render(<TodoList />)
    
    const todoText = screen.getByText('Learn React')
    const todoItem = todoText.closest('li')
    
    expect(todoItem).not.toHaveClass('completed')
    
    fireEvent.click(todoText)
    
    expect(todoItem).toHaveClass('completed')
    
    fireEvent.click(todoText)
    
    expect(todoItem).not.toHaveClass('completed')
  })

  test('deletes a todo', () => {
    render(<TodoList />)
    
    expect(screen.getByText('Learn React')).toBeInTheDocument()
    
    const deleteButton = screen.getByTestId('delete-btn-1')
    fireEvent.click(deleteButton)
    
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument()
  })

  test('shows empty state when no todos exist', () => {
    render(<TodoList />)
    
    // Delete all initial todos
    const deleteButtons = screen.getAllByText('Delete')
    deleteButtons.forEach(button => fireEvent.click(button))
    
    expect(screen.getByText('No todos yet. Add one to get started!')).toBeInTheDocument()
  })

  test('clears input after adding a todo', () => {
    render(<TodoList />)
    
    const input = screen.getByTestId('todo-input')
    const addButton = screen.getByTestId('add-todo-btn')
    
    fireEvent.change(input, { target: { value: 'Test Todo' } })
    fireEvent.click(addButton)
    
    expect(input.value).toBe('')
  })

  test('does not add empty todos', () => {
    render(<TodoList />)
    
    const addButton = screen.getByTestId('add-todo-btn')
    const initialTodoCount = screen.getAllByRole('listitem').length
    
    fireEvent.click(addButton)
    
    const finalTodoCount = screen.getAllByRole('listitem').length
    expect(finalTodoCount).toBe(initialTodoCount)
  })
})
