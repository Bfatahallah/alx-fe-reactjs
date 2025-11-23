import axios from 'axios'

// Base GitHub API instance. Auth header only added if token env var is set.
const token = import.meta.env.VITE_GITHUB_TOKEN || ''

export const githubClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: token ? { Authorization: `Bearer ${token}` } : {}
})

// Search users by username (basic implementation). Returns simplified list.
export async function searchUsers(query) {
  if (!query) return []
  const response = await githubClient.get('/search/users', { params: { q: query, per_page: 20 } })
  return response.data.items.map(u => ({
    id: u.id,
    login: u.login,
    avatar_url: u.avatar_url,
    html_url: u.html_url
  }))
}

// Fetch single user detail
export async function fetchUser(login) {
  if (!login) return null
  const { data } = await githubClient.get(`/users/${login}`)
  return data
}
