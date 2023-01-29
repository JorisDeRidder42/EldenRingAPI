import { useContext } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import ThemeContext from '../Context/themeContext';

const PaginationWrapper = ({page, setPageNumber, total, count}) => {
  const {lightTheme} = useContext(ThemeContext);
  const themeClass = lightTheme === true ? 'light' : 'dark'
  const result = total/count;
  const lastPage = Math.floor(result);
  console.log('page',page)


  const pages = [];
  for(let i = page - 2; i <= page + 2; i++){
    if(i >= 0 && i <= lastPage){
      pages.push(
        <Pagination.Item key={i} onClick={() => setPageNumber(i)} active={i === page}>
          {i}
        </Pagination.Item>)
    }
  
  }
  return (
    <div className='d-flex justify-content-center'>
    <Pagination size='lg' bg={themeClass}>
      <Pagination.First onClick={() => setPageNumber(0)} />
      <Pagination.Prev onClick={() => setPageNumber(p => Math.max(0, p - 1))} />
        {page > 3 && lastPage > 3 && <Pagination.Ellipsis/>}
        {pages}
        {lastPage > 3 && page > lastPage && <Pagination.Ellipsis/>}
      <Pagination.Next onClick={() => setPageNumber(p => Math.min(lastPage, p + 1))} />
      <Pagination.Last onClick={() => setPageNumber(lastPage)}  />
    </Pagination>
    </div>
  );
}

export default PaginationWrapper;