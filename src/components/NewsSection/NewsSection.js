import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Paginator from '../Paginator/Paginator';
import SearchBar from '../SearchBar/SearchBar';
import ProgressBar from '../ProgressBar/ProgressBar';

const NewsSection = props => {
  const handlePage = events => {
    const paginate = events.target.name;
    if (paginate === 'nextTabs' && props.currentPage < 5) {
      props.onChangePage(this.props.currentPage + 1);
    } else if (paginate === 'prevTabs' && props.currentPage > 1) {
      props.onChangePage(this.props.currentPage - 1);
    } else if (paginate !== 'nextTabs' && paginate !== 'prevTabs') {
      props.onChangePage(parseInt(paginate));
    }
  };

  const handleSearchTerm = events => {
    props.onSearch(events === null || events === '' ? 'technology' : events);
  };

  return (
    <>
      <SearchBar handleChange={handleSearchTerm} />
      <Paginator page={props.currentPage} handleClick={handlePage} />
      {props.isLoading ? <ProgressBar /> : null}
      <NewsCard category="top-headlines" data={props.data} />
    </>
  );
};

export default NewsSection;
