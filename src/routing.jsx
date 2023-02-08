import { Outlet, Route, Routes } from 'react-router-dom';
import WeaponDetailCard from './Details/WeaponDetailCard';
import { getAllAppData } from './Datas/AppData';
import Data from './Pages/Data';
import Home from './Pages/Home';

const Routing = ({setCurrentPage, currentPage}) => {
    const allData = getAllAppData();
    return (
        <Routes>
            <Route exact path={'/'} element={<Home/>}/>
            {allData.map(r => (
                    <Route key={r.id} path={`${r.endpoint}&page=:currentPage`} element={<Data endpoint={r.endpoint} setCurrentPage={setCurrentPage}/>}/>
                ))}
            {/* <Route path={'*'} element={<PageNotFound/>}/> */}
        </Routes>
    )
}

export default Routing;