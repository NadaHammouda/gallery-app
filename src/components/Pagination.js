import React from 'react'
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux';
import { previousPage, nextPage, changeCurrentPage } from '../features/PhotoSlice';


const StyledPagination = styled.div `
  text-align: center;
  display:flex;
  justify-content:center;
  margin-top: 5%;
  margin-bottom: 5%;`

const StyledA = styled(StyledPagination)`
  color: #024d4c;
  background-color: white;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
  margin-left: -1px;
  &:hover {
    background-color: #ddd;
    cursor: pointer;
  };
  &.active {
    background-color: #024d4c;
    color: white;}`






function Pagination() {

  const pageNumbers = [];
  const dispatch = useDispatch();
  const activePage = useSelector(state => state.currentPage);
  const photosPerPage = useSelector(state => state.photosPerPage);
  const totalPhotos = useSelector(state => state.totalPhotos)

  for(let i=1; i<=Math.ceil(totalPhotos/photosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div> {pageNumbers.length > 1?
    <StyledPagination>
      {pageNumbers.length > 1 ? <StyledA href="#" onClick={() => dispatch(previousPage())}>← Previous</StyledA> : <div></div>}
        {pageNumbers.map(number => {
          return (number === activePage?
             <StyledA key={number} href="#" className="active" onClick={() => dispatch(changeCurrentPage(number))}>{number}</StyledA>
             :<StyledA key={number} href="#" onClick={() => dispatch(changeCurrentPage(number))}>{number}</StyledA> )
        })}
      {pageNumbers.length >1 ? <StyledA href="#" onClick={() => dispatch(nextPage())} >Next →</StyledA> : <div></div>}
    </StyledPagination>
    :<div></div> }
    </div>
  )
}

export default Pagination;
