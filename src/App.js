import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import "./App.css"
import { originals, action, romance, documentaries, comedy, horror, trending, sciencefiction } from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost rowId='1' url={originals} title='Netflix Originals' />
      <RowPost rowId='2' url={trending} title='Trending' isSmall />
      <RowPost rowId='3' url={action} title='Action' isSmall />
      <RowPost rowId='4' url={comedy} title='Comedy' isSmall />
      <RowPost rowId='5' url={sciencefiction} title='Science Fiction' isSmall />
      <RowPost rowId='6' url={horror} title='Horror' isSmall />
      <RowPost rowId='7' url={romance} title='Romance' isSmall />
      <RowPost rowId='8' url={documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
