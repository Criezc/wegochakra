import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Paginator from '../Paginator/Paginator';
import SearchBar from '../SearchBar/SearchBar';
import ProgressBar from '../ProgressBar/ProgressBar';

const NewsSection = props => {
  // SPACE

  const handlePage = events => {
    const paginate = events.target.name;
    if (paginate === 'tabNext' && props.currentPage < 5) {
      props.onChangePage(this.props.currentPage + 1);
    } else if (paginate === 'tabPrev' && props.currentPage > 1) {
      props.onChangePage(this.props.currentPage - 1);
    } else if (paginate !== 'tabNext' && paginate !== 'tabPrev') {
      props.onChangePage(parseInt(paginate));
    }

    console.log(paginate);
  };

  const handleSearchTerm = events => {
    props.changeSearch(
      events === null || events === '' ? 'technology' : events
    );
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
