import React from 'react';
import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const NavBarContainer = ({ children }) => {
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
      borderTop="6px solid #38b2ac"
    >
      {children}
    </Flex>
  );
};

NavBarContainer.propTypes = {
  children: PropTypes.node,
};

export default NavBarContainer;
