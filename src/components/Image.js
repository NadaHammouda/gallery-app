import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
  padding: 5px;
  float: left;

  width: 50%

  @media screen and (min-width: 992px) {
    width: 33.33%;} `

const ImageBtn = styled.img`
  width: 226.6px;
  height: 230px;`

const StyledH3 = styled.h3`
  color: #000;
  font-size: 17.3px;
  line-height: 1.67;
  font-weight: bold;
  margin: 5px 0 5px;`

const StyledA = styled.a`
  text-decoration: none;
  cursor: pointer;`

const Image = ({photo}) => {
  return (
    <ImageContainer>
      <StyledA href={`/${photo.id}`}>
        <ImageBtn src={photo.download_url} alt='website logo' />
        <StyledH3>{photo.author}</StyledH3>
      </StyledA>
    </ImageContainer>
  )
}


export default Image;
