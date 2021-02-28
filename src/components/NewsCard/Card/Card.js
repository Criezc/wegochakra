import { Badge, Box, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import './Card.scss';

const CardComponents = ({ props }) => {
  props.publishedAt = new Date(props.publishedAt).toUTCString();

  return (
    <>
      <a href={props.url} rel="noopener noreferrer">
        <Box
          w="100%"
          rounded="20px"
          overflow="hidden"
          boxShadow="sm"
          bg="gray.200"
          border="2px solid #319795"
          h="600px"
        >
          <Image
            alt={props.author}
            src={props.urlToImage}
            loading="lazy"
            mb={5}
            objectFit="cover"
            className="img-card"
            w="100%"
            borderRadius="md"
          />
          <Box>
            <Stack isInline align="baseline">
              <Badge
                variant="solid"
                rounded="full"
                px={2}
                colorScheme="teal"
                ml={3}
              >
                {props.source.name}
              </Badge>
              <Badge variant="solid" rounded="full" px={2} colorScheme="teal">
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
            >
              {props.title}
            </Text>
            <Text
              fontSize="md"
              fontWeight="medium"
              my={8}
              mx={5}
              noOfLines={[3]}
              textAlign="start"
            >
              {props.description}
            </Text>
            <Stack isInline align="baseline">
              <Badge
                variant="solid"
                rounded="full"
                px={2}
                colorScheme="teal"
                ml={3}
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
