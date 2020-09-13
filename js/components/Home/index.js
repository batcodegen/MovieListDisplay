import {connect} from 'react-redux';
import * as actions from './actions';
import HomeScreen from './HomeScreen';

const mapStateToProps = state => {
  const {
    movieListItems,
    isLoading,
    pageOffset,
    isLoadingMore,
  } = state.movieList;
  return {
    movieListItems,
    isLoading,
    pageNumber: pageOffset,
    isLoadingMore,
  };
};

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
