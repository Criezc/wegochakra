import React from 'react';
import { Badge, Box, Image, Stack, Text } from '@chakra-ui/react';
import { notFound } from '../../Assets/index';
import { motion } from 'framer-motion';
import './Card.scss';
import { formatDate } from '../../utils/DateFormat';
import PropTypes from 'prop-types';

const CardComponents = ({
  src,
  title,
  publishedAt,
  author,
  sourceName,
  description,
  url,
}) => {
  if (author === null) {
    author = 'Undefined';
  } else {
    if (author.search(/(https:)|(http:)/i) === 0) {
      const x = author.split('/');
      author = x[x.length - 1];
    }
  }

  src = src ?? notFound;

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
      <a href={url} rel="noopener noreferrer" target="_blank">
        <Box
          w="100%"
          rounded="20px"
          overflow="hidden"
          boxShadow="sm"
          bg="gray.300"
          border="2px solid #319795"
          h="100%"
          boxSizing="border-box"
        >
          <Image
            alt={author}
            src={src}
            loading="lazy"
            mb={5}
            objectFit="cover"
            className="img-card"
            borderRadius="md"
            height="200px"
            width="100%"
          />

          <Box>
            <Stack isInline align="baseline">
              <Badge variant="solid" rounded="full" colorScheme="teal" ml={5}>
                {sourceName}
              </Badge>
              <Badge variant="solid" rounded="full" colorScheme="teal">
                {formatDate(publishedAt)}
              </Badge>
            </Stack>
            <Text
              as="h2"
              fontWeight="semibold"
              fontSize="xl"
              my={5}
              mx={5}
              textAlign="start"
              lineHeight="short"
              fontFamily="sans-serif"
              noOfLines={2}
            >
              {title}
            </Text>
            <Text
              fontSize="md"
              fontWeight="medium"
              my={8}
              mx={5}
              textAlign="start"
              fontFamily="mono"
              noOfLines={[3, 4]}
            >
              {description}
            </Text>
            <Stack isInline align="baseline">
              <Badge
                variant="solid"
                rounded="full"
                px={3}
                colorScheme="teal"
                ml={1}
                my={2}
                textOverflow="ellipsis"
                noOfLines={[2]}
              >
                Author : {author}
              </Badge>
            </Stack>
          </Box>
        </Box>
      </a>
    </motion.div>
  );
};

CardComponents.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  publishedAt: PropTypes.string,
  author: PropTypes.string,
  sourceName: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default CardComponents;
