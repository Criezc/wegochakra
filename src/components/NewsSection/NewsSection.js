import React, { useEffect } from 'react';
import NewsCard from '../NewsCard/NewsCard';
const queryString = require('query-string');

const NewsSection = props => {
  const category = queryString.parse(props.location.search).category;

  useEffect(() => {
    props.setActiveTab(category);
    if (category === undefined) {
      window.location.href = '/?category=technology';
    }
  }, [category, props]);

  return (
    <>
      <NewsCard
        category="everything"
        query={category === undefined ? '' : category}
        topHeading="Top News"
        linkText="technology"
        results="12"
      />
    </>
  );
};

export default NewsSection;
