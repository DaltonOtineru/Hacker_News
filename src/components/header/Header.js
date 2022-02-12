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

const Header = () => {
  const iconStyle = { color: 'white', fontSize: '14px' };

  return (
    <>
      <div className="social--outer">
        <Container className="social--box">
          <div className="socials">
            <p>Follow us</p>
            <FaFacebookF style={iconStyle} />
            <AiOutlineTwitter style={iconStyle} />
            <FaLinkedinIn style={iconStyle} />
            <BsYoutube style={iconStyle} />
            <MdRssFeed style={iconStyle} />
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
      <Navigation />
      <TopAd />
    </>
  );
};

export default Header;
