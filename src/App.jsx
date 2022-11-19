import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NowPlaying from './pages/NowPlaying';
import ComingSoon from './pages/ComingSoon';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <Router >
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<NowPlaying />}/>
        <Route path="/onshow" element={<NowPlaying />}/>
        <Route path="/upcoming" element={<ComingSoon />}/>
      </Routes>
    </Router>
  );
}

