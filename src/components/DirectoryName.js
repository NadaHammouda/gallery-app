import React from 'react'
import styled from 'styled-components'
import next from '../imgs/next.png'

const StyledDiv = styled.div`
  width: 92%;
  max-width: 1100px;
  margin: 50px auto 0;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 950px){
    width: auto;
    padding: 2% 2.5%;
    max-height: 100%;
    background-color: #fff;
    position: relative;
    text-size: 10px
    }`


const StyledH3 = styled.h3`
  line-height: 30px;
  height: 30px;
  margin: 0;
  text-transform: uppercase;
  display: inline-block;
  font-size: 25px;
  font-weight: 900;
  color: #010101;
  @media screen and (max-width: 950px){
      font-size: 13px}`

const StyledA = styled.a`
  color: #008174;
  text-decoration: none;
  cursor: pointer`

const StyledH2 = styled.h2`
  line-height: 30px;
  height: 30px;
  margin: 0;
  text-transform: uppercase;
  display: inline-block;

  font-weight: 900;
  color: #010101;
  @media screen and (max-width: 950px){
    font-size: 13px}`

const StyledIcon = styled.img`
  margin-left: 6px;
  display: inline-block;
  width: 2%;
  height: 2%;
  text-align: right;
 `

const DivTemp = styled.div`
  display: contents`
const DirectoryName = ({directory}) => {
  return (
    <StyledDiv>
      <StyledH3>
        <StyledA href="/">GALLERY </StyledA>
      </StyledH3>
        {directory.length > 0  ? directory.map(dir => {
          return <DivTemp key={dir}>
            <StyledIcon src={next} />
            <StyledH2>{dir}</StyledH2>
            </DivTemp>}): <div></div>}
    </StyledDiv>
  )
}


export default DirectoryName;
