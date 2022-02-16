import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/onlineCourses.css';
import { Container, Col, Row } from 'react-bootstrap';

import hackingCourse from '../img/hackingCourse.jpeg';
import AWS from '../img/AWS.jpeg';
import itCourse from '../img/itCourse.jpeg';
import passwordManager from '../img/passwordManager.jpeg';

const OnlineCourses = () => {
  const hackingHref =
    'https://deals.thehackernews.com/sales/the-all-in-one-2021-super-sized-ethical-hacking-bundle';
  const itHref =
    'https://deals.thehackernews.com/sales/the-a-to-z-cyber-security-it-certification-training-bundle';
  const passwordHref =
    'https://deals.thehackernews.com/sales/the-lifetime-password-manager-privacy-subscription-bundle-sticky-pw';
  const awsHref =
    'https://deals.thehackernews.com/sales/the-all-in-one-aws-cisco-comptia-super-certification-bundle-2021-lifetime-access';

  return (
    <Container className="online--courses--wrapper">
      <Row className="online--courses--row">
        <div className="online--courses--header--box">
          <h3 className="online--courses--header">
            Online Courses and Software
          </h3>
        </div>
        <Col xs={12} md={6} lg={3} className="online--courses-col">
          <a
            href={hackingHref}
            target="_blank"
            className="online--courses--anchor"
          >
            <div className="online--courses--item">
              <img
                src={hackingCourse}
                alt="learn ethical hacking course image"
                className="course--image"
              />
              <h5 className="online--course--title">Learn Ethical Hacking</h5>
              <p className="online--course--description">
                18 latest courses from top cybersecurity instructors - from
                Python programming to Metasploit.
              </p>
            </div>
          </a>
        </Col>
        <Col xs={12} md={6} lg={3} className="online--courses-col">
          <a href={itHref} target="_blank" className="online--courses--anchor">
            <div className="online--courses--item">
              <img
                src={itCourse}
                alt="IT certification course image"
                className="course--image"
              />
              <h5 className="online--course--title">
                IT Certification Courses
              </h5>
              <p className="online--course--description">
                Complete exam preparation training for Ethical Hacking,
                Penetration Testing, CISSP, CCSP, CISM, CISA and CompTIA exams.
              </p>
            </div>
          </a>
        </Col>
        <Col xs={12} md={6} lg={3} className="online--courses-col">
          <a
            href={passwordHref}
            target="_blank"
            className="online--courses--anchor"
          >
            <div className="online--courses--item">
              <img
                src={passwordManager}
                alt="Password and VPN ad image"
                className="course--image"
              />
              <h5 className="online--course--title">
                Password Manager and VPN for Lifetime
              </h5>
              <p className="online--course--description">
                Get lifetime subscription of Sticky Password Premium and
                KeepSolid VPN Unlimited
              </p>
            </div>
          </a>
        </Col>
        <Col xs={12} md={6} lg={3} className="online--courses-col">
          <a href={awsHref} target="_blank" className="online--courses--anchor">
            <div className="online--courses--item">
              <img
                src={AWS}
                alt="learn ethical hacking course"
                className="course--image"
              />
              <h5 className="online--course--title">
                AWS, Cisco and CompTIA Courses
              </h5>
              <p className="online--course--description">
                Prepare for a long list of IT certification exams, including
                Amazon, Cisco, Google, Microsoft and CompTIA
              </p>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default OnlineCourses;
