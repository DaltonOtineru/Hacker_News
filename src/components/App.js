import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/font.css';
import '../css/app.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './header/Header';
import NewsFeed from './newsFeed/NewsFeed';
import ModalOverlay from './header/ModalOverlay';
import OnlineCourses from './OnlineCourses';
import Newsletter from './Newsletter';
import Footer from './footer/Footer';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [defaultSearchTerm, changeDefaultSearchTerm] = useState('california');
  const [modalIsOpen, setModalOpen] = useState(false);
  console.log(modalIsOpen);

  const onSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(defaultSearchTerm);
  };

  const showModal = () => {
    if (modalIsOpen === true) {
      return (
        <ModalOverlay style={{ display: 'block' }} toggleModal={toggleModal} />
      );
    }
    if (modalIsOpen === false) {
      return null;
    }
  };

  const toggleModal = () => {
    return setModalOpen(!modalIsOpen);
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
        modalIsOpen={modalIsOpen}
        setModalOpen={setModalOpen}
        toggleModal={toggleModal}
      />
      {showModal()}

      {/* <NewsFeed
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        defaultSearchTerm={defaultSearchTerm}
        changeDefaultSearchTerm={changeDefaultSearchTerm}
      /> */}
      <Routes>
        <Route
          path="/"
          element={
            <NewsFeed
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              defaultSearchTerm={defaultSearchTerm}
              changeDefaultSearchTerm={changeDefaultSearchTerm}
            />
          }
        />
      </Routes>
      <OnlineCourses />
      <Newsletter />
      <Footer />
    </Router>
  );
};

export default App;
