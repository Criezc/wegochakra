import { CircularProgress, Flex } from '@chakra-ui/react';
import React from 'react';

const ProgressBar = () => {
  return (
    <Flex justifyContent="center" textAlign="center">
      <CircularProgress color="green.400" isIndeterminate size={100} />
    </Flex>
  );
};

export default ProgressBar;
