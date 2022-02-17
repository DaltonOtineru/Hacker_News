import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../css/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Form } from 'react-bootstrap';

import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImHome } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import { RiShoppingCart2Fill } from 'react-icons/ri';

const Navigation = ({
  onSearchTermChange,
  searchTerm,
  changeDefaultSearchTerm,
  toggleModal,
}) => {
  const [searchBarVisible, toggleSearchBarVisible] = useState(false);

  const toggleVisibilty = () => {
    return toggleSearchBarVisible(!searchBarVisible);
  };
  const iconStyle = { fontSize: '20px' };

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
                <ImHome className="home--mobile--icon mobile--icons" />
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav--item mobile--view--only">
              <Nav.Link as={Link} to="/" className="nav--item--link">
                <GrMail className="mobile--icons" />
                Newsletter
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li" className="nav--item mobile--hidden">
              <Nav.Link
                as={Link}
                to="/"
                className="nav--item--link mobile--hidden"
              >
                Data Breaches
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav--item mobile--hidden">
              <Nav.Link
                as={Link}
                to="/"
                className="nav--item--link mobile--hidden"
              >
                Cyber Attacks
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav--item mobile--hidden">
              <Nav.Link
                as={Link}
                to="/"
                className="nav--item--link mobile--hidden"
              >
                Vulnerabilities
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav--item mobile--hidden">
              <Nav.Link
                as={Link}
                to="/"
                className="nav--item--link mobile--hidden"
              >
                Malware
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav--item mobile--view--only">
              <Nav.Link as={Link} to="/" className="nav--item--link">
                <RiShoppingCart2Fill className="mobile--icons" />
                Offers
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav--item mobile--hidden">
              <Nav.Link
                as={Link}
                to="/"
                className="nav--item--link mobile--hidden"
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="icons icons--mobile--hidden ms-auto">
            <Nav.Item as="li" className="nav--icon">
              <Nav.Link as={Link} to="/" onClick={toggleVisibilty}>
                <FaSearch style={iconStyle} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav--icon">
              <Nav.Link as={Link} to="/">
                <GiHamburgerMenu
                  style={iconStyle}
                  onClick={() => toggleModal()}
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
