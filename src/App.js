import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Header from './components/Header';
import Gallery from './components/Gallery';
import SingleImage from './components/SingleImage';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Header />
      <Router history={browserHistory}>
        <Route exact path="/" component={Gallery}/>
        <Route path="/:id" component={SingleImage}/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
