import { Badge, Box, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import './Card.scss';
import { notFound } from '../../../Assets/index';

const CardComponents = ({ props }) => {
  if (props.author === null) {
    props.author = 'Undefined';
  } else {
    if (props.author.search(/(https:)|(http:)/i) === 0) {
      const x = props.author.split('/');
      props.author = x[x.length - 1];
    }
  }

  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  props.publishedAt = new Date(props.publishedAt).toLocaleDateString(
    'en-EN',
    options
  );
  props.urlToImage = props.urlToImage ?? notFound;

  return (
    <>
      <a href={props.url} rel="noopener noreferrer" target="_blank">
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
            alt={props.author}
            src={props.urlToImage}
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
                {props.source.name}
              </Badge>
              <Badge variant="solid" rounded="full" colorScheme="teal">
                {props.publishedAt}
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
            >
              {props.title}
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
              {props.description}
            </Text>
            <Stack isInline align="baseline">
              <Badge
                variant="solid"
                rounded="full"
                px={3}
                colorScheme="teal"
                ml={1}
                my={2}
              >
                Author : {props.author}
              </Badge>
            </Stack>
          </Box>
        </Box>
      </a>
    </>
  );
};

export default CardComponents;
