import React from "react";
import "../App.css";
import Cats from "../hooks/fetchCat"
import Cat from "./Cat"
import ReactPaginate from "react-paginate";
import { useState } from 'react';

const CatScreen = () => {
  const catsData = Cats();
//from stackoverflow, just learned about math.ceil
  const [pageNumber, setPageNumber] = useState(0);
  const catsNumber = 8;
  const pagesVisited = pageNumber * catsNumber;
  const pageCount = Math.ceil(catsData.length / catsNumber);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>

      <div className='display-cat'>
        {catsData.slice(pagesVisited, pagesVisited + catsNumber).map((cat) => (
          <Cat cat={cat} key={Math.random()} />
        ))}
      </div>

      <div>
        <ReactPaginate
          previousLabel={"< Praecedens"}
          nextLabel={"Sequentia >"}
          breakLabel={"-"}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          onPageChange={changePage}
          containerClassName={"pagination"}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"page-link-end"}
          nextLinkClassName={"page-link-end"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  )

}
export default CatScreen;