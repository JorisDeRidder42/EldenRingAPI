import { useContext } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import ThemeContext from '../Context/themeContext';

const PaginationWrapper = ({page: pageNumber, setPageNumber, total, count}) => {
  const {lightTheme} = useContext(ThemeContext);
  const themeClass = lightTheme === true ? 'light' : 'dark'
  const result = total/count;
  const lastPage = Math.floor(result);


  const pages = [];
  for(let i = pageNumber - 2; i <= pageNumber + 2; i++){
    if(i >= 0 && i <= lastPage){
      pages.push(
        <Pagination.Item key={i} onClick={() => setPageNumber(i)} active={i === pageNumber}>
          {i}
        </Pagination.Item>)
    }
  
  }
  return (
    <div className='d-flex justify-content-center'>
    <Pagination size='lg' bg={themeClass}>
      <Pagination.First onClick={() => setPageNumber(0)} />
      <Pagination.Prev onClick={() => setPageNumber(p => Math.max(0, p - 1))} />
        {pageNumber > 3 && lastPage > 3 && <Pagination.Ellipsis/>}
        {pages}
        {lastPage > 3 && pageNumber > lastPage && <Pagination.Ellipsis/>}
      <Pagination.Next onClick={() => setPageNumber(p => Math.min(lastPage, p + 1))} />
      <Pagination.Last onClick={() => setPageNumber(lastPage)}  />
    </Pagination>
    </div>
  );
}

export default PaginationWrapper;