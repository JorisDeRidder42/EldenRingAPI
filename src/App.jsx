import NavBarBootstrap from './NavBarBootstrap';
import Routing from './routing';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Container } from 'react-bootstrap';
import { Suspense, useState } from 'react';
import PageLoader from './Loader/PageLoader';
import NavbarUser from './NavbarUser';
import { useAuth } from './Context/authContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: false,
    }
  }
})

function App() {
    const { currentUser } = useAuth();
    return (
      <div className='app'>
            <QueryClientProvider client={queryClient}>
            <Container>
              <Suspense fallback={<PageLoader/>}>
                <Container>
                  {currentUser ? <NavbarUser/> : <NavBarBootstrap/>} 
                </Container>
                  <Routing />
              </Suspense>
              </Container>
            </QueryClientProvider>
        </div>
    )
}

export default App