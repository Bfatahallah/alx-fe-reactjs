const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px auto', borderRadius: '8px', maxWidth: '360px' }}>
            <h2 style={{ color: 'blue', fontSize: '1.5rem', margin: 0 }}>{props.name}</h2>
            <p style={{ margin: '8px 0' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
            <p style={{ color: '#333', margin: 0 }}>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;