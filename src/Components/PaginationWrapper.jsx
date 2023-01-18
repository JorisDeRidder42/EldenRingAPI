import Pagination from 'react-bootstrap/Pagination';

const PaginationWrapper = ({page: pageNumber, setPageNumber}) => {
  console.log('page',pageNumber)


  const countUp = () => {
      setPageNumber( page => page + 1)
  }
  const countDown = () => {
    setPageNumber( page => page - 1)
  }
  const goToBegin = () => {
    setPageNumber(page => page = 0)
  }
  const goToEnd = () => {
    setPageNumber(page => page = 10)
  }

  return (
    <div className='d-flex justify-content-center'>
    <Pagination size='lg'>
      <Pagination.First onClick={goToBegin} />
      <Pagination.Prev onClick={countDown} />
      <Pagination.Item active>{pageNumber}</Pagination.Item>
      <Pagination.Next onClick={countUp}/>
      <Pagination.Last onClick={goToEnd} />
    </Pagination>
    </div>
  );
}

export default PaginationWrapper;