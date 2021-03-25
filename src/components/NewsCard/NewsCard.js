import { Grid } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import CardComponents from '../CardComponents/Card';

const NewsCard = ({ data }) => {
  return (
    <>
      <Grid
        columnGap={18}
        rowGap={10}
        mr={3}
        ml={3}
        gridTemplateColumns={{
          lg: 'repeat(auto,1fr,auto)',
          md: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
        {data.map((article, index) => {
          return (
            <CardComponents
              key={index}
              src={article.urlToImage}
              title={article.title}
              publishedAt={article.publishedAt}
              author={article.author}
              sourceName={article.source.name}
              description={article.description}
              url={article.url}
            />
          );
        })}
      </Grid>
    </>
  );
};

NewsCard.propTypes = {
  data: PropTypes.array,
};

export default NewsCard;
