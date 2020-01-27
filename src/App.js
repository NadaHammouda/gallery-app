import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import styled from 'styled-components';
import Header from './components/Header';
import Gallery from './components/Gallery';
import SingleImage from './components/SingleImage';
import Footer from './components/Footer';
import Category from './components/Category';
import GalleryByCategory from './components/GalleryByCategory';


const StyledDiv = styled.div`
  margin: auto;
  padding: 25px;

  `

const StyledDiv1 = styled.div`
  margin-bottom: -60px;
  min-height: 100%;
  &::after {
    content: "";
    clear: both;
    display: table;}`

const MainDiv = styled.div`
  height: 100%`
function App() {
  return (
    <MainDiv>
    <StyledDiv>
      <Header />
      <Router history={browserHistory}>
        <Route exact path="/" component={Gallery}/>
        <Route path="/categories" component={Category} />
        <Route path="/category/:category" component={GalleryByCategory} />
        <Route path="/:id" component={SingleImage}/>
      </Router>
      </StyledDiv>
      <Footer />
      </MainDiv>

  );
}

export default App;
