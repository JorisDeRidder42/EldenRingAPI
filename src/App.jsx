import NavBarBootstrap from './NavBarBootstrap';
import Routing from './routing';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Container } from 'react-bootstrap';
import { Suspense, useState } from 'react';
import PageLoader from './Loader/PageLoader';
import NavbarUser from './NavbarUser';
import AuthContext, { AuthProvider } from './Context/authContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: false,
    }
  }
})

function App() {
    const user = true;
    return (
      <div className='app'>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
            <Container fluid>
              <Suspense fallback={<PageLoader/>}>
                <Container>
                  {user ? <NavbarUser/> : <NavBarBootstrap/>} 
                </Container>
                  <Routing />
              </Suspense>
              </Container>
            </QueryClientProvider>
          </AuthProvider>
        </div>
    )
}

export default App