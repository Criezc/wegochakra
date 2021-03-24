import React from 'react';
import { Flex, Button, Stack } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

export default function Paginator({ handleClick, page }) {
  return (
    <>
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
              <div>
                <Button
                  colorScheme="teal"
                  value="tabPrev"
                  onClick={handleClick}
                  isDisabled={page === 1}
                >
                  <ArrowLeftIcon />
                </Button>
              </div>

              <div>
                <Button
                  colorScheme="teal"
                  value="1"
                  onClick={handleClick}
                  isActive={page === 1}
                >
                  1
                </Button>
              </div>

              <div>
                <Button
                  colorScheme="teal"
                  value="2"
                  onClick={handleClick}
                  isActive={page === 2}
                >
                  2
                </Button>
              </div>

              <div>
                <Button
                  colorScheme="teal"
                  value="3"
                  onClick={handleClick}
                  isActive={page === 3}
                >
                  3
                </Button>
              </div>

              <div>
                <Button
                  colorScheme="teal"
                  value="4"
                  onClick={handleClick}
                  isActive={page === 4}
                >
                  4
                </Button>
              </div>

              <div>
                <Button
                  value="5"
                  onClick={handleClick}
                  colorScheme="teal"
                  isActive={page === 5}
                >
                  5
                </Button>
              </div>
              <div>
                <Button
                  colorScheme="teal"
                  value="tabNext"
                  onClick={handleClick}
                  isDisabled={page === 5}
                >
                  <ArrowRightIcon />
                </Button>
              </div>
            </Stack>
          </motion.div>
        </Flex>
      </motion.div>
    </>
  );
}
