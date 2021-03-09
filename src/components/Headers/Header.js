import { Box, Stack, Link, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Logo from './Logo/Logo';
import MenuToggle from './MenuToggle/MenuToggle';
import NavBarContainer from './NavbarContainer/NavbarContainer';

// links for category
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
];

const Navbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} onSearch={props.onSearch} />
    </NavBarContainer>
  );
};

export default Navbar;

// Menu Item Components
const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link href={to} _hover={{ textDecoration: 'none', color: 'teal.300' }}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

// MenuLinks Components
const MenuLinks = ({ isOpen, onSearch }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={5}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        {links.map((link, index) => (
          <MenuItem
            key={index}
            onClick={e => {
              e.preventDefault();
              onSearch(link.name);
            }}
          >
            {link.label}
          </MenuItem>
        ))}
      </Stack>
    </Box>
  );
};
