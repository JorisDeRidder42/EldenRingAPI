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
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(20);
    const [search, setSearch] = useState("");

    return (
      <ThemeContext.Provider value={{lightTheme, setLightTheme}}>
            <QueryClientProvider client={queryClient}>
            <Container fluid className={`${themeClass}`}>
              <Container>
                <NavBarBootstrap currentPage={currentPage} limit={limit} setLimit={setLimit} search={search}/>
              </Container>
              <Suspense fallback={<PageLoader/>}>
                <Routing currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit} 
                          search={search} setSearch={setSearch} />
              </Suspense>
              </Container>
            </QueryClientProvider>
          </ThemeContext.Provider>
    )
}

export default App