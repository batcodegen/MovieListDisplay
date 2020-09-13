import {
  REQUEST_MOVIE_LIST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAILURE,
  REQUEST_NEXT_PAGE,
} from '../shared/constants';
import isEqual from 'lodash/isEqual';

const initialState = {
  movieListItems: null,
  isLoading: false,
  pageOffset: null,
  isLoadingMore: false,
};

const checkEquality = (prevItem, currItem) => {
  return isEqual(prevItem, currItem);
};

export default function movieList(state = initialState, action) {
  switch (action.type) {
    case REQUEST_MOVIE_LIST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case REQUEST_NEXT_PAGE:
      return Object.assign({}, state, {
        isLoadingMore: true,
      });
    case MOVIE_LIST_SUCCESS:
      let prevItemData = state.movieListItems || [];
      let currItemData = action.payload.items;
      let checkIfEqual = checkEquality(prevItemData, currItemData);
      let data = checkIfEqual
        ? currItemData
        : action.payload.page === 1
        ? currItemData
        : prevItemData.concat(currItemData);
      return Object.assign({}, state, {
        movieListItems: data,
        isLoading: false,
        pageOffset: action.payload.page,
        isLoadingMore: false,
      });
    case MOVIE_LIST_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        isLoadingMore: false,
      });
    default:
      return state;
  }
}
