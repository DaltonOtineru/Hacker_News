import React from 'react';
import Navigation from './Navbar';
import TopAd from './TopAd';

import '../../css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { MdRssFeed } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import hackerNews from '../../img/hackerNews.png';

const Header = ({
  setSearchTerm,
  searchTerm,
  onSearchTermChange,
  defaultSearchTerm,
  changeDefaultSearchTerm,
  modalIsOpen,
  setModalOpen,
  toggleModal,
}) => {
  const iconStyle = { color: 'white', fontSize: '16px' };

  return (
    <>
      <div className="social--outer">
        <Container className="social--box">
          <div className="socials">
            <p>Follow us</p>
            <a href="https://www.facebook.com/thehackernews">
              <FaFacebookF style={iconStyle} />
            </a>
            <a href="https://twitter.com/thehackersnews">
              <AiOutlineTwitter style={iconStyle} />
            </a>
            <a href="https://www.linkedin.com/company/thehackernews/">
              <FaLinkedinIn style={iconStyle} />
            </a>
            <a href="https://www.youtube.com/c/thehackernews?sub_confirmation=1">
              <BsYoutube style={iconStyle} />
            </a>
            <a href="https://feeds.feedburner.com/TheHackersNews">
              <MdRssFeed style={iconStyle} />
            </a>
          </div>
        </Container>
      </div>
      <div className="logo--outer">
        <Container className="logo--bg">
          <div className="logo--box">
            <a href="/">
              <img
                className="hacker--logo"
                alt="Hacker News Logo"
                src={hackerNews}
                className="headerImg"
              />
            </a>
            <a>
              <Button className="sub--btn">
                <GrMail className="btn--icon" />
                Subscribe to Newsletter
              </Button>
            </a>
          </div>
        </Container>
      </div>
      <Navigation
        onSearchTermChange={onSearchTermChange}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        defaultSearchTerm={defaultSearchTerm}
        changeDefaultSearchTerm={changeDefaultSearchTerm}
        modalIsOpen={modalIsOpen}
        setModalOpen={setModalOpen}
        toggleModal={toggleModal}
      />
      <TopAd />
    </>
  );
};

export default Header;
