import { ArrowUpIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import './index.scss';

export default function BackToTop() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <Box>
      <Button
        colorScheme="teal"
        onClick={scrollTop}
        position="fixed"
        bottom="15"
        right="15"
        zIndex="99999"
        cursor="pointer"
        className="btn-top fadeIn"
        style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
      >
        <ArrowUpIcon
          _hover={{
            bg: 'teal.600',
            transition: ' ease-in-out 500ms',
          }}
        />
      </Button>
    </Box>
  );
}
