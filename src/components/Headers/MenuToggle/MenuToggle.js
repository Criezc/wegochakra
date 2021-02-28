import { Box } from '@chakra-ui/react';
import React from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <>
      <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
        {isOpen ? (
          <CloseIcon fontSize="xl" />
        ) : (
          <HamburgerIcon fontSize="3xl" />
        )}
      </Box>
    </>
  );
};

export default MenuToggle;
