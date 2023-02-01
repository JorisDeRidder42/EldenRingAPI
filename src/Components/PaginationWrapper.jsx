import { useContext } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ThemeContext from '../Context/themeContext';

const PaginationWrapper = ({setPage, total, count}) => {
  const {lightTheme} = useContext(ThemeContext);
  const themeClass = lightTheme === true ? 'light' : 'dark'
  const result = total/count;
  const lastPage = Math.floor(result);
  const { page }  = useParams(); // from react-router, this is the `:page` parameter defined on the route. 
  const navigate = useNavigate();
  console.log('page', page)


  const pages = [];
  for(let i = page - 2; i <= page + 2; i++){
    if(i >= 0 && i <= lastPage){
      pages.push(
        <Pagination.Item key={i} onClick={() => setPage(i)} active={i === page}>
          {i}
        </Pagination.Item>)
    }
  
  }
  return (
    <div className='d-flex justify-content-center'>
    <Pagination size='lg' bg={themeClass}>
      <Pagination.First onClick={() => setPage(0)} />
      <Pagination.Prev onClick={() => setPage(p => Math.max(0, p - 1))} />
        {page > 3 && lastPage > 3 && <Pagination.Ellipsis/>}
        {pages}
        {lastPage > 3 && page > lastPage && <Pagination.Ellipsis/>}
      <Pagination.Next onClick={() => setPage(p => Math.min(lastPage, p + 1))} />
      <Pagination.Last onClick={() => setPage(lastPage)}  />
    </Pagination>
    </div>
  );
}

export default PaginationWrapper;