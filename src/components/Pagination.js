import Pagination from "react-js-pagination";
const PaginationComp = ({page, totalItems, handlePageChange}) => {
return(
      <Pagination
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={totalItems}
        pageRangeDisplayed={10}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />)
}

export default PaginationComp;