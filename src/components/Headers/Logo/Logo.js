import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Logo(props) {
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
      }}
    >
      <Box {...props}>
        <Text fontSize="lg" fontWeight="bold">
          <a href="/">WEGONEWS</a>
        </Text>
      </Box>
    </motion.div>
  );
}
