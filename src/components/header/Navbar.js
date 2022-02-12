import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../css/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Form } from 'react-bootstrap';

import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navigation = () => {
  const [searchBarVisible, toggleSearchBarVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const iconStyle = { fontSize: '20px' };

  const toggleVisibilty = () => {
    return toggleSearchBarVisible(!searchBarVisible);
  };

  const onSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  return (
    <>
      <Navbar className="nav">
        <Container className="nav--box">
          <Nav as="ul" className="nav--links ">
            <Nav.Item as="li" className="nav--item">
              <Nav.Link as={Link} to="/" className="nav--item--link">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav--item">
              <Nav.Link as={Link} to="/" className="nav--item--link">
                Data Breaches
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav--item">
              <Nav.Link as={Link} to="/" className="nav--item--link">
                Cyber Attacks
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav--item">
              <Nav.Link as={Link} to="/" className="nav--item--link">
                Vulnerabilities
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav--item">
              <Nav.Link as={Link} to="/" className="nav--item--link">
                Malware
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav--item">
              <Nav.Link as={Link} to="/" className="nav--item--link">
                Offers
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav--item">
              <Nav.Link as={Link} to="/" className="nav--item--link">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="icons ms-auto">
            <Nav.Item as="li" className="nav--icon">
              <Nav.Link as={Link} to="/" onClick={toggleVisibilty}>
                <FaSearch style={iconStyle} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav--icon">
              <Nav.Link as={Link} to="/">
                <GiHamburgerMenu style={iconStyle} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <div className="form--outer--box">
        <Container
          className="form--container"
          style={searchBarVisible ? { display: 'block' } : { display: 'none' }}
        >
          <Form>
            <Form.Control
              type="text"
              placeholder="Search Here..."
              className="search--input"
              onChange={onSearchTermChange}
              value={searchTerm}
            />
          </Form>
        </Container>
      </div>
    </>
  );
};

export default Navigation;
