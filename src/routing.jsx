import {Route, Routes, Outlet} from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound';
import Home from './Pages/Home';
import Data from './Pages/Data';
import { getAllEndpoints } from './EndPoints/Endpoints';

const Routing = ({page, setPage}) => {
    const endpoints = getAllEndpoints();
    return (
        <Routes>
            <Route exact path={'/'} element={<Home/>}/>
                {endpoints.map(r => (
                    <Route key={r.id} exact path={`${r.endpoint}&page=${':page'}`} element={<Outlet/>}>
                        <Route index element={<Data endpoint={r.endpoint} page={page} setPage={setPage}/>}/>
                        <Route path={':id'} element={r.detail}/>
                    </Route>
                ))}
            {/* <Route path={'*'} element={<PageNotFound/>}/> */}
        </Routes>
    )
}

export default Routing;