# ALX Front-End React.js Project

This project was created as part of the ALX Front-End Development curriculum. It demonstrates fundamental React.js concepts including component creation, props handling, and component composition.

## Project Setup

### Initial Setup
```bash
# Create the project directory
mkdir alx-fe-reactjs
cd alx-fe-reactjs

# Initialize the React project using Vite
npm create vite@latest alx-react-app -- --template react
cd alx-react-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Project Structure (Primary App)
```
alx-react-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── MainContent.jsx
│   │   ├── Footer.jsx
│   │   ├── UserProfile.jsx
│   │   └── WelcomeMessage.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
└── vite.config.js
```

## Component Development Journey (Primary `alx-react-app`)

### 1. Welcome Message Component
Created a simple welcome component to display a greeting message:
```jsx
// src/components/WelcomeMessage.jsx
function WelcomeMessage() {
    return (
        <div>
            <h1>Hello everyone, I am learning React at ALX!</h1>
            <p>This is a simple JSX component.</p>
            <p>I am learning about JSX!</p>
        </div>
    );
}
```

### 2. City-Related Components
Created three components to display information about favorite cities:

```jsx
// src/components/Header.jsx
function Header() {
    return (
        <header>
            <h1>My Favorite Cities</h1>
        </header>
    );
}

// src/components/MainContent.jsx
function MainContent() {
    return (
        <main>
            <p>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

// src/components/Footer.jsx
function Footer() {
    return (
        <footer>
            <p>© 2023 City Lovers</p>
        </footer>
    );
}
```

### 3. User Profile Component
Implemented a component that demonstrates props usage:

```jsx
// src/components/UserProfile.jsx
const UserProfile = (props) => {
    return (
        <div className="user-profile">
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};
```

### 4. App Component Integration
The main App component was updated to include all created components:

```jsx
// src/App.jsx
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <>
      <Header />
      <UserProfile 
        name="Alice Johnson"
        age="25"
        bio="Loves hiking, photography, and coding React applications!"
      />
      <MainContent />
      <Footer />
    </>
  )
}
```

## Styling Enhancements

Later in the iteration, inline styles were added to demonstrate quick component-level visual changes:

```jsx
// Example (Header.jsx)
<header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center', padding: '1rem' }}>
    <h1>My Bucket list of Favorite Cities</h1>
</header>
```

```jsx
// Example (UserProfile.jsx)
<div style={{ border: '1px solid gray', padding: '12px', margin: '12px', borderRadius: '8px', maxWidth: '360px' }}>
    <h2 style={{ color: 'blue', fontSize: '1.5rem', margin: 0 }}>{props.name}</h2>
    <p style={{ margin: '8px 0' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
    <p style={{ color: '#333', margin: 0 }}>Bio: {props.bio}</p>
</div>
```

These can later be refactored into CSS classes or CSS Modules for maintainability.

## Variant Project: `alx-react-app-new`

A secondary folder (`alx-react-app-new/`) was created to safely experiment with:

- Reapplying component construction from scratch
- Inline styling of all components (Header, MainContent, Footer, UserProfile)
- A separate README documenting its purpose

Run it independently:
```bash
cd alx-react-app-new
npm install
npm run dev
```

## Key Concepts Learned

1. **React Component Creation**
   - Functional components
   - JSX syntax
   - Component exports and imports

2. **Props Management**
   - Passing props to components
   - Accessing props within components
   - Props types and usage

3. **Component Composition**
   - Organizing components
   - Component hierarchy
   - Component reusability

4. **Project Structure**
   - Proper file organization
   - Component separation
   - Clean code practices

## Running the Application

```bash
# Navigate to the project directory
cd alx-react-app

# Install dependencies (if not done already)
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Development Tools Used

- **Vite**: Fast, modern build tool for React applications
- **Node.js**: JavaScript runtime environment
- **npm**: Package manager for Node.js
- **React**: JavaScript library for building user interfaces
- **VS Code**: Code editor with React development extensions

## Author
- Badr fatahallah

## Acknowledgments
- ALX Front-End Development Program
- React.js Documentation
- Vite Documentation