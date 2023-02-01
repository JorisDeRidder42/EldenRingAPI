import {Route, Routes, Outlet} from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound';
import Home from './Pages/Home';
import Data from './Pages/Data';
import { getAllEndpoints } from './EndPoints/Endpoints';
import { useContext } from 'react';
import PageContext from './Context/pageContext';

const Routing = () => {
    const {page, setPage} = useContext(PageContext);
    const endpoints = getAllEndpoints();
    return (
        <Routes>
            <Route exact path={'/'} element={<Home/>}/>
                {endpoints.map(r => (
                    <Route key={r.id} path={`${r.endpoint}&page=${':page'}`} element={<Outlet/>}>
                        <Route index element={<Data endpoint={r.endpoint}/>}/>
                        <Route exact path={':id'} element={r.detail}/>
                    </Route>
                ))}
            {/* <Route path={'*'} element={<PageNotFound/>}/> */}
        </Routes>
    )
}

export default Routing;