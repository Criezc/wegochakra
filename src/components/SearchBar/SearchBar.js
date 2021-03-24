import React from 'react';
import { Box, Flex, createStandaloneToast } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const toast = createStandaloneToast();

const SearchBar = ({ handleChange }) => {
  const [text, setText] = React.useState('');

  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  });

  const handleInput = events => {
    events.preventDefault();
    const text = events.target.value;
    setText(text);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!text) {
      toast({
        title: 'No Blank Search !',
        position: 'top',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    handleChange(text);
    setText('');
  };

  return (
    <Flex onSubmit={handleSubmit} as="form" mx={3} my={5} pt={1}>
      <Box
        as="input"
        placeholder="Search a news..."
        type="searchbar"
        flex="1"
        py={2}
        px={4}
        rounded="md"
        bg="gray.100"
        borderWidth="1px"
        _hover={{ borderColor: 'gray.200', bg: 'gray.200' }}
        _focus={{
          outline: 'none',
          bg: 'white',
          boxShadow: 'outline',
          borderColor: 'gray.300',
        }}
        onChange={handleInput}
        ref={inputRef}
        value={text}
      />

      <motion.div whileHover={{ scale: 1.1 }}>
        <Box
          as="button"
          value="submit"
          bg="teal.400"
          py={2}
          px={4}
          ml={3}
          rounded="md"
          fontWeight="semibold"
          color="white"
          _hover={{
            bg: 'teal.600',
            transition: ' ease-in-out 500ms',
          }}
          _focus={{ boxShadow: 'outline' }}
        >
          <SearchIcon />
        </Box>
      </motion.div>
    </Flex>
  );
};

export default SearchBar;
