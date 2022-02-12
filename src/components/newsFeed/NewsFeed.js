import React from 'react';
import MainNewsFeed from './MainNewsFeed';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/newsFeed.css';

const NewsFeed = () => {
  return (
    <Container className="total--news--box">
      <Row sm={12} md={8} className="total--news--inner">
        <Col sm={12} md={8} className="main--news--box">
          <MainNewsFeed />
        </Col>
        <Col sm={12} md={4} className="side--news--box">
          <div>testing</div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsFeed;
