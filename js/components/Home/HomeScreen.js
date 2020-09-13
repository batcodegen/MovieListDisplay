import React, {Component} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import MovieCard from './MovieCard';
import Header from '../../shared/Header';
import {DetailModal} from '../Detail/DetailModal';
import COLOR from '../../shared/index';

const APP_TITLE = 'MovieBuff';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      isVisible: false,
    };
  }

  componentDidMount() {
    this.props.fetchMovieList(1);
  }

  render() {
    let {movieListItems, isLoading} = this.props;
    return (
      <View style={{backgroundColor: COLOR.COLOR_APP, flex: 1}}>
        <Header title={APP_TITLE} />
        {isLoading ? (
          this.renderInitalLoader()
        ) : (
          <FlatList
            data={movieListItems}
            renderItem={this.renderItems}
            keyExtractor={this.keyExtractor}
            refreshing={isLoading}
            onRefresh={this.refreshMovieList}
            numColumns={2}
            onEndReachedThreshold={0.8}
            ListFooterComponent={this.renderFooter}
            onEndReached={this.onEndReached}
          />
        )}
        <DetailModal
          item={this.state.item}
          isVisible={this.state.isVisible}
          onClose={this.closeDetailModal}
        />
      </View>
    );
  }

  renderInitalLoader = () => (
    <View style={styles.loader}>
      <ActivityIndicator size={'large'} color={COLOR.COLOR_LIGHT} />
      <Text style={styles.loaderText}>{'Fetching movies...'}</Text>
    </View>
  );

  renderItems = ({item}) => {
    return (
      <MovieCard
        item={item}
        handleOnPress={() => {
          this.handleOnPress(item);
        }}
      />
    );
  };

  handleOnPress = item => {
    this.setState(prevState => ({item: item, isVisible: true}));
  };

  closeDetailModal = () => {
    this.setState(prevState => ({isVisible: false}));
  };

  keyExtractor = (item, index) => index.toString();

  refreshMovieList = () => {
    this.props.fetchMovieList(1);
  };

  renderFooter = () => {
    return (
      <View style={styles.footer}>
        {this.props.isLoadingMore && (
          <ActivityIndicator size={'small'} color={COLOR.COLOR_LIGHT} />
        )}
      </View>
    );
  };

  // load items until page 10 is reached
  onEndReached = () => {
    const {isLoadingMore, pageNumber, fetchMoreMovieList} = this.props;
    isShowingAllItems = pageNumber >= 10;
    if (!isShowingAllItems && !isLoadingMore) {
      fetchMoreMovieList(pageNumber + 1);
    }
  };
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    marginBottom: 20,
    alignContent: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  loaderText: {
    textAlign: 'center',
    marginVertical: 10,
    color: COLOR.COLOR_LIGHT,
    fontWeight: 'bold',
  },
});
