import { createContext, useContext } from 'react';

// Provide a default shape to avoid undefined access before provider mounts
const defaultUser = { name: '', email: '' };

const UserContext = createContext(defaultUser);

// Custom hook for consuming user context with safety guard
export function useUser() {
	const ctx = useContext(UserContext);
	// If someone removes the default and uses the hook outside a provider, this protects them.
	if (ctx == null) {
		throw new Error('useUser must be used within a <UserContext.Provider>');
	}
	return ctx;
}

// Export both named and default to satisfy tests and keep existing imports working
export { UserContext };
export default UserContext;
