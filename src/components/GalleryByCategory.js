import React, {  useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { searchByCategory } from '../features/PhotoSlice';
import ImageGrid from './ImageGrid';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import DirectoryName from './DirectoryName';

const GalleryContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  max-width: 1100px;
  margin: 30px auto 0;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-top: 0;}`;


const GalleryByCategory = ({params}) => {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchByCategory(params.category));
    },[])

  return (
    <div>
      <DirectoryName directory={["CATEGORY",params.category.toUpperCase()]} />
      <GalleryContainer>
        <SearchBar />
        <ImageGrid />
      </GalleryContainer>

      <Pagination />

     </div>
  )
}


export default GalleryByCategory;
