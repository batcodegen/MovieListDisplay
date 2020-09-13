import {combineReducers} from 'redux';
import movieList from './movie';

const BaseReducer = combineReducers({
  movieList,
});

export default BaseReducer;
