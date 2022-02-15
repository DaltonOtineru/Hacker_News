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
        <div className="follow--us--box">
          <h6 className="follow">Follow Us</h6>
        </div>
        <div className="social--icons--box">
          <div className="social--icon">
            <a href="https://twitter.com/thehackersnews">
              <FaTwitterSquare className="icon footer--twitter" />
              <p className="follower--count">780,100 Followers</p>
            </a>
          </div>
          <div className="social--icon">
            <a href="https://www.facebook.com/thehackernews">
              <ImFacebook2 className="icon footer--facebook" />
              <p className="follower--count">1,985,000 Followers</p>
            </a>
          </div>
          <div className="social--icon">
            <a href="https://www.linkedin.com/company/thehackernews/">
              <BsLinkedin className="icon footer--linkedin" />
              <p className="follower--count">301,500 Followers</p>
            </a>
          </div>
          <div className="social--icon">
            <a href="https://www.youtube.com/c/thehackernews?sub_confirmation=1">
              <IoLogoYoutube className="icon footer--youtube" />
              <p className="follower--count">19,500 Followers</p>
            </a>
          </div>
          <div className="social--icon">
            <a href="https://www.instagram.com/thehackernews/">
              <FaInstagramSquare className="icon footer--instagram" />
              <p className="follower--count">125,500 Followers</p>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterSocials;
