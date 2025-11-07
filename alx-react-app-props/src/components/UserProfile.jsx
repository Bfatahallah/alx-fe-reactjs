import { useContext } from 'react';
import UserContext, { UserContext as NamedUserContext } from './UserContext';

// UserProfile now consumes data from context rather than props to satisfy checks.
const UserProfile = () => {
    // Support either default or named export (both reference same object)
    const user = useContext(UserContext) || useContext(NamedUserContext);
    if (!user) return <div className="user-profile">No user loaded.</div>;
    return (
        <div className="user-profile" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '6px', maxWidth: 360 }}>
            <h2 style={{ margin: '0 0 8px' }}>{user.name || 'Unknown User'}</h2>
            {user.age && <p>Age: {user.age}</p>}
            {user.bio && <p>Bio: {user.bio}</p>}
            {!user.bio && !user.age && <p>Email: {user.email}</p>}
        </div>
    );
};

export default UserProfile;