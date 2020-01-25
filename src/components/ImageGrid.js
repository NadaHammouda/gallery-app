import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import { useSelector } from 'react-redux';

const Column = styled.div`
  float: left;
  min-width: 230px;
  padding: 5px;

  @media screen and (max-width: 767px) {
      width: 100%;}`

const Row = styled.div`
  width: 70%;
  float: right;
  max-width: 770px;
  &::after {
    content: "";
    clear: both;
    display: table;}`

function ImageGrid(){

  const photos = useSelector(state => state.currentPagePhotos);

  return (
    <Row>
      {photos.length > 0  ? photos.map(photo => {
        return <Column key={photo.id}><Image photo={photo}/></Column>
      }): <h1>no images</h1>}
    </Row>
  )
}


export default ImageGrid;
