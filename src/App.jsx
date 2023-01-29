import NavBarBootstrap from './NavBarBootstrap';
import Routing from './routing';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Container } from 'react-bootstrap';
import { Suspense, useState } from 'react';
import PageLoader from './Loader/PageLoader';
import ThemeContext from './Context/themeContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: false,
    }
  }
})

function App() {
    const [lightTheme, setLightTheme] = useState(true);
    const themeClass = lightTheme === true ? 'bg-light text-dark' : 'bg-dark text-light'

    return (
          <QueryClientProvider client={queryClient}>
          <ThemeContext.Provider value={{lightTheme, setLightTheme}}>
            <Container fluid className={`${themeClass}`}>
              <Container>
                <NavBarBootstrap/>
              </Container>
              <Suspense fallback={<PageLoader/>}>
                <Routing />
              </Suspense>
            </Container>
          </ThemeContext.Provider>
          </QueryClientProvider>
    )
}

export default App