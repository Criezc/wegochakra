import React from 'react';
import { Flex, Button, Stack } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

export default function Paginator({ handleClick, page }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 3,
      }}
    >
      <Flex justifyContent="center">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Stack direction="row" spacing={2} align="center" py={5}>
            <Button
              colorScheme="teal"
              name="prevTabs"
              onClick={handleClick}
              isDisabled={page === 1}
            >
              <ArrowLeftIcon />
            </Button>
            <Button
              colorScheme="teal"
              name="1"
              onClick={handleClick}
              isActive={page === 1}
            >
              1
            </Button>
            <Button
              colorScheme="teal"
              name="2"
              onClick={handleClick}
              isActive={page === 2}
            >
              2
            </Button>
            <Button
              colorScheme="teal"
              name="3"
              onClick={handleClick}
              isActive={page === 3}
            >
              3
            </Button>
            <Button
              colorScheme="teal"
              name="4"
              onClick={handleClick}
              isActive={page === 4}
            >
              4
            </Button>
            <Button
              name="5"
              onClick={handleClick}
              colorScheme="teal"
              isActive={page === 5}
            >
              5
            </Button>
            <Button
              colorScheme="teal"
              name="nextTabs"
              onClick={handleClick}
              isDisabled={page === 5}
            >
              <ArrowRightIcon />
            </Button>
          </Stack>
        </motion.div>
      </Flex>
    </motion.div>
  );
}
