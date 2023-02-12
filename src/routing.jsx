import { Outlet, Route, Routes } from 'react-router-dom';
import WeaponDetailCard from './Details/WeaponDetailCard';
import { getAllAppData } from './Datas/AppData';
import Home from './Pages/Home';
import Data from './Pages/Data';
import { useState } from 'react';

const Routing = ({currentPage, setCurrentPage, limit, setLimit}) => {
    const allData = getAllAppData();
    return (
        <Routes>
            <Route exact path={'/'} element={<Home/>}/>
            {allData.map(r => (
                    <Route key={r.id} path={`${r.endpoint}&page=:currentPage`} element={<Outlet/>}>
                        <Route index element={<Data endpoint={r.endpoint} 
                                                    currentPage={currentPage} setCurrentPage={setCurrentPage} 
                                                    limit={limit} setLimit={setLimit}/>}/>
                        <Route path={':id'} element={r.detail}/>
                    </Route>
                ))}
            {/* <Route path={'*'} element={<PageNotFound/>}/> */}
        </Routes>
    )
}

export default Routing;