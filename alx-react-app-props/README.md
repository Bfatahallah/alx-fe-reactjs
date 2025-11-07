## ALX React Props → Context Refactor (Variant: alx-react-app-props)

This project is a fork of the primary `alx-react-app` created specifically to refactor a prop-drilling chain into the React Context API and demonstrate progressive enhancement (custom hook, safer consumption, removal of intermediate props).

### Goals
- Show the anti-pattern: deeply passing `userData` via `App -> ProfilePage -> UserInfo -> UserDetails`.
- Replace manual prop forwarding with `<UserContext.Provider>`.
- Expose a custom `useUser()` hook for ergonomic and safe access.

### Refactor Stages
1. Duplicate primary app into `alx-react-app-props`.
2. Create `UserContext.js` with `createContext`.
3. Wrap `App.jsx` children with `UserContext.Provider` supplying `{ name, email }`.
4. Update `UserDetails.jsx` to use `useContext(UserContext)`.
5. Remove `userData` prop from `ProfilePage` and `UserInfo` (no longer needed).
6. Introduce `useUser()` custom hook and default export of context.
7. Update `UserProfile.jsx` to also consume context (so tests confirm context usage across multiple components).

### Current Context Implementation
```javascript
// src/components/UserContext.js
import { createContext, useContext } from 'react';
const defaultUser = { name: '', email: '' };
const UserContext = createContext(defaultUser);
export function useUser() {
	const ctx = useContext(UserContext);
	if (ctx == null) throw new Error('useUser must be used within a <UserContext.Provider>');
	return ctx;
}
export { UserContext };
export default UserContext;
```

### Component Chain After Refactor
```
App.jsx
	└─ <UserContext.Provider value={userData}>
			 ├─ Header
			 ├─ ProfilePage
			 │    └─ UserInfo
			 │         └─ UserDetails (uses useUser())
			 ├─ MainContent
			 ├─ UserProfile (now also uses context)
			 └─ Footer
```

### Example Consumer (UserDetails)
```jsx
import { useUser } from './components/UserContext';
function UserDetails() {
	const user = useUser();
	return (
		<div>
			<p><strong>Name:</strong> {user.name}</p>
			<p><strong>Email:</strong> {user.email}</p>
		</div>
	);
}
```

### Why Context Here?
| Before (Props) | After (Context) |
|----------------|------------------|
| Intermediate components forward props they don’t use | Only real consumer reads data |
| Harder to add new nested consumers | Any descendant can call `useUser()` |
| Tedious renaming / shape changes | Centralized provider value |

### Running This Variant
```bash
cd alx-react-app-props
npm install
npm run dev
```

### Potential Next Steps
- Add `setUser` to provider for editable profile.
- Introduce optimistic profile update simulation (async).
- Add TypeScript + interface for user shape.
- Add unit tests: render `UserDetails` with a mocked provider.

### Comparison With Other Folders
| Folder | Purpose |
|--------|---------|
| `alx-react-app` | Baseline + UI restoration + inline styling demo |
| `alx-react-app-new` | Experimental playground + Counter component |
| `alx-react-app-props` | Context refactor and custom hook demo |

### Credits
Authored as part of the ALX Front-End Learning Curriculum – Context API module.
