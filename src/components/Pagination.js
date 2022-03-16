import Pagination from "react-js-pagination";
import PageDiv from "react-bootstrap/Pagination";
const PaginationComp = ({ page, totalItems, handlePageChange }) => {
  return (
    <PageDiv className="flex justify-center text-lime-500 text-2xl">
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
        innerClass="flex"
      />
    </PageDiv>
  );
};

export default PaginationComp;
