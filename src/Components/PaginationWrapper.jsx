import Pagination from 'react-bootstrap/Pagination';

const PaginationWrapper = ({page: pageNumber, setPageNumber, cardsData}) => {
  const lastPage = cardsData.length !== 20;
  console.log('l',lastPage)


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
    <Pagination size='lg'>
      <Pagination.First onClick={goToBegin} />
      <Pagination.Prev onClick={countDown} />
      <Pagination.Item active>{pageNumber }</Pagination.Item>
      <Pagination.Next onClick={countUp} disabled={lastPage}/>
      <Pagination.Last onClick={goToEnd} disabled={lastPage} />
    </Pagination>
    </div>
  );
}

export default PaginationWrapper;