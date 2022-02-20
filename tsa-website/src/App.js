import logo from './logo.svg';
import './App.css';
import Home from './homepage/homepage';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { HashRouter  } from 'react-router-dom'
import NavigationBar from './navbar/navbar';
import Work from './projects/projects.js'
import GTRI from './gtri/gtri'
import MyPalate from './mypalate/mypalate'
import AboutMe from './aboutme/aboutme'


function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <NavigationBar/>
        <Routes>
          <Route path = '/' element={<Home/>} exact/>
          <Route path = '/work' element={<Work/>}/>
          <Route path = '/gtri' element={<GTRI/>}/>
          <Route path = '/mypalate' element={<MyPalate/>}/>
          <Route path = '/aboutme' element={<AboutMe/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
