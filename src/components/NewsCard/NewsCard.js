import { Grid } from '@chakra-ui/react';
import React from 'react';
import CardComponents from './Card/Card';

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
          return <CardComponents key={index} props={article} />;
        })}
      </Grid>
    </>
  );
};

export default NewsCard;
