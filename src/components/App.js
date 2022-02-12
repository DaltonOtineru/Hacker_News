import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/font.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './header/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes></Routes>
    </Router>
  );
};

export default App;
