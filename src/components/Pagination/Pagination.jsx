// import { useState } from "react";
// import ReactPaginate from 'react-paginate';

export default function Pagination({ items, itemsPerPage }) {
    // const [itemOffset, setItemOffset] = useState(0);

    // const endOffset = itemOffset + itemsPerPage;
    // const currentItems = items.slice(itemOffset, endOffset);
    // const pageCount = Math.ceil(items.length / itemsPerPage);

    // const handlePageClick = (event) => {
    //   const newOffset = (event.selected * itemsPerPage) % items.length;
    //   setItemOffset(newOffset);
    // };

    return (
      <>
        {/* <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        /> */}
      </>
    );
  }