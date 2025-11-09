# My Company Website (React + Vite)

A simple four-page company website showcasing routing, inline styling, and basic interactivity (contact form) built with React Router.

## Pages
- Home: Welcome message
- About: Company information
- Services: List of services
- Contact: Contact form with state handling

## Quick Start
```bash
cd my-company
npm install
npm run dev
```
Then open the printed local URL (default: http://localhost:5173).

## Tech
- React 18
- React Router DOM 6
- Vite build tool

## Structure
```
my-company/
  index.html
  package.json
  vite.config.js
  src/
    main.jsx
    App.jsx
    index.css
    components/
      Navbar.jsx
      Footer.jsx
      Home.jsx
      About.jsx
      Services.jsx
      Contact.jsx
```

## Notes
- All styling is inline for learning purposes; you can refactor to CSS Modules or styled-components later.
- The contact form stores state locally and shows a confirmation message without sending data to a server.
