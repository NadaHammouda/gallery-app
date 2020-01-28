import React, {  useEffect } from 'react';
import styled from 'styled-components';
import { useSelector,  useDispatch } from 'react-redux';
import { getSinglePhoto } from '../features/PhotoSlice';
import DirectoryName from './DirectoryName';


const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 92.5%;
  max-width: 1100px;
  margin: 40px auto 70px;
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

const StyledA = styled.a`
  text-decoration: none;
  border: 1px #000;
  color: #000;
  text-size: 20px;
  margin-left: 10px;`

const SingleImage = ({params}) => {

  const photo = useSelector(state => state.Photos.singlePhoto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePhoto(params.id));
    },[])

  return (
    <div>
      {photo ?
         <DirectoryName directory={["ALL PHOTOS",photo.author.toUpperCase()]}/> :
         <h1>loading</h1>}
    <StyledDiv>
      <ImageContainer>
        <StyledImage alt="Large" src={photo.download_url}></StyledImage>
      </ImageContainer>
      <Description>
        <h2>{photo.author}</h2>
        <h3>Categories:
        {photo ? photo.categories.map(category => {
          return <StyledA key={category} href={`category/${category}`}>{category}  </StyledA>
        }) : <div></div>}
        </h3>
      </Description>
    </StyledDiv>
    </div>
  )
}

export default SingleImage;
