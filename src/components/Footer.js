import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.footer`
  display: block;`

const Container = styled.div`
  background-color: #000000;
  width: 100%;
  direction: ltr;
  color: white;
  position: absolute;
    left: 0;
    overflow:hidden;
    &::after {
      height: 60px}

  `

const LeftDiv = styled.div`
  display: inline-block;
  width: 33%;
  font-size: 8px;
  color: white;
  margin-left: 1%;

  @media screen and (max-width: 575px){
    width: 100%;
    text-align: center;
    margin-left: 0;
    font-size: 6px;}`

const StyledH1 = styled.h1`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;`

const CenterDiv = styled.div`
  display: inline-block;
  width: 33%;
  font-size: 10px;
  font-weight: 100;
  color: #ffffff;
  position: relative;
  margin: auto;
  text-align: center;
  @media screen and (max-width: 575px){
    width: 100%;
    margin: 0;
    font-size: 8px;}`

const StyledA = styled.a`
  color: #337ab7;
  text-decoration: none;`

const RightDiv = styled.div`
  display: inline-block;
  width: 32%;
  color: #ffffff;
  font-size: 10px;
  text-decoration: none;
  margin-right: 1px;


  @media screen and (max-width: 575px){
    width: 100%;
    padding: 0;
    margin: 0;
    font-size: 8px;
    }`

const StyledUl = styled.ul`
  text-align: right;
  list-style-type: none;
  @media screen and (max-width: 575px){
    width: 100%;
    padding: 0;
    text-align: center;
  }`

const StyledLi = styled.li`
  padding-bottom: 4px`


const StyledA1 = styled.a`
  color: white;
  text-decoration: none;`

export default function Footer() {
  return (
    <MainDiv>
      <Container>
        <LeftDiv><StyledH1>Gallery 360</StyledH1></LeftDiv>
        <CenterDiv>@Copyright <StyledA href="#">Nada.</StyledA> All Rights Reserved.</CenterDiv>
        <RightDiv>
          <StyledUl>
            <StyledLi>
              <StyledA1 href="#">Terms & Conditions</StyledA1>
            </StyledLi>
            <StyledLi>
              <StyledA1 href="#">Privacy Policy</StyledA1>
            </StyledLi>
          </StyledUl>


        </RightDiv>
      </Container>
    </MainDiv>
  )
}
