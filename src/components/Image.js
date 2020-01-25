import React from 'react'
import styled from "styled-components"

const ImageContainer = styled.div`
  height: 100%;
  position: relative;
  padding: 5px;`

const ImageBtn = styled.img`
  width: 226.6px;
  height: 230px;`

const StyledH3 = styled.h3`
  color: #000;
  font-size: 17.3px;
  line-height: 1.67;
  font-weight: bold;
  margin: 10px 0 15px;`


const Image = ({photo}) => {
  return (
    <ImageContainer>
      <ImageBtn src={photo.download_url} alt='website logo' />
      <StyledH3>{photo.author}</StyledH3>
    </ImageContainer>
  )
}


export default Image;
