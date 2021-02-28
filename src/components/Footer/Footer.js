import { Badge, Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      justifyContent="center"
      textAlign="center"
      borderBottom="6px solid #38b2ac"
    >
      <Box mt={5} mb={5}>
        <Text fontSize={{ lg: 'xl', md: 'lg' }} textColor="teal.400">
          &copy; Copyright <Badge colorScheme="teal">Frisco Lieyanto</Badge> .
          All Rights Reserved
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
