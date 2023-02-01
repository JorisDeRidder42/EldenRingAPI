import { Outlet, Route, Routes } from 'react-router-dom';
import { getAllEndpoints } from './EndPoints/Endpoints';
import Data from './Pages/Data';
import Home from './Pages/Home';

const Routing = ({page,setPage}) => {
    const endpoints = getAllEndpoints();
    return (
        <Routes>
            <Route exact path={'/'} element={<Home/>}/>
                {endpoints.map(r => (
                    <Route key={r.id}>
                        <Route path={`${r.endpoint}&page=${':page'}`} element={<Outlet/>}>
                            <Route index element={<Data endpoint={r.endpoint}/>}/>
                        </Route>
                        <Route exact path={`${r.endpoint}/:id`} element={r.detail}/>
                    </Route>
                ))}
            {/* <Route path={'*'} element={<PageNotFound/>}/> */}
        </Routes>
    )
}

export default Routing;