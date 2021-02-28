import { Badge, Box, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box
      textAlign="center"
      mt={5}
      justifyContent="center"
      pb={{ lg: '5', md: '7' }}
    >
      <Text fontSize={{ lg: 'xl', md: 'lg' }} textColor="teal.400">
        &copy; Copyright <Badge colorScheme="telegram">Frisco Lieyanto</Badge>.
        All Rights Reserved
      </Text>
    </Box>
  );
};

export default Footer;
