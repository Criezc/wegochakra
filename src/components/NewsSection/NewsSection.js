import React, { useEffect, useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Paginator from '../Paginator/Paginator';
import SearchBar from '../SearchBar/SearchBar';
// import SearchBar from '../SearchBar/SearchBar';
const queryString = require('query-string');

const NewsSection = props => {
  const category = queryString.parse(props.location.search).category;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    props.setActiveTab(category);
    if (category === undefined) {
      window.location.href = '/?category=technology';
    }
  }, [category, props]);

  const handlePage = evt => {
    const paginate = evt.target.name;
    if (paginate === 'nextTabs' && currentPage < 5) {
      setCurrentPage(currentPage + 1);
    } else if (paginate === 'prevTabs' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (paginate !== 'nextTabs' && paginate !== 'prevTabs') {
      setCurrentPage(parseInt(paginate));
    }
  };

  return (
    <>
      <SearchBar />
      {/* <SourceBar /> */}
      <Paginator page={currentPage} handleClick={evt => handlePage(evt)} />
      <NewsCard
        category="top-headlines"
        query={category === undefined ? '' : category}
        // results={postPerPage}
        page={currentPage}
        // domains={domains}
      />
    </>
  );
};

export default NewsSection;
