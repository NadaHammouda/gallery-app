import React from 'react';
import styled from "styled-components";
import listIcon from '../imgs/list.png';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: inherit;
  width: 92%;
  max-width: 1100px;
  margin: auto;
  padding-top: 40px;

  @media screen and (max-width: 950px){
    width: auto;
    padding: 2% 2.5%;
    max-height: 100%;
    background-color: #fff;
    position: relative;
    justify-content: space-between;
    align-items: center;
    }`;

const Common = styled.div`
  width: 43%;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px #000;
  border-bottom: solid 1px #000;
  padding: 0px 15px;

  @media screen and (max-width: 950px){
    display: none;}`

const StyledUl= styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;`;

const Dropbtn = styled.div`
  position: relative;
  padding: 12px 7px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;`;

const DropDownLi = styled.li`
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
  font-weight: bold;`;

const StyledA = styled.a`
  color: black;
  text-decoration: none;
  text-align: center;
  font-weight: 900;
  font-size: 25px;
  cursor: pointer;`;

const StyledIcon = styled.img`
  display: none;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 950px){
    display: block;
    width: 4%;
    height: 4%;
    text-align: right;}`

export default function Header() {


  return (
    <StyledDiv>
      <Common>
        <StyledUl>
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
        </StyledUl>
      </Common>

    <StyledA href="#">GALLERY 360</StyledA>
    <StyledIcon src={listIcon}></StyledIcon>
    <Common>
    <StyledUl>
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
          <SubA href="/">PHOTOS</SubA>
          <SubA href="/categories">MORE</SubA>
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
    </StyledUl>
    </Common>
    </StyledDiv>
  );

}
