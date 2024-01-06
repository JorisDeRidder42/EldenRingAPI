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
    const { authenticated } = useAuth();
    return (
      <div className='app'>
            <QueryClientProvider client={queryClient}>
              <Suspense fallback={<PageLoader/>}>
                <Container>
                  {!authenticated ? <NavbarUser/> : <NavBarBootstrap/>} 
                </Container>
                  <Routing />
              </Suspense>
            </QueryClientProvider>
        </div>
    )
}

export default App