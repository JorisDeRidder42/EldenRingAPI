import {Outlet, Route, Routes} from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound';
import { getAllEndpoints } from './Endpoint/Endpoint';

const endpoints = getAllEndpoints();

const Routing = () => {
    return (
        <Routes>
            {endpoints.map(e => <Route path={e.endpoint} element={e.element} key={e.id} {...e} />)}
            <Route path={'*'} element={<PageNotFound/>}/>
        </Routes>
    )
}

export default Routing;