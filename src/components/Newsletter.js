import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/newsletter.css';
import { FormControl, InputGroup, Button, Container } from 'react-bootstrap';

import { IoIosArrowForward } from 'react-icons/io';

const Newsletter = () => {
  return (
    <div className="newsletter--outer--block">
      <Container className="newsletter--inner--block">
        <div className="newsletter--inner--content">
          <h3 className="informed">Cybersecurity Newsletter - Stay Informed</h3>
          <p className="sign--up">
            Sign up for cybersecurity newsletter and get latest news updates
            delivered straight to your inbox daily!
          </p>
          <InputGroup className="input--group">
            <FormControl
              placeholder="Enter your email address"
              className="form--control"
            />
            <Button className="newsletter--buton">
              <IoIosArrowForward className="newsletter--button--icon" />
            </Button>
          </InputGroup>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
