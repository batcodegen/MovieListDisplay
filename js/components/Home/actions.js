import Axios from 'axios';
import {
  REQUEST_MOVIE_LIST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAILURE,
  REQUEST_NEXT_PAGE,
} from '../../shared/constants';

const apiUrl = pageOffset => {
  return `http://www.omdbapi.com/?s=Batman&apikey=eeefc96f&page=${pageOffset}`;
};

const requestMovieList = () => {
  return {
    type: REQUEST_MOVIE_LIST,
  };
};

const movieListSuccess = (items, page) => {
  return {
    type: MOVIE_LIST_SUCCESS,
    payload: {items, page},
  };
};

const movieListFailure = () => {
  return {
    type: MOVIE_LIST_FAILURE,
  };
};

const requestMoreMovies = () => {
  return {
    type: REQUEST_NEXT_PAGE,
  };
};

const callFetchApi = pageOffset => dispatch => {
  const requestApi = apiUrl(pageOffset);
  Axios.get(requestApi)
    .then(response => {
      // reponse.data.Search
      dispatch(movieListSuccess(response.data.Search, pageOffset));
    })
    .catch(error => {
      dispatch(movieListFailure());
    });
};

export const fetchMovieList = (pageOffset = 1) => dispatch => {
  dispatch(requestMovieList());
  dispatch(callFetchApi(pageOffset));
};

export const fetchMoreMovieList = pageOffset => dispatch => {
  dispatch(requestMoreMovies());
  dispatch(callFetchApi(pageOffset));
};
