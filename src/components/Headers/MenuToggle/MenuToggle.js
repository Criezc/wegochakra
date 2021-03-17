import { Box } from '@chakra-ui/react';
import React from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MenuToggle = ({ toggle, isOpen }) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: '-100%' },
  };
  return (
    <motion.button animate={isOpen ? 'closed' : 'open'} variants={variants}>
      <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
        {isOpen ? (
          <CloseIcon fontSize="xl" />
        ) : (
          <HamburgerIcon fontSize="3xl" />
        )}
      </Box>
    </motion.button>
  );
};

export default MenuToggle;
