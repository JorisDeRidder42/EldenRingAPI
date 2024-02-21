import NavBarBootstrap from './NavBarBootstrap';
import Routing from './routing';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Container } from 'react-bootstrap';
import { Suspense, useState } from 'react';
import PageLoader from './Loader/PageLoader';
import NavbarUser from './NavbarUser';
import { useAuth } from './Context/authContext';
import LanguageContext from './Context/languageContext';
import { languages } from './i18n/languages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: false,
    }
  }
})

function App() {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
    const { authenticated } = useAuth();
    return (
      <div className='app'>
        <LanguageContext.Provider value={{selectedLanguage, setSelectedLanguage}}>
            <QueryClientProvider client={queryClient}>
              <Suspense fallback={<PageLoader/>}>
                <Container>
                  {!authenticated ? <NavbarUser/> : <NavBarBootstrap/>} 
                </Container>
                  <Routing />
              </Suspense>
            </QueryClientProvider>
            </LanguageContext.Provider>
        </div>
    )
}

export default App