import { useParams } from 'react-router-dom'

function BlogPost() {
  // useParams hook extracts the dynamic 'id' parameter from the URL
  const { id } = useParams()

  const posts = {
    1: {
      title: 'Getting Started with React Router',
      content: 'React Router is a powerful library for handling routing in React applications. It allows you to create dynamic, nested routes and manage navigation efficiently.'
    },
    2: {
      title: 'Advanced Routing Patterns',
      content: 'Learn about protected routes, nested routes, and dynamic routing patterns that make your React applications more secure and maintainable.'
    }
  }

  const post = posts[id] || { title: 'Post Not Found', content: 'This blog post does not exist.' }

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p style={{ marginTop: '1rem', color: '#999', fontSize: '0.875rem' }}>
        Post ID: {id}
      </p>
    </div>
  )
}

export default BlogPost
