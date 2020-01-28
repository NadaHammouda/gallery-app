import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchCategories, searchCategory } from '../features/CategorySlice'

const StyledDiv = styled.div`
  width: 90%;
  max-width: 1070px;
  margin: 15px auto 10px;
  margin-top: 5%;

  @media screen and (max-width: 767px){
    argin-top: 0px;
    width: 97%;}`

const StyledDiv1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;`

const StyledFind = styled.div`
  border: solid 2px #000;
  width: 49%;
  height: 43px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 767px){
    padding -top: 3px}`


const StyledForm = styled.form`
  height: 43px;
  width: 49%;
  position: relative;`


const StyledA = styled.h5`
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 4.1px;
  text-transform: uppercaser;
  margin-top: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px){
    font-size: 9px !important;
    letter-spacing: 1px !important;
    font-weight: normal;
    margin-top: 15px;}`;

const StyledInput = styled.input`
  width: 97%;
  padding: 5px;
  border: solid 2px #000;
  height: 80%;
  display: flex;
  text-align: center;
  font-weight: bold;
  letter-spacing: 6.1px;
  color: black;
  opacity: 1;
  @media screen and (max-width: 767px){
    font-size: 9px !important;
    letter-spacing: 1px !important;}`



const DropDownLi = styled.a`
  padding: 30px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  border-top: 1px solid black;
  font-weight: bold;
  cursor: pointer;
  color: white;
  @media screen and (max-width: 600px){
    font-size: 9px}`

const StyledA1 = styled.a`
  text-decoration:none;
  color: black;
  font-size: 20px;
  margin-bottom: 10px`

const StyledA2 = styled.h5`
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 4.1px;
  text-transform: uppercaser;
  margin-top: 60px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px){
    font-weight: normal;}`;


export default function Category() {

  const [active, setActive] = useState(false);
  const [found, setFound] = useState(false);

  const DropDownContent = styled.div`
    position: relative;
    height: 80px;
    display: ${active ? 'flex': 'none'};
    justify-content: center;
    margin-top: 10px;
    background-color: #000;
    color: #fff;
    width: 100%`

  const SearchContet = styled.div`
    display: ${found ? 'flex' : 'none'};
    flex-direction: column;
    margin-top: 20px;
    justify-content: space-between;
    margin-left: 10px;
    `
  const StyledAll = styled.a`
    display: ${found ? 'none': 'flex'};
    border: solid 2px #000;
    width: 30%;
    height: 150px;
    justify-content: center;
    cursor: pointer;
    margin-top: 10px;
    text-decoration:none;
    color: black;
    @media screen and (max-width: 767px){
      padding -top: 3px;
      width: 100%}`

  const dispatch = useDispatch();
  const categories = useSelector(state => state.Category.categories);
  const [searchTerm, setSearchTerm] = useState("");

  const searchResult = useSelector(state => state.Category.searchCategory);

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const search = e => {
    e.preventDefault();
    dispatch(searchCategory(searchTerm))
    setFound(true)
  }

  useEffect(() => {
    dispatch(fetchCategories());
    },[])

  return (
    <StyledDiv>
      <StyledDiv1>
        <StyledFind onClick={()=> setActive(!active)}>
          <StyledA>FIND CATEGORIES HERE</StyledA>
        </StyledFind>
        <StyledForm onSubmit={search}>
          <StyledInput type="text" placeholder="SEARCH" value={searchTerm} onChange={handleChange} />
        </StyledForm>
        <DropDownContent>
          {categories.length > 0  ? categories.map(category => {
            return <DropDownLi key={category} href={`/category/${category}`}>{category}</DropDownLi>
          })
           :<DropDownContent>No Categories</DropDownContent>}
          </DropDownContent>
      </StyledDiv1>
      <SearchContet>
          {searchResult.length > 0  ? searchResult.map(category => {
            return <StyledA1 key={category} href={`/category/${category}`}>{category}</StyledA1>
          })
           :<h1>No Results Found</h1>}
      </SearchContet>
      <StyledAll href="/"><StyledA2>ALL PHOTOS</StyledA2></StyledAll>

    </StyledDiv>
  )
}
