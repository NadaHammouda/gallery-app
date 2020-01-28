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
  min-height: 100vh; /* will cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 60px;`

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
