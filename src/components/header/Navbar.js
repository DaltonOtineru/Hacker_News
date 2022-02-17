import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../css/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Form } from 'react-bootstrap';

import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navigation = ({
  onSearchTermChange,
  searchTerm,
  defaultSearchTerm,
  changeDefaultSearchTerm,
  modalIsOpen,
  setModalOpen,
  closeModal,
}) => {
  const [searchBarVisible, toggleSearchBarVisible] = useState(false);

  const iconStyle = { fontSize: '20px' };

  const toggleVisibilty = () => {
    return toggleSearchBarVisible(!searchBarVisible);
  };

  const onSearchSubmit = (event) => {
    event.preventDefault();
    changeDefaultSearchTerm(searchTerm);
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
                <GiHamburgerMenu
                  style={iconStyle}
                  onClick={() => closeModal()}
                />
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
          <Form onSubmit={() => onSearchSubmit()}>
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
