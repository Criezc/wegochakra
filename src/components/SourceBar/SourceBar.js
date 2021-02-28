import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Select } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { fetchSource } from '../../api/api';

const SourceBar = request => {
  const [sources, setSource] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const results = await fetchSource(request);
      setSource(results);
    };
    fetchApi();
  }, [request]);

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
          {sources.map((source, index) => (
            <option key={index} value={source.id}>
              {source.name}
            </option>
          ))}
        </Select>
      </Flex>
    </>
  );
};

export default SourceBar;
