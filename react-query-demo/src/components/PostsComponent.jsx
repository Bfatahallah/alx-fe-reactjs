import { useQuery } from 'react-query'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

function PostsComponent() {
  // Using React Query's useQuery hook to fetch and cache data
  // The query will be cached and reused on subsequent renders
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    'posts',
    fetchPosts,
    {
      staleTime: 60000, // Data is fresh for 1 minute - demonstrates caching
      cacheTime: 300000, // Cache persists for 5 minutes after component unmount
      refetchOnWindowFocus: true, // Refetch when window regains focus
    }
  )

  if (isLoading) {
    return <div className="loading">Loading posts...</div>
  }

  if (isError) {
    return <div className="error">Error: {error.message}</div>
  }

  return (
    <div>
      {/* Cache status indicator - shows when data is fetched vs cached */}
      <div className="cache-info">
        {isFetching ? '🔄 Fetching fresh data...' : '✅ Data loaded from cache'}
      </div>
      
      {/* Button to manually trigger refetch - demonstrates refetch interaction */}
      <div className="controls">
        <button onClick={() => refetch()} disabled={isFetching}>
          Refetch Posts
        </button>
      </div>

      <div className="posts-list">
        {data.slice(0, 10).map(post => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostsComponent
