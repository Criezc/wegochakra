import React from 'react';
import { Flex } from '@chakra-ui/react';

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      wrap="wrap"
      w="100%"
      mb={5}
      justifyContent="space-between"
      p={8}
      bg={['teal.600', 'teal.600']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
      borderTop="6px solid #38b2ac"
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
