# Form Handling in React

A React application demonstrating two approaches to form handling: controlled components with React hooks and advanced form management using Formik.

## Project Overview

This project showcases user registration forms built with:
- **Controlled Components**: Manual state management using `useState`
- **Formik Integration**: Advanced form handling with Formik and Yup validation

## Features

### RegistrationForm (Controlled Components)
- Manual form state management with `useState`
- Custom validation logic
- Fields: username, email, password
- Real-time error display
- Form reset after submission

### FormikForm (Formik Integration)
- Formik's built-in state management
- Yup schema validation
- Declarative form structure using `Field` and `ErrorMessage`
- Automatic form reset
- Enhanced validation rules (email format, password length)

## Tech Stack

- React 18
- Vite 5
- Formik 2.4
- Yup (via Formik)

## Installation

```powershell
cd form-handling-react
npm install
```

## Running the Application

```powershell
npm run dev
```

The app will start on `http://localhost:5173`

## Project Structure

```
form-handling-react/
├── src/
│   ├── components/
│   │   ├── RegistrationForm.jsx    # Controlled component form
│   │   └── formikForm.js            # Formik-based form
│   ├── App.jsx                       # Main component
│   ├── main.jsx                      # Entry point
│   └── index.css                     # Styles
├── index.html
├── package.json
└── vite.config.js
```

## Form Validation Rules

### Controlled Components
- All fields are required
- Empty field validation on submit

### Formik Form
- **Username**: Required
- **Email**: Required, must be valid email format
- **Password**: Required, minimum 6 characters

## Usage

1. Fill out the registration form fields
2. Submit to see validation in action
3. Both forms show validation errors below each field
4. Successful submission displays an alert and resets the form

## Key Learning Points

- Managing form state with controlled components
- Implementing custom validation logic
- Using Formik for complex form handling
- Schema validation with Yup
- Form submission handling
- User experience with real-time validation feedback

## Building for Production

```powershell
npm run build
```

Built files will be in the `dist/` directory.

## License

Part of the ALX Front-End React curriculum.
