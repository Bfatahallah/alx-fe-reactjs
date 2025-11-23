import axios from 'axios'

const BASE_URL = 'https://api.github.com'
const token = import.meta.env.VITE_GITHUB_TOKEN || ''

// Create axios instance with optional auth
const githubClient = axios.create({
  baseURL: BASE_URL,
  headers: token ? { Authorization: `Bearer ${token}` } : {}
})

/**
 * Fetch user data by username
 * @param {string} username - GitHub username to fetch
 * @returns {Promise<Object>} User data from GitHub API
 */
export async function fetchUserData(username) {
  if (!username) {
    throw new Error('Username is required')
  }
  
  const response = await githubClient.get(`/users/${username}`)
  return response.data
}

/**
 * Search users with advanced criteria
 * @param {Object} criteria - Search criteria (username, location, minRepos)
 * @returns {Promise<Array>} Array of users matching criteria
 */
export async function searchUsers(criteria) {
  const { username = '', location = '', minRepos = 0 } = criteria
  
  // Build query string
  let query = username || ''
  if (location) query += ` location:${location}`
  if (minRepos > 0) query += ` repos:>=${minRepos}`
  
  if (!query.trim()) {
    return []
  }
  
  const response = await githubClient.get('/search/users', {
    params: { q: query.trim(), per_page: 30 }
  })
  
  return response.data.items || []
}
