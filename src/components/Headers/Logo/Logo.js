/** @jsxRuntime classic */
/** @jsx jsx */

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { jsx, css, keyframes } from '@emotion/react';

const floating = keyframes` 
0%{
  transform: translateY(0);
}
to{
  transform: translateY(-10px);
}

`;

const Logo = props => {
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
      }}
    >
      <Box {...props}>
        <Text
          fontSize={{
            lg: 'xl',
            sm: 'lg',
          }}
          fontWeight="bold"
        >
          <a
            href="/"
            css={css`
              animation: ${floating} 1.5s alternate infinite;
              display: inline-block;
            `}
          >
            WEGONEWS
          </a>
        </Text>
      </Box>
    </motion.div>
  );
};

export default Logo;
