import {Route, Routes, Outlet} from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound';
import Home from './Pages/Home';
import WeaponDetailCard from './Details/WeaponDetailCard';
import BossesDetailCard from './Details/BossesDetailCard';
import { Suspense } from 'react';
import PageLoader from './Loader/PageLoader';

import Data from './Pages/Data';
import { getAllEndpoints } from './EndPoints/Endpoints';

const Routing = () => {
    const endpoints = getAllEndpoints();
    return (
        <Routes>
            <Route exact path={'/'} element={<Home/>}/>
                {endpoints.map(r => (
                    <Route key={r.id} path={r.endpoint} element={<Outlet/>}>
                        <Route index element={<Data endpoint={r.endpoint} page={r.page}/>}/>
                        <Route path={':id'} element={r.detail}/>
                    </Route>
                ))}
            <Route path={'*'} element={<PageNotFound/>}/>
        </Routes>
    )
}

export default Routing;