import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MdRssFeed } from 'react-icons/md';
import { FaTelegram } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const FooterLinks = () => {
  return (
    <div className="footer--links--section">
      <Container className="footer--links--wrapper">
        <Row className="footer--links--row">
          <Col sm={12} md={8} className="footer--links--col">
            <div className="footer--link--box about--links">
              <h5 className="footer--link--title about--title">About</h5>
              <div className="footer--links about--links">
                <Link to="/">About Us</Link>
                <Link to="/">Advertising</Link>
                <Link to="/">Editorial Team</Link>
                <Link to="/">Contact</Link>
              </div>
            </div>
            <div className="footer--link--box pages--links">
              <h5 className="footer--link--title pages--title">Pages</h5>
              <div className="footer--links pages--links">
                <Link to="/">RSS Feeds</Link>
                <Link to="/">Deals Store</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Jobs</Link>
              </div>
            </div>
            <div className="footer--link--box deals--links">
              <h5 className="footer--link--title deals--title">Deals</h5>
              <div className="footer--links deals--links">
                <Link to="/">Exclusives</Link>
                <Link to="/">Hacking</Link>
                <Link to="/">Development</Link>
                <Link to="/">Android</Link>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="footer--buttons--col">
            <Link to="/">
              <Button type="button" className="footer--button">
                <MdRssFeed className="button--icon feeds--icon" />
                RSS Feeds
              </Button>
            </Link>
            <Link to="/">
              <Button type="button" className="footer--button">
                <GrMail className="button--icon contact--us--icon" />
                Contact Us
              </Button>
            </Link>
            <Link to="/">
              <Button type="button" className="footer--button">
                <FaTelegram className="button--icon telegram--icon" />
                Telegram Channel
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterLinks;
