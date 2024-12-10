import { SEARCH_QUERY } from '../actions/searchActions';

const initialState = {
  query: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return { ...state, query: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
