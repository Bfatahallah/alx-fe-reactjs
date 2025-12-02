# Recipe Sharing Platform

A modern, full-featured recipe sharing web application built with React 19, Vite, Tailwind CSS v4, and Zustand for state management. This platform allows users to browse curated recipes, add their own creations with images, and manage their recipe collection with full CRUD capabilities.

## 🚀 Features

### Core Functionality
- **Recipe Browsing**: Grid layout displaying featured recipes with hover effects and preview overlays
- **Recipe Details**: Dedicated detail pages with ingredients, preparation steps, and blurred radial backgrounds
- **Add Recipes**: Comprehensive form with validation, image upload/selection, and localStorage persistence
- **Edit Recipes**: Full editing capability for user-created recipes with prefilled forms
- **Delete Recipes**: Confirmation-protected deletion with automatic list refresh
- **Image Management**: Support for image upload (data URLs), custom URLs, and predefined selections

### UI/UX Enhancements
- **Premium Design**: Multi-layer mesh gradients with grain texture overlays
- **Glass Morphism**: Backdrop-blur effects on hero section with gradient text
- **Hover Interactions**: Scale animations, image zoom, background inversions on recipe cards
- **Modal Preview**: Full-screen image preview with Zustand global state management
- **Responsive Layout**: Mobile-first design scaling from phone to desktop
- **Dark Theme**: Premium dark color scheme with indigo/purple accents
- **Accessibility**: ARIA labels, keyboard navigation, live regions for status updates

### Advanced Features
- **Image Upload**: File input with FileReader converting images to base64 data URLs
- **Rich Validation**: 
  - Title length limits (≤80 chars)
  - Minimum ingredient/step counts (≥2 each)
  - Per-line character limits (ingredients ≤120, steps ≤200)
  - URL format validation for custom images
  - Real-time error display with touched field tracking
- **Live Preview**: Dynamic image preview showing selected/uploaded/custom images
- **User Recipe Badges**: "NEW" badges on user-created recipes with timestamp-based detection
- **Separated Sections**: User recipes displayed separately from featured collection
- **localStorage Persistence**: All user recipes saved locally with cross-tab synchronization
- **Character Counters**: Real-time line/step/character count displays

## 🛠️ Tech Stack

- **React 19**: Latest React with hooks (useState, useEffect)
- **Vite**: Fast build tool with HMR
- **Tailwind CSS v4**: Utility-first CSS with custom gradient utilities
- **React Router v6**: Client-side routing for SPA navigation
- **Zustand**: Lightweight state management for modal system
- **localStorage API**: Browser-based data persistence

## 📁 Project Structure

```
recipe-sharing-platform/
├── public/
│   └── images/          # Static recipe images
├── src/
│   ├── assets/          # App assets
│   ├── components/
│   │   ├── HomePage.jsx           # Main listing with user/featured sections
│   │   ├── RecipeCard.jsx         # Card component with hover/preview
│   │   ├── RecipeDetail.jsx       # Detail view with ingredients/steps
│   │   ├── AddRecipeForm.jsx      # Create recipe form with validation
│   │   ├── EditRecipeForm.jsx     # Edit existing user recipes
│   │   └── ImageModal.jsx         # Fullscreen image preview modal
│   ├── store/
│   │   └── imageModalStore.js     # Zustand store for modal state
│   ├── data.json         # Static recipe data (20 recipes)
│   ├── App.jsx           # Router configuration
│   ├── App.css           # Global app styles
│   ├── index.css         # Tailwind imports & base styles
│   └── main.jsx          # React root mount
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design Highlights

### Background System
- Multi-layer gradients: slate-950 → purple-950/20 → slate-900
- Radial spotlight overlay from top-right (indigo-900/30)
- SVG grain texture pattern (30% opacity)
- Fixed positioning with pointer-events-none for performance

### Typography
- Hero title: 5xl → 6xl → 7xl responsive scaling
- Text gradient: white → indigo-100 → purple-200
- Glowing drop-shadow with 40px blur (indigo hue)
- 4-second pulse animation for subtle movement
- Font-black weight (900) for maximum impact

### Card Interactions
- Background color inversion on hover (neutral-900 ↔ white)
- Text color transitions (white/gray ↔ black)
- Scale transforms (1.02 on title, -translate-y-1 on card)
- Image zoom (scale-110) with brightness reduction
- Preview overlay with fade-in animation

## 🔧 Setup & Installation

```bash
# Clone repository
git clone https://github.com/Bfatahallah/alx-fe-reactjs.git
cd alx-fe-reactjs/recipe-sharing-platform

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Data Structure

### Recipe Object
```javascript
{
  id: number,              // Timestamp for user recipes, sequential for featured
  title: string,           // Recipe name (max 80 chars)
  summary: string,         // Brief description (auto-generated from first step)
  image: string,           // Path/URL/data URL for image
  ingredients: string[],   // Array of ingredient strings (min 2, max 120 chars each)
  steps: string[]          // Array of preparation steps (min 2, max 200 chars each)
}
```

### localStorage Schema
```javascript
// Key: 'userRecipes'
// Value: JSON array of recipe objects
[
  { id: 1733155200000, title: "...", ... },
  { id: 1733155210000, title: "...", ... }
]
```

## 🎯 Key Implementation Details

### Image Handling Priority
1. **Uploaded image** (data URL from FileReader) - highest priority
2. **Custom URL** (user-provided http/https link)
3. **Selected image** (dropdown from predefined images)

### User Recipe Detection
- Uses timestamp-based ID heuristic: `id > 100000000000`
- Applies "NEW" badge styling to user recipes
- Enables Edit/Delete buttons only for user recipes

### Validation Logic
- Derived validation runs on every input change via useEffect
- Touched state prevents premature error display
- Form submission blocked when `Object.keys(errors).length > 0`
- Blur handlers mark fields as touched for progressive disclosure

### Cross-Tab Synchronization
- Storage event listener on window object
- Detects changes to 'userRecipes' key from other tabs
- Automatically refreshes recipe list on external changes

## 🚦 Routing Structure

```
/                    → HomePage (recipe grid)
/recipe/:id          → RecipeDetail (full recipe view)
/add                 → AddRecipeForm (create new recipe)
/edit/:id            → EditRecipeForm (modify existing user recipe)
```

## 🎭 State Management

### Zustand Store (imageModalStore)
```javascript
{
  isOpen: boolean,
  selectedImage: string | null,
  openModal: (image: string) => void,
  closeModal: () => void
}
```

### Component State
- **HomePage**: `allRecipes` (merged user + featured data)
- **Forms**: `title`, `ingredients`, `steps`, `imageChoice`, `customImageUrl`, `uploadedImageDataUrl`, `errors`, `touched`, `submitted`
- **EditRecipeForm**: Additional `loading`, `notFound` states

## 🔮 Future Enhancements

- Backend integration with database
- User authentication and profiles
- Recipe ratings and comments
- Search and filter functionality
- Recipe categories and tags
- Social sharing capabilities
- Print-friendly recipe view
- Nutritional information calculator
- Recipe import from URLs
- Multi-image support per recipe

## 📄 License

This project is part of the ALX Frontend Engineering curriculum.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**B.fatahallah**
- GitHub: [@Bfatahallah](https://github.com/Bfatahallah)
- Repository: [alx-fe-reactjs](https://github.com/Bfatahallah/alx-fe-reactjs)
