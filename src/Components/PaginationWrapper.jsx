import Pagination from 'react-bootstrap/Pagination';

const PaginationWrapper = ({pageNumber: currentPage, nbPages}) => {

  const pageButtons = [];
  for(let i = currentPage - 2; i <= currentPage + 2; i++){
    if(i >= 1 && i <= nbPages){
      pageButtons.push(<Pagination.Item key={i}>{i}</Pagination.Item>)
    }
  }

  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      {currentPage > 3 && nbPages > 3 && <Pagination.Ellipsis />}
      {pageButtons}

      {nbPages > 3 && currentPage < nbPages	- 2 && <Pagination.Ellipsis />}

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default PaginationWrapper;