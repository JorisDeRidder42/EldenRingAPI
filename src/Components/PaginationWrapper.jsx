import Pagination from 'react-bootstrap/Pagination';

const PaginationWrapper = ({currentPage, setCurrentPage, lastPage}) => {
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
    <Pagination>
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