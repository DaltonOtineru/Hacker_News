import React from 'react';
import { Link } from 'react-router-dom';
import MainNewsFeed from './MainNewsFeed';
import SideNewsFeed from './SideNewsFeed';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../css/newsFeed.css';
import '../../css/mainNewsFeed.css';

import sideNewsAd1 from '../../img/sideNewsAd1.jpeg';
import sideNewsAd2 from '../../img/sideNewsAd2.png';
import notionAd from '../../img/notionAd.png';

import { IoIosArrowForward } from 'react-icons/io';

const NewsFeed = ({
  searchTerm,
  setSearchTerm,
  defaultSearchTerm,
  changeDefaultSearchTerm,
}) => {
  return (
    <Container className="total--news--box">
      <Row className="total--news--inner">
        <Col sm={12} lg={8} className="main--news--box">
          <MainNewsFeed
            className="main--news--feed"
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            defaultSearchTerm={defaultSearchTerm}
            changeDefaultSearchTerm={changeDefaultSearchTerm}
          />
          <div className="next--page--link--box">
            <Link to="/" className="next--page--link">
              <Button className="next--page--button">
                Next Page
                <IoIosArrowForward className="next--page--icon" />
              </Button>
            </Link>
          </div>
        </Col>
        <Col sm={12} lg={4} className="side--news--box">
          <div className="side--news--top--ads">
            <a href="">
              <img
                src={notionAd}
                alt="advertisement"
                className="side--top--ad1"
              />
            </a>
            <a href="">
              <img
                src={sideNewsAd2}
                alt="advertisement"
                className="side--top--ad2"
              />
            </a>
          </div>
          <h2 className="side--news--title">Popular This Week</h2>
          <SideNewsFeed className="side--news--feed" />
          <div className="side--news--bottom--ad">
            <a href="">
              <img
                src={sideNewsAd1}
                alt="advertisement"
                className="side--bottotm--ad"
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsFeed;
