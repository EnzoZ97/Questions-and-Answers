import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home/home';
import ListOfQuestions from './components/ListofQuestions/ListofQuestions';
import Navbar from './components/Navbar/Navbar';
import Results from './components/Results/Results';

import './App.scss';


function App() {

  useEffect(() => {
    document.title = "Questions and Answers"
 }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/Questions" element={<ListOfQuestions />} ></Route>
          <Route path="/Results" element={<Results />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
