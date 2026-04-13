import { Outlet, Route, Routes } from 'react-router-dom';
import { getAllAppData } from './api/AppData';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound'
import {ProtectedRoute} from './ProtectedRoute';
import { useAuth } from './Context/authContext';
import Register from './Pages/Register';
import SignIn from './Pages/SignIn';
import CategoryPage from './Pages/CategoryPage';
import BuilderPage from './features/builder/BuilderPage';
import Dashboard from './Pages/Dashboard';

const Routing = () => {
    const { authenticated } = useAuth();
    const allData = getAllAppData();
    return (
        <Routes>
            <Route exact path="/" 
             element={<ProtectedRoute authenticated={authenticated}>
              <Home />
            </ProtectedRoute>
          }
        />
            <Route path={'/signIn'} element={<SignIn/>}/>
            <Route path={'/register'} element={<Register/>}/>
              {allData.map(r => (
                    <Route key={r.id} path={`${r.endpoint}`} element={<Dashboard endpoint={r.endpoint}/>}>
                        {/* <Route index element={<Dashboard endpoint={r.endpoint} />}/> */}
                        {/* <Route path={':id'} element={r.detail}/> */}
                    </Route>
                ))}
            <Route path={'/builder'} element={<BuilderPage/>}/>

            <Route path={'*'} element={<PageNotFound/>}/>
        </Routes>
    )
}

export default Routing;