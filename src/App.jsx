import NavBarBootstrap from './NavBarBootstrap';
import Routing from './routing';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: false
    }
  }
})


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavBarBootstrap/>
            <Routing/>
        </QueryClientProvider>
    )
}

export default App