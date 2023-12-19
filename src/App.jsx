import NavBarBootstrap from './NavBarBootstrap';
import Routing from './routing';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Container } from 'react-bootstrap';
import { Suspense, useState } from 'react';
import PageLoader from './Loader/PageLoader';
import ThemeContext from './Context/themeContext';
import NavbarUser from './NavbarUser';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: false,
    }
  }
})

function App() {
    const [lightTheme, setLightTheme] = useState(false);
    const themeClass = lightTheme === true ? 'bg-light text-dark' : 'bg-dark text-light'
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(20);
    const [search, setSearch] = useState("");
    const user = true;
    return (
      <div className='app'>
        <ThemeContext.Provider value={{lightTheme, setLightTheme}}>
            <QueryClientProvider client={queryClient}>
            <Container fluid className={`${themeClass}`}>
              <Suspense fallback={<PageLoader/>}>
                <Container>
                  {user ? <NavbarUser/> : <NavBarBootstrap/>} 
                </Container>
                  <Routing currentPage={currentPage} setCurrentPage={setCurrentPage} />
              </Suspense>
              </Container>
            </QueryClientProvider>
          </ThemeContext.Provider>
        </div>
    )
}

export default App