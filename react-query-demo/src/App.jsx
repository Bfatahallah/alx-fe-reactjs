import { QueryClient, QueryClientProvider } from 'react-query'
import PostsComponent from './components/PostsComponent'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h1>React Query Demo - Posts</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  )
}

export default App
