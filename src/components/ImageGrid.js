import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import { useSelector } from 'react-redux';

const Row = styled.div`
  width: 70%;
  margin: 0;
  &::after {
    content: "";
    clear: both;
    display: table;}`

function ImageGrid(){

  const photos = useSelector(state => state.Photos.currentPagePhotos);
  return (
    <Row>
      {photos.length > 0  ? photos.map(photo => {
        return <Image key={photo.id} photo={photo}/>
      }): <h1>No images found.</h1>}
    </Row>
  )
}


export default ImageGrid;
