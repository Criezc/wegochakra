import React, { useEffect, useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Paginator from '../Paginator/Paginator';
import SearchBar from '../SearchBar/SearchBar';
import SourceBar from '../SourceBar/SourceBar';
const queryString = require('query-string');

const NewsSection = props => {
  const category = queryString.parse(props.location.search).category;

  useEffect(() => {
    props.setActiveTab(category);
    if (category === undefined) {
      window.location.href = '/?category=technology';
    }
  }, [category, props]);

  const [currentPage, setCurrentPage] = useState(1);

  const [postPerPage] = useState(12);

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

  const [search, setSearch] = useState();

  const handleSearch = e => {
    setSearch(e);
  };

  return (
    <>
      <SearchBar handlePage={e => handleSearch(e)} />
      <SourceBar />
      <Paginator
        currentPage={currentPage}
        handleClick={evt => handlePage(evt)}
      />
      <NewsCard
        category="top-headlines"
        query={category === undefined ? '' : category}
        results={postPerPage}
        page={currentPage}
      />
    </>
  );
};

export default NewsSection;
