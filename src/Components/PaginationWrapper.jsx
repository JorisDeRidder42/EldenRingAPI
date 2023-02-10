import { useContext } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useNavigate } from 'react-router-dom';
import ThemeContext from '../Context/themeContext';

const PaginationWrapper = ({currentPage, setCurrentPage, lastPage}) => {
  const {lightTheme} = useContext(ThemeContext);
  const themeClass = lightTheme === true ? 'light' : 'dark'
  const navigate = useNavigate();
  const page = parseInt(currentPage);


  const pages = [];
  for(let i = page - 1; i <= page + 1; i++){
    if(i >= 0 && i <= lastPage){
      pages.push(<Pagination.Item key={i} onClick={() => setCurrentPage(i)} active={i === page}>
        {i}
      </Pagination.Item>)
    }
  }

  return (
    <div className='d-flex justify-content-center'>
    <Pagination bg={themeClass}>
      <Pagination.First onClick={() => setCurrentPage(0)} />
      <Pagination.Prev onClick={() => setCurrentPage(p => Math.max(0, p - 1))} />
        {lastPage > 3 && page > 3 && <Pagination.Ellipsis/>}
          {pages}
        {lastPage > 3 && page < lastPage - 2 && <Pagination.Ellipsis/>}
      <Pagination.Next onClick={() => setCurrentPage(p => Math.min(lastPage, p + 1))} />
      <Pagination.Last onClick={() => setCurrentPage(lastPage)} />
    </Pagination>
    </div>
  );
}

export default PaginationWrapper;