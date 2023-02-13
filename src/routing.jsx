import { Outlet, Route, Routes } from 'react-router-dom';
import { getAllAppData } from './Datas/AppData';
import Home from './Pages/Home';
import Data from './Pages/Data';

const Routing = ({currentPage, setCurrentPage, limit, search, setSearch}) => {
    const allData = getAllAppData();
    return (
        <Routes>
            <Route exact path={'/'} element={<Home/>}/>
            {allData.map(r => (
                    <Route key={r.id} path={`${r.endpoint}&page=:currentPage`} element={<Outlet/>}>
                        <Route index element={<Data endpoint={r.endpoint} 
                                                    currentPage={currentPage} setCurrentPage={setCurrentPage} 
                                                    limit={limit} setSearch={setSearch} search={search}/>}/>
                        <Route path={':id'} element={r.detail}/>
                    </Route>
                ))}
                {/* <Route path={'/add'} element={<AddItem/>}/> */}
            {/* <Route path={'*'} element={<PageNotFound/>}/> */}
        </Routes>
    )
}

export default Routing;