import React from 'react';
import './App.css';
import Header from './components/Header';
import { fetchPhotos } from './features/PhotoSlice';
//import Image from './components/Image';
import Gallery from './components/Gallery'

function App() {

  // const dispatch = useDispatch();
  // const gallery = useSelector(state => state.gallery);
  // console.log("gallery: " , gallery.slice(0,9));


  return (
    <div>
      <Header />
      {/* <button onClick={(()=> dispatch(fetchPhotos()))} >Click</button> */}
      <Gallery />
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
