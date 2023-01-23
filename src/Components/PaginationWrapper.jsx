import { useContext } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import ThemeContext from '../Context/themeContext';

const PaginationWrapper = ({page: pageNumber, setPageNumber, total, count}) => {
  const {lightTheme} = useContext(ThemeContext);
  const themeClass = lightTheme === true ? 'light' : 'dark'
  console.log(pageNumber)
  console.log(total)
  const result = total/count;

  const lastPage = Math.floor(result);
  console.log('lastpage',lastPage);


  const countUp = () => {
    if(!lastPage){
      setPageNumber( x => x + 1)
    }

  }

  const countDown = () => {
    if(pageNumber > 0){
      setPageNumber( x => x - 1)
    }
  }
  const goToBegin = () => {
    setPageNumber(x => x = 0)
  }
  const goToEnd = () => {
    setPageNumber(x => x = lastPage)  
  }

  return (
    <div className='d-flex justify-content-center'>
    <Pagination size='lg' bg={themeClass}>
      <Pagination.First onClick={goToBegin} />
      <Pagination.Prev onClick={countDown} />
      <Pagination.Item active>{pageNumber }</Pagination.Item>
      <Pagination.Next onClick={countUp} />
      <Pagination.Last onClick={goToEnd} />
    </Pagination>
    </div>
  );
}

export default PaginationWrapper;