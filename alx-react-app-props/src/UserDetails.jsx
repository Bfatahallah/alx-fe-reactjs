import { useContext } from 'react';
import { UserContext } from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);
  if (!userData) return <p>No user data available.</p>;
  return (
    <div style={{ border: '1px solid #ddd', padding: '12px', borderRadius: '8px', maxWidth: 400 }}>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;
