import Pagination from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.css";
import PageDiv from "react-bootstrap/Pagination";
const PaginationComp = ({ page, totalItems, handlePageChange }) => {
  return (
    <PageDiv className="flex justify-center">
      <Pagination
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={totalItems}
        pageRangeDisplayed={10}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
        innerClass="pagination flex"
      />
    </PageDiv>
  );
};

export default PaginationComp;
