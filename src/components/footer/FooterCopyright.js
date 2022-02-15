import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const FooterCopyright = () => {
  return (
    <div className="copyright--section">
      <Container className="copyright--wrapper">
        <p className="copyright--text">
          <span>&copy;</span>The Hacker News, 2021. All Rights Reserved.
        </p>
      </Container>
    </div>
  );
};

export default FooterCopyright;
