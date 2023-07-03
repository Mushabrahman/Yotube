import './App.css';
import Header from "../src/components/Header"
import  Body from "../src/components/Body"
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import { Provider } from "react-redux";
import store from './components/utils/store';
import SearchVideos from './components/SearchVideos.js';



const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" exact element={<Body/>}/>
            <Route path="/watch" element={<WatchPage/>}/>
            <Route path="/search/:searchTerm" element={<SearchVideos/>}/>
        </Routes>
    </BrowserRouter>
    </Provider>
  )
} 

export default App
