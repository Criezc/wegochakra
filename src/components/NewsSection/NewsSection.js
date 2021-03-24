import React from 'react';
import PropTypes from 'prop-types';
import NewsCard from '../NewsCard/NewsCard';
import Paginator from '../Paginator/Paginator';
import SearchBar from '../SearchBar/SearchBar';
import ProgressBar from '../ProgressBar/ProgressBar';

const NewsSection = ({
  currPage,
  changePage,
  newData,
  isLoading,
  newSearch,
}) => {
  // SPACE

  const handlePage = events => {
    const paginate = events.target.value;
    if (paginate === 'tabNext' && currPage < 5) {
      changePage(currPage + 1);
    } else if (paginate === 'tabPrev' && currPage > 1) {
      changePage(currPage - 1);
    } else if (paginate !== 'tabNext' && paginate !== 'tabPrev') {
      changePage(parseInt(paginate));
    }
  };

  const handleSearchTerm = events => {
    newSearch(events === null || events === '' ? 'technology' : events);
  };

  return (
    <>
      <SearchBar handleChange={handleSearchTerm} />
      <Paginator page={currPage} handleClick={handlePage} />
      {isLoading ? <ProgressBar /> : null}
      <NewsCard category="top-headlines" data={newData} />
    </>
  );
};

NewsSection.propTypes = {
  currPage: PropTypes.number,
  changePage: PropTypes.func,
  newData: PropTypes.array,
  isLoading: PropTypes.bool,
  newSearch: PropTypes.func,
};

export default NewsSection;
