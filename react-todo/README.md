# React Todo App

A fully functional Todo List application built with React, featuring comprehensive test coverage using Jest and React Testing Library.

## Project Overview

This project demonstrates building a production-ready React component with full CRUD operations and professional testing practices. The Todo app allows users to add, toggle completion status, and delete todo items.

## Features

### Todo Management
- ✅ **Add Todos**: Create new todo items with text input
- ✅ **Toggle Completion**: Click todos to mark as complete/incomplete
- ✅ **Delete Todos**: Remove individual todo items
- ✅ **Empty State**: Friendly message when no todos exist
- ✅ **Input Validation**: Prevents adding empty todos

### Visual Feedback
- Color-coded completion status (green for completed)
- Strike-through text for completed items
- Hover effects and animations
- Smooth transitions
- Gradient background design

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite 5**: Fast build tool and dev server
- **Jest 29**: JavaScript testing framework
- **React Testing Library**: Component testing utilities
- **Babel**: JavaScript transpilation for tests

## Installation

```powershell
cd react-todo
npm install
```

## Running the Application

```powershell
npm run dev
```

The app will start on `http://localhost:5173`

## Running Tests

```powershell
npm test
```

This will run all tests in the `__tests__` directory using Jest.

## Project Structure

```
react-todo/
├── src/
│   ├── components/
│   │   ├── TodoList.jsx             # Main todo component
│   │   └── AddTodoForm.jsx          # Form for adding todos
│   ├── __tests__/
│   │   └── TodoList.test.js         # Comprehensive test suite
│   ├── App.jsx                       # Root component
│   ├── main.jsx                      # Entry point
│   ├── setupTests.js                 # Test configuration
│   └── index.css                     # Styles
├── jest.config.js                    # Jest configuration
├── .babelrc                          # Babel configuration
├── index.html
├── package.json
└── vite.config.js
```

## Component Architecture

### TodoList Component
**State Management:**
```javascript
const [todos, setTodos] = useState([
  { id: 1, text: 'Learn React', completed: false },
  // ...initial todos
])
```

**Operations:**
- `addTodo(text)` - Adds new todo with unique ID
- `toggleTodo(id)` - Toggles completion status
- `deleteTodo(id)` - Removes todo from list

### AddTodoForm Component
**Props:**
- `onAddTodo` - Callback function to add todo

**Features:**
- Controlled input with `useState`
- Form submission handling
- Input clearing after submission
- Empty input prevention

## Test Coverage

The test suite includes 7 comprehensive tests:

### 1. Initial Render Test
```javascript
test('renders TodoList component with initial todos')
```
Verifies initial todos are displayed correctly.

### 2. Add Todo Test
```javascript
test('adds a new todo')
```
Tests adding new todo items via form submission.

### 3. Toggle Completion Test
```javascript
test('toggles todo completion status')
```
Validates clicking todos toggles completed state and styling.

### 4. Delete Todo Test
```javascript
test('deletes a todo')
```
Ensures todos can be removed from the list.

### 5. Empty State Test
```javascript
test('shows empty state when no todos exist')
```
Confirms empty state message displays when all todos deleted.

### 6. Input Clear Test
```javascript
test('clears input after adding a todo')
```
Verifies input field resets after successful submission.

### 7. Validation Test
```javascript
test('does not add empty todos')
```
Ensures empty/whitespace-only todos cannot be added.

## Testing Best Practices Demonstrated

✅ **Comprehensive Coverage**: All CRUD operations tested  
✅ **User-Centric Tests**: Testing behavior, not implementation  
✅ **Data Test IDs**: Using `data-testid` for reliable selectors  
✅ **Accessibility**: Testing with screen queries  
✅ **Edge Cases**: Empty states and validation scenarios  

## Jest Configuration

```javascript
// jest.config.js
{
  testEnvironment: 'jsdom',
  transform: { '^.+\\.jsx?$': 'babel-jest' },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testMatch: ['**/__tests__/**/*.test.js?(x)']
}
```

## Styling Highlights

- **Gradient Background**: Purple-blue gradient
- **Card Design**: White container with shadow
- **Interactive Elements**: Hover effects and transforms
- **Status Colors**: Green for completed, gray for pending
- **Responsive Design**: Works on all screen sizes

## Usage

1. Type a todo in the input field
2. Click "Add" or press Enter to create
3. Click on todo text to toggle completion
4. Click "Delete" button to remove todo
5. Delete all todos to see empty state

## Building for Production

```powershell
npm run build
```

Built files will be in the `dist/` directory.

## Further Enhancements

- [ ] Add todo editing functionality
- [ ] Implement local storage persistence
- [ ] Add due dates and priorities
- [ ] Filter by status (all/active/completed)
- [ ] Add categories or tags
- [ ] Implement drag-and-drop reordering
- [ ] Add search functionality
- [ ] Export/import todo lists

## Learning Objectives Achieved

✅ Component composition and props  
✅ State management with hooks  
✅ Event handling and forms  
✅ Conditional rendering  
✅ List rendering with keys  
✅ Testing React components  
✅ Test-driven development practices  

## License

Part of the ALX Front-End React curriculum.
