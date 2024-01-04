import { Outlet, Route, Routes } from 'react-router-dom';
import { getAllAppData } from './Datas/AppData';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import PageNotFound from './Pages/PageNotFound'
import {ProtectedRoute} from './ProtectedRoute';
import { useAuth } from './Context/authContext';
import Register from './Pages/Register';
import SignIn from './Pages/SignIn';

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
            <Route path={'*'} element={<PageNotFound/>}/>
            {/* {allData.map(r => (
                    <Route key={r.id} path={`${r.endpoint}`} element={<Outlet/>}>
                        <Route index element={<Data endpoint={r.endpoint} />}/>
                        <Route path={':id'} element={r.detail}/>
                    </Route>
                ))} */}
                {/* <Route path={'/add'} element={<AddItem/>}/> */}
        </Routes>
    )
}

export default Routing;