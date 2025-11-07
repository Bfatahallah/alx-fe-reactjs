import { createContext, useContext } from 'react';

// Provide a default shape to avoid undefined access before provider mounts
const defaultUser = { name: '', email: '' };

export const UserContext = createContext(defaultUser);

// Custom hook for consuming user context with safety guard
export function useUser() {
	const ctx = useContext(UserContext);
	if (!ctx) {
		throw new Error('useUser must be used within a <UserContext.Provider>');
	}
	return ctx;
}
