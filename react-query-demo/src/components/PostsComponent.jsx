import { useQuery } from 'react-query'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

function PostsComponent() {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    'posts',
    fetchPosts,
    {
      staleTime: 60000, // Data is fresh for 1 minute
      cacheTime: 300000, // Cache for 5 minutes
      refetchOnWindowFocus: true,
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
      <div className="cache-info">
        {isFetching ? '🔄 Fetching fresh data...' : '✅ Data loaded from cache'}
      </div>
      
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
