import logo from './logo.svg';
import React from 'react'
import { useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import SignIn from './pages/SignInPage/signInPage.js';
import HelloStudents from './pages/HelloStudents/HelloStudents.js';
import VolcanoIntroduction from './pages/VolcanoIntroduction/VolcanoIntroduction.js';
import "./App.css"
import Slide1 from './pages/Slide1.js';
import Slide2 from './pages/Slide2.js';
import Slide3 from './pages/Slide3.js';
import Slide4 from './pages/Slide4.js';
import TableofContents from './pages/TableofContents.js';
import HelloStudents2 from './pages/HelloStudents2.js';
import HelloStudents3 from './pages/HelloStudents3.js';
import HelloStudents4 from './pages/HelloStudents4.js';



function App() {

    useEffect(() => {
        document.body.classList.add('loading-page');
        return function cleanup() {
          document.body.classList.remove('landing');
        };
      });

  return (
  <Router>
            <Routes>
                <Route path="/signInPage" element={<SignIn/>} />
            </Routes>
            <Routes>
                <Route path="/HelloStudents" element={<HelloStudents/>} />
            </Routes>
            <Routes>
                <Route path="/VolcanoIntroduction" element={<VolcanoIntroduction/>} />
            </Routes>
            <Routes>
                <Route path="/Slide1" element={<Slide1/>} />
            </Routes>
            <Routes>
                <Route path="/Slide2" element={<Slide2/>} />
            </Routes>
            <Routes>
                <Route path="/Slide3" element={<Slide3/>} />
            </Routes>
            <Routes>
                <Route path="/Slide4" element={<Slide4/>} />
            </Routes>
            <Routes>
                <Route path="/TableofContents" element={<TableofContents/>} />
            </Routes>
            <Routes>
                <Route path="/HelloStudents2" element={<HelloStudents2/>} />
            </Routes>
            <Routes>
                <Route path="/HelloStudents3" element={<HelloStudents3/>} />
            </Routes>
            <Routes>
                <Route path="/HelloStudents4" element={<HelloStudents4/>} />
            </Routes>
            {/* <Routes>
                <Route path="/LearningAboutEarth" element={<LearningAboutEarth/>} />
            </Routes> */}
        </Router>
  )
}

export default App;
