import { Box, Stack, Link, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Logo from './Logo/Logo';
import MenuToggle from './MenuToggle/MenuToggle';
import NavBarContainer from './NavbarContainer/NavbarContainer';

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link href={to} _hover={{ textDecoration: 'none', color: 'teal.300' }}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
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
          <MenuItem key={index} to={link.url}>
            {link.label}
          </MenuItem>
        ))}
      </Stack>
    </Box>
  );
};

const links = [
  { url: '/?category=technology', label: 'Home' },
  { url: '/?category=tesla', label: 'Tesla' },
  { url: '/?category=microsoft', label: 'Microsoft' },
  { url: '/?category=google', label: 'Google' },
  { url: '/?category=android', label: 'Android' },
  { url: '/?category=apple', label: 'Apple' },
  { url: '/?category=samsung', label: 'Samsung' },
  { url: '/?category=playstation', label: 'PlayStation' },
  { url: '/?category=amazon', label: 'Amazon' },
  { url: '/?category=iot', label: 'IoT' },
];

const Navbar = (props, { handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default Navbar;
