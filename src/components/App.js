import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/font.css';
import '../css/app.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './header/Header';
import NewsFeed from './newsFeed/NewsFeed';
import OnlineCourses from './OnlineCourses';
import Newsletter from './Newsletter';
import Footer from './footer/Footer';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [defaultSearchTerm, changeDefaultSearchTerm] = useState('california');

  const onSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(defaultSearchTerm);
  };

  useEffect(() => {
    changeDefaultSearchTerm(searchTerm);
  }, [searchTerm]);

  return (
    <Router>
      <Header
        onSearchTermChange={onSearchTermChange}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        defaultSearchTerm={defaultSearchTerm}
        changeDefaultSearchTerm={changeDefaultSearchTerm}
      />
      <NewsFeed
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        defaultSearchTerm={defaultSearchTerm}
        changeDefaultSearchTerm={changeDefaultSearchTerm}
      />
      <OnlineCourses />
      <Newsletter />
      <Footer />
      <Routes></Routes>
    </Router>
  );
};

export default App;
