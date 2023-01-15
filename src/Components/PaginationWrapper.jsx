import { Container } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

const PaginationWrapper = ({page: pageNumber, setPageNumber}) => {
  console.log('page',pageNumber)


  const countUp = () => {
      setPageNumber( page => page + 1)
  }
  const countDown = () => {
    setPageNumber( page => page - 1)
  }
  const goTo0 = () => {
    setPageNumber(page => page = 0)
  }

  return (
    <div className='d-flex justify-content-center'>
    <Pagination size='lg'>
      <Pagination.First onClick={goTo0} />
      <Pagination.Prev onClick={countDown} />
      <Pagination.Item active>{pageNumber}</Pagination.Item>
      <Pagination.Next onClick={countUp}/>
      <Pagination.Last />
    </Pagination>
    </div>
  );
}

export default PaginationWrapper;