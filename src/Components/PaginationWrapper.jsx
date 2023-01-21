import Pagination from 'react-bootstrap/Pagination';

const PaginationWrapper = ({page: pageNumber, setPageNumber}) => {
  console.log('pageNumber',pageNumber)


  const countUp = () => {
    setPageNumber( x => x + 1)
  }
  const countDown = () => {
    setPageNumber( x => x - 1)
  }
  const goToBegin = () => {
    setPageNumber(x => x = 0)
  }
  const goToEnd = () => {
    setPageNumber(x => x = 10)
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