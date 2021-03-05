import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Select } from '@chakra-ui/react';
import React from 'react';

const domainList = [
  { url: '&domains=theverge.com', label: 'The Verge' },
  { url: '&domains=techcrunch.com', label: 'Techcrunch' },
  { url: '&domains=engadget.com', label: 'Engadget' },
  { url: '&domains=cnn.com', label: 'Crypto Coin News' },
  { url: '&domains=arstechnica.com', label: 'Ars Technica' },
  { url: '&domains=thenextweb.com', label: 'The Next Web' },
  { url: '&domains=wired.com', label: 'Wired' },
];

const SourceBar = () => {
  return (
    <>
      <Flex my={5} pt={1}>
        <Select
          placeholder="Select Sources"
          variant="filled"
          flex="1"
          py={2}
          px={3}
          rounded="md"
          bg="gray.200"
          borderWidth="1px"
          _hover={{ borderColor: 'gray.200', bg: 'gray.300' }}
          _focus={{
            outline: 'none',
            bg: 'white',
            SelectShadow: 'outline',
            borderColor: 'gray.300',
          }}
          icon={<ChevronDownIcon />}
        >
          {domainList.map((domain, index) => (
            <option key={index}>{domain.label}</option>
          ))}
        </Select>
      </Flex>
    </>
  );
};

export default SourceBar;
