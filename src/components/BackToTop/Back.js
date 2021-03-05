import { ArrowUpIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import './index.scss';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    let isMount = true;

    if (isMount) {
      window.addEventListener('scroll', toggleVisible);
    }
    return () => {
      isMount = false;
    };
  }, []);

  return (
    <Box>
      {isVisible && (
        <Button
          colorScheme="teal"
          onClick={scrollToTop}
          position="fixed"
          bottom="15"
          right="15"
          zIndex="99999"
          cursor="pointer"
          className="btn-top fadeIn"
        >
          <ArrowUpIcon
            _hover={{
              bg: 'teal.600',
              transition: ' ease-in-out 500ms',
            }}
          />
        </Button>
      )}
    </Box>
  );
}
