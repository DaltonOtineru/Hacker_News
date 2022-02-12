import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import { FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io';

const FooterSocials = () => {
  return (
    <div className="footer-socials--outer">
      <Container className="footer--socials--inner">
        <h6 className="follow">Follow Us</h6>
        <div className="social--icons--box">
          <div className="social--icon">
            <FaTwitterSquare className="icon" />
            <p className="follower--count">780,100 Followers</p>
          </div>
          <div className="social--icon">
            <ImFacebook2 className="icon" />
            <p className="follower--count">1,985,000 Followers</p>
          </div>
          <div className="social--icon">
            <BsLinkedin className="icon" />
            <p className="follower--count">301,500 Followers</p>
          </div>
          <div className="social--icon">
            <IoLogoYoutube className="icon" />
            <p className="follower--count">19,500 Followers</p>
          </div>
          <div className="social--icon">
            <FaInstagramSquare className="icon" />
            <p className="follower--count">125,500 Followers</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterSocials;
