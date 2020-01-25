import React, {  useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos } from '../features/PhotoSlice';
import ImageGrid from './ImageGrid'
import Pagination from './Pagination';


const GalleryContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  max-width: 1100px;
  margin: 30px auto 0;`;


export default function Gallery() {


  const dispatch = useDispatch();
  const photos = useSelector(state => state.gallery);
  const currentPage = useSelector(state => state.currentPage);
  const photosPerPage = useSelector(state => state.photosPerPage);

  useEffect(() => {
    dispatch(fetchPhotos());
    },[])

  return (
    <div>
      <GalleryContainer>
        <ImageGrid />
      </GalleryContainer>

      <Pagination />

     </div>
  )
}
