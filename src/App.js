import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Coins from './component/Coins';
import axios from 'axios'
import CoinInfo from '../src/pages/CoinInfo';
import SearchCoin from './component/SearchCoin';
import SearchResult from './pages/SearchResult';



function App() {
 

 

  return (
    <div>
         
      {/* <SearchCoin /> */}
      <Routes>
      <Route path="/" element={<Coins />}/>
        <Route path="/coin" element={<CoinInfo />}>
        <Route path=':coinId' element={<CoinInfo />} />
        </Route>
        <Route path='/searchresult' element={<SearchResult/>}/>
      </Routes>     
    </div>
  );
}
export default App;