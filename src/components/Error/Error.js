import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/alert';

const Error = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Something error please try again</AlertTitle>
    </Alert>
  );
};

export default Error;
