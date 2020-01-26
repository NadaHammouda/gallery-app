import React, {  useEffect } from 'react';
import styled from 'styled-components';
import { useSelector,  useDispatch } from 'react-redux';
import { getSinglePhoto } from '../features/PhotoSlice';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 92.5%;
  max-width: 1100px;
  margin: 15px auto 50px;
  &::after {
    content: "";
    clear: both;
    display: table;}
    @media screen and (max-width: 767px) {
      flex-direction: column;
      margin-top: 10px;}`;

const ImageContainer = styled.div`
  width: 63%;
  @media screen and (max-width: 767px) {
    padding: 0 10px;
    width: 100%;}`

const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;`

const Description = styled.div`
  width: 37%;
  padding: 15px 20px;
  @media screen and (max-width: 767px) {
    padding-right: 10px;
    padding-left: 10px;
    width: 100%;}`



const SingleImage = ({params}) => {

  const photo = useSelector(state => state.singlePhoto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePhoto(params.id));
    },[])

  return (
    <StyledDiv>
      <ImageContainer>
        <StyledImage alt="Large" src={photo.download_url}></StyledImage>
      </ImageContainer>
      <Description>
        <h2>{photo.author}</h2>
        <h5>Some description.</h5>
      </Description>
    </StyledDiv>
  )
}

export default SingleImage;
