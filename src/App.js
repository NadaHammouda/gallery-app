import React from 'react';
//import './App.css';
import { Router, Route, browserHistory } from 'react-router';
import Header from './components/Header';
//import Image from './components/Image';
import Gallery from './components/Gallery';
import SingleImage from './components/SingleImage';

function App() {
  return (
    <div>
      <Header />
      {/* <button onClick={(()=> dispatch(fetchPhotos()))} >Click</button> */}
      <Router history={browserHistory}>
        <Route exact path="/" component={Gallery}/>
        <Route path="/:id" component={SingleImage}/>
      </Router>
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
