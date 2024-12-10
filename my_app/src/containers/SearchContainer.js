import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchQuery } from '../redux/actions/searchActions';
import ChooseFileButton from '../components/ChooseFileButton';
import QueryBox from '../components/QueryBox';
import Oracle from '../components/Oracle';
import Subject from '../components/Subject';
import Chapter from '../components/Chapter';
import SearchButton from '../components/SearchButton';
import FetchingResults from '../components/FetchingResults';
import ForRating from '../components/ForRating';
import VisitCard from '../components/VisitCard';

const SearchContainer = () => {
  const query = useSelector((state) => state.search.query);
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query) {
      dispatch(searchQuery(query));
    }
  };

  return (
    <div className="search-container">
      <ChooseFileButton />
      <QueryBox value={query} onChange={(e) => dispatch(searchQuery(e.target.value))} />
      <Oracle />
      <Subject />
      <Chapter />
      <SearchButton onClick={handleSearch} />
      {query ? <FetchingResults /> : null}
      <ForRating />
      <VisitCard />
    </div>
  );
};

export default SearchContainer;