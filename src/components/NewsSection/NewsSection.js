import React, { useEffect, useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Paginator from '../Paginator/Paginator';
const queryString = require('query-string');

const NewsSection = props => {
  const category = queryString.parse(props.location.search).category;

  useEffect(() => {
    props.setActiveTab(category);
    if (category === undefined) {
      window.location.href = '/?category=technology';
    }
  }, [category, props]);

  const [pageContext, setPageContext] = useState(1);

  const handleChange = e => {
    const paginator = e.target.name;
    if (paginator === 'next' && pageContext < 4) {
      setPageContext(pageContext + 1);
    } else if (paginator === 'previous' && pageContext > 1) {
      setPageContext(pageContext - 1);
    } else if (paginator !== 'next' && paginator !== 'previous') {
      setPageContext(parseInt(paginator));
    }
  };

  return (
    <>
      <Paginator pageContext={pageContext} handleClick={e => handleChange(e)} />

      <NewsCard
        category="everything"
        query={category === undefined ? '' : category}
        results="9"
        page={pageContext}
      />
    </>
  );
};

export default NewsSection;
