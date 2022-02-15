import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/font.css';
import '../css/app.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './header/Header';
import NewsFeed from './newsFeed/NewsFeed';
import Newsletter from './Newsletter';
import Footer from './footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <NewsFeed />
      <Newsletter />
      <Footer />
      <Routes></Routes>
    </Router>
  );
};

export default App;

// c5e77d61a1324228b832fdfa9c021248 API KEY
// endpoint
