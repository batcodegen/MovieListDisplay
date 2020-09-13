import React from 'react';
import {
  View,
  Modal,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
} from 'react-native';
import COLOR from '../../shared/index';

export const DetailModal = ({item, isVisible, onClose}) => {
  const {Title, Year, imdbID, Type, Poster} = item;
  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      onRequestClose={onClose}
      visible={isVisible}>
      <TouchableWithoutFeedback
        onPress={() => {
          onClose();
        }}>
        <View style={styles.translucentView} />
      </TouchableWithoutFeedback>
      <ScrollView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 5,
          }}>
          <Text
            style={{
              fontSize: 24,
              color: COLOR.COLOR_LIGHT,
              marginHorizontal: 20,
              fontWeight: 'bold',
            }}>
            {'Details'}
          </Text>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              onClose();
            }}>
            <Image
              source={require('../../shared/assets/closeicon.png')}
              style={styles.icon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.titleContainer}>
          {Poster === 'N/A' ? (
            <View style={styles.noImage}>
              <Text style={{alignSelf: 'center'}}>
                {'Preview not available'}
              </Text>
            </View>
          ) : (
            <Image
              source={{uri: Poster}}
              style={styles.topImage}
              resizeMode={'stretch'}
            />
          )}
          <Text style={styles.titleText}>{Title}</Text>
        </View>
        <View style={{...styles.separator, marginLeft: 0, marginTop: 10}} />
        {renderMovieDetail('MOVIE TYPE', Type)}
        {renderSeparator()}
        {renderMovieDetail('IMDB ID', imdbID)}
        {renderSeparator()}
        {renderMovieDetail('RELEASE YEAR', Year)}
      </ScrollView>
    </Modal>
  );
};

const renderMovieDetail = (header, value) => {
  return (
    <View style={{marginHorizontal: 20, marginVertical: 10}}>
      <Text style={styles.movieDetailHeader}>{header}</Text>
      <Text style={styles.movieDetailValue}>{value}</Text>
    </View>
  );
};

const renderSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  container: {
    opacity: 1,
    backgroundColor: COLOR.COLOR_APP,
    flex: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  detailsView: {
    flexDirection: 'column',
    marginHorizontal: 5,
  },
  movieDetailHeader: {
    color: COLOR.COLOR_LIGHT,
    marginBottom: 5,
    letterSpacing: 1.25,
    opacity: 0.8,
  },
  movieDetailValue: {
    color: COLOR.COLOR_LIGHT,
    fontStyle: 'normal',
    borderRadius: 5,
  },
  noImage: {
    margin: 10,
    width: 140,
    height: 180,
    borderRadius: 10,
    backgroundColor: COLOR.COLOR_GRAY,
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  topImage: {
    width: 150,
    height: 180,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: Platform.OS === 'ios' ? 20 : 5,
  },
  titleText: {
    fontSize: 20,
    marginTop: 5,
    paddingHorizontal: 5,
    color: COLOR.COLOR_LIGHT,
    maxWidth: '50%',
    fontWeight: 'bold',
  },
  translucentView: {
    opacity: 0.5,
    backgroundColor: COLOR.COLOR_APP,
    width: '100%',
    height: '30%',
  },
  separator: {
    backgroundColor: COLOR.COLOR_LIGHT,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
    opacity: 0.2,
  },
});
