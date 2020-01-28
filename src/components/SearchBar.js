import React, { useState } from 'react'
import styled from 'styled-components'
import { browserHistory } from 'react-router'
import { useDispatch } from 'react-redux';
import { searchPhotos } from '../features/PhotoSlice';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  position: relative;
  box-sizing: border-box;
  margin-right: 25px;

  @media screen and (max-width: 767px) {
    width: 100%;}`


const StyledForm = styled.form`
  margin-top: 15px;
  padding-left: 6px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    padding: 0px;
    flex-wrap: wrap;
    margin-left: 10px;}`

const StyledInput = styled.input`
  margin: 20px 0;
  width: 100%;
  border: 1px solid black;
  padding: 5px;`

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;`


const Btn1 = styled.a`
  background-color: #fff;
  color: #000;
  border: solid 1px #000;
  padding-right: 10px;
  padding-left: 10px;
  height: 19px;
  cursor: pointer;
  text-decoration: none`


const Btn2 = styled.button`
  background-color: #000;
  color: #fff;
  vertical-align: middle;
  padding: 0;
  border: solid 1px #000;
  width: 55px;
  height: 21px;
  margin-left: 3px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;`

export default function SearchBar() {

  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const search = e => {
    e.preventDefault();
    console.log(browserHistory.getCurrentLocation().pathname)
    browserHistory.push(`${browserHistory.getCurrentLocation().pathname}?${searchTerm}`)
    dispatch(searchPhotos(searchTerm))
  }
  return (
    <StyledDiv>
      <StyledForm>
        <ButtonsContainer>
          <Btn1 href={browserHistory.getCurrentLocation().pathname}>Clear</Btn1>
          <Btn2 onClick={search}>Apply</Btn2>
        </ButtonsContainer>
        <StyledInput type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
      </StyledForm>
    </StyledDiv>
  )
}
