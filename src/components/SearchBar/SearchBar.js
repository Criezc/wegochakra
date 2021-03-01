import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = ({ handleChange }) => {
  return (
    <Flex as="form" mx={3} my={5} pt={1}>
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
      />
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
    </Flex>
  );
};

export default SearchBar;
