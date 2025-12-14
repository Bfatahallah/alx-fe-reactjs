function ProfileSettings() {
  return (
    <div style={{ marginTop: '1rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
      <h2>Profile Settings</h2>
      <form>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email Notifications:</label>
          <input type="checkbox" defaultChecked />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Dark Mode:</label>
          <input type="checkbox" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Language:</label>
          <select>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  )
}

export default ProfileSettings
