import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/header.css';
import { Container } from 'react-bootstrap';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { MdRssFeed } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import hackerNews from '../../img/hackerNews.png';
import { Button } from 'react-bootstrap';

const Header = () => {
  const iStyle = { color: 'white', fontSize: '14px' };

  return (
    <>
      <div className="social--outer">
        <Container className="social--box">
          <div className="socials">
            <p>Follow us</p>
            <FaFacebookF style={iStyle} />
            <AiOutlineTwitter style={iStyle} />
            <FaLinkedinIn style={iStyle} />
            <BsYoutube style={iStyle} />
            <MdRssFeed style={iStyle} />
          </div>
        </Container>
      </div>
      <div className="logo--outer">
        <Container className="logo--bg">
          <div className="logo--box">
            <img className="hacker--logo" src={hackerNews} />
            <a>
              <Button className="sub--btn">
                <GrMail className="btn--icon" />
                Subscribe to Newsletter
              </Button>
            </a>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
