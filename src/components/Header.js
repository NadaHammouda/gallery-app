import React from 'react';
import styled from "styled-components";


const StyledDiv = styled.div`
  margin-top: 3%;`;

const StyledUlLeft = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
  width: 30%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: inline;
  float: left;
  margin-left: 10%;`;


const StyledUlRight = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
  width: 30%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: inline;
  float: right;
  margin-right: 10%;`;

const StyledLi = styled.li`
  float: center;`;


const Dropbtn = styled.div`
  display: inline-block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: 900;
  cursor: pointer;`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }`;

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  border-top: 1px solid black;
  font-weight: 900;`;

const StyledA = styled.a`
  color: black;
  text-decoration: none;
  text-align: center;
  font-weight: 900;
  font-size: 35px;
  margin-left: 3%;
  cursor: pointer;`;



export default function Header() {


  return (
    <StyledDiv>
    <StyledUlLeft>
      <DropDownLi>
        <Dropbtn>DROPDOWN</Dropbtn>
        <DropDownContent>
          <SubA href="#">LINK 1</SubA>
          <SubA href="#">LINK 2</SubA>
          <SubA href="#">LINK 3</SubA>
        </DropDownContent>
      </DropDownLi>

      <DropDownLi>
        <Dropbtn>DROPDOWN</Dropbtn>
        <DropDownContent>
          <SubA href="#">LINK 1</SubA>
          <SubA href="#">LINK 2</SubA>
          <SubA href="#">LINK 3</SubA>
        </DropDownContent>
      </DropDownLi>

      <DropDownLi>
        <Dropbtn>DROPDOWN</Dropbtn>
        <DropDownContent>
          <SubA href="#">LINK 1</SubA>
          <SubA href="#">LINK 2</SubA>
          <SubA href="#">LINK 3</SubA>
        </DropDownContent>
      </DropDownLi>
    </StyledUlLeft>

    <StyledA href="#">GALLERY</StyledA>

    <StyledUlRight>
      <DropDownLi>
        <Dropbtn>DROPDOWN</Dropbtn>
        <DropDownContent>
          <SubA href="#">LINK 1</SubA>
          <SubA href="#">LINK 2</SubA>
          <SubA href="#">LINK 3</SubA>
        </DropDownContent>
      </DropDownLi>

      <DropDownLi>
        <Dropbtn>GALLERY</Dropbtn>
        <DropDownContent>
          <SubA href="#">LINK 1</SubA>
          <SubA href="#">LINK 2</SubA>
          <SubA href="#">LINK 3</SubA>
        </DropDownContent>
      </DropDownLi>

      <DropDownLi>
        <Dropbtn>DROPDOWN</Dropbtn>
        <DropDownContent>
          <SubA href="#">LINK 1</SubA>
          <SubA href="#">LINK 2</SubA>
          <SubA href="#">LINK 3</SubA>
        </DropDownContent>
      </DropDownLi>
    </StyledUlRight>

    </StyledDiv>
  );

}
