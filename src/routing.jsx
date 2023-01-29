import {Route, Routes, Outlet} from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound';
import Home from './Pages/Home';

import Data from './Pages/Data';
import { getAllEndpoints } from './EndPoints/Endpoints';

const Routing = () => {
    const endpoints = getAllEndpoints();
    return (
        <Routes>
            <Route exact path={'/'} element={<Home/>}/>
                {endpoints.map(r => (
                    <Route key={r.id} path={`${r.endpoint}&page=:pageParam`} element={<Outlet/>}>
                        <Route index element={<Data endpoint={r.endpoint} page={r.page}/>}/>
                        <Route path={':id'} element={r.detail}/>
                    </Route>
                ))}
            {/* <Route path={'*'} element={<PageNotFound/>}/> */}
        </Routes>
    )
}

export default Routing;