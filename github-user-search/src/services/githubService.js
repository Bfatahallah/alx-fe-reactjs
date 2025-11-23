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
  
  // https://api.github.com/search/users?q
  const response = await githubClient.get('/search/users', {
    params: { q: query.trim(), per_page: 30 }
  })
  
  // Enrich results with additional user data
  const users = response.data.items || []
  
  console.log('Search API returned users:', users.length)
  
  // Optionally fetch detailed info for each user (be mindful of rate limits)
  const enrichedUsers = await Promise.all(
    users.slice(0, 30).map(async (user) => {
      try {
        const detailedData = await githubClient.get(`/users/${user.login}`)
        console.log(`Fetched details for ${user.login}:`, detailedData.data.public_repos, 'repos')
        return {
          id: user.id,
          login: user.login,
          avatar_url: user.avatar_url,
          html_url: user.html_url,
          location: detailedData.data.location,
          public_repos: detailedData.data.public_repos,
          followers: detailedData.data.followers,
          following: detailedData.data.following,
          bio: detailedData.data.bio
        }
      } catch (err) {
        console.error(`Failed to fetch details for ${user.login}:`, err.message)
        // Return basic data with fallback values
        return {
          id: user.id,
          login: user.login,
          avatar_url: user.avatar_url,
          html_url: user.html_url,
          location: null,
          public_repos: 0,
          followers: 0,
          following: 0,
          bio: null
        }
      }
    })
  )
  
  console.log('Enriched users:', enrichedUsers)
  return enrichedUsers
}

/**
 * Fetch repositories for a given user sorted by updated date desc
 * @param {string} username - GitHub username
 * @returns {Promise<Array>} Array of repo objects (name, html_url, description, updated_at)
 */
export async function fetchUserRepos(username) {
  if (!username) return []
  try {
    const response = await githubClient.get(`/users/${username}/repos`, {
      params: {
        sort: 'updated',
        direction: 'desc',
        per_page: 100
      }
    })
    return (response.data || []).map(r => ({
      id: r.id,
      name: r.name,
      html_url: r.html_url,
      description: r.description,
      updated_at: r.updated_at
    }))
  } catch (err) {
    console.error('Failed to fetch repos for', username, err.message)
    return []
  }
}
