import {
  Alert,
  AlertIcon,
  CloseButton,
  Grid,
  AlertTitle,
  Flex,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CardComponents from './Card/Card';
import ProgressBar from '../ProgressBar/ProgressBar';
import { fetchNews } from '../../api/api';

const NewsCard = (request, { category }) => {
  const [newsCard, setNewsCard] = useState();
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
    setError(false);
    const fetchData = async () => {
      const result = await fetchNews(request)
        .catch(error => console.log(error))
        .finally(() => setLoad(false));
      setNewsCard(result);
    };
    fetchData();
  }, [request, category]);

  return (
    <>
      {load ? <ProgressBar /> : null}
      <Grid
        columnGap={20}
        rowGap={10}
        mr={5}
        ml={5}
        gridTemplateColumns={{
          lg: 'repeat(auto, 1fr, auto)',
          md: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
        {newsCard
          ? newsCard.map((article, index) => {
              return <CardComponents key={index} props={article} />;
            })
          : null}
      </Grid>
      <Flex>
        {error
          ? index => (
              <Alert status="error" key={index}>
                <AlertIcon />
                <AlertTitle mr={2}>Something error please try again</AlertTitle>
                <CloseButton position="absolute" right="8px" top="8px" />
              </Alert>
            )
          : null}
      </Flex>
    </>
  );
};

export default NewsCard;
