import React from 'react';
import './App.css';
import Header from './components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos } from './features/PhotoSlice';

function App() {

  const dispatch = useDispatch();
  const gallery = useSelector(state => state.gallery);
  // console.log("gallery: " , gallery);


  return (
    <div className="App">
      <Header />
      <button onClick={(()=> dispatch(fetchPhotos()))} >Click</button>
    </div>
  );
}

export default App;
