import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.scss';

function Navbars({ onSearch }) {
  const [expanded, setExpanded] = React.useState(false);
  const links = [
    { name: 'technology', label: 'Home' },
    { name: 'tesla', label: 'Tesla' },
    { name: 'microsoft', label: 'Microsoft' },
    { name: 'google', label: 'Google' },
    { name: 'android', label: 'Android' },
    { name: 'apple', label: 'Apple' },
    { name: 'samsung', label: 'Samsung' },
    { name: 'playstation', label: 'PlayStation' },
    { name: 'amazon', label: 'Amazon' },
    { name: 'iot', label: 'IoT' },
  ];
  return (
    <Navbar expand="md" className="nav-bg" expanded={expanded}>
      <Navbar.Brand href="/" className="brand_title">
        WEGONEWS
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : 'expanded')}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex flex-auto" activeKey="/technology">
          {links.map((link, index) => (
            <Nav.Link
              key={index}
              onClick={e => {
                e.preventDefault();
                onSearch(link.name);
              }}
              style={{ color: 'white' }}
            >
              {link.label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars;
