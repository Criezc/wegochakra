import React from 'react';
import { Flex, Button, Stack } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

export default function Paginator({ pageContext, handleClick }) {
  return (
    <Flex justifyContent="center">
      <Stack direction="row" spacing={4} align="center" py={5}>
        <Button
          colorScheme="teal"
          className={`action ${pageContext === 1 ? 'disabled' : null}`}
          name="previous"
          onClick={e => handleClick(e)}
        >
          <ArrowLeftIcon />
        </Button>
        <Button
          colorScheme="teal"
          className={pageContext === 1 ? 'active' : null}
          name="1"
          onClick={e => handleClick(e)}
        >
          1
        </Button>
        <Button
          colorScheme="teal"
          className={pageContext === 2 ? 'active' : null}
          name="2"
          onClick={e => handleClick(e)}
        >
          2
        </Button>
        <Button
          colorScheme="teal"
          className={pageContext === 3 ? 'active' : null}
          name="3"
          onClick={e => handleClick(e)}
        >
          3
        </Button>
        <Button
          colorScheme="teal"
          className={pageContext === 4 ? 'active' : null}
          name="4"
          onClick={e => handleClick(e)}
        >
          4
        </Button>
        <Button
          colorScheme="teal"
          className={`action ${pageContext === 4 ? 'disabled' : null} `}
          name="next"
          onClick={e => handleClick(e)}
        >
          <ArrowRightIcon />
        </Button>
      </Stack>
    </Flex>
  );
}
