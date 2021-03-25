import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/alert';
import { Flex } from '@chakra-ui/layout';

const Error = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="100%">
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Something error please try again</AlertTitle>
      </Alert>
    </Flex>
  );
};

export default Error;
