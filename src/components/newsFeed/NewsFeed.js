import React from 'react';
import MainNewsFeed from './MainNewsFeed';

import SideNewsFeed from './SideNewsFeed';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/newsFeed.css';
import '../../css/mainNewsFeed.css';

const NewsFeed = () => {
  return (
    <Container className="total--news--box">
      <Row sm={12} md={8} className="total--news--inner">
        <Col sm={12} md={8} className="main--news--box">
          <MainNewsFeed className="main--news--feed" />
        </Col>
        <Col sm={12} md={4} className="side--news--box">
          <h2 className="side--news--title">Popular This Week</h2>
          <SideNewsFeed className="side--news--feed" />
        </Col>
      </Row>
    </Container>
  );
};

export default NewsFeed;
