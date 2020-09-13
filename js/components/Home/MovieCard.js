import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import COLOR from '../../shared/index';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {Title, Poster} = this.props.item;
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          this.props.handleOnPress();
        }}
        activeOpacity={0.5}>
        {Poster === 'N/A' ? (
          <View
            style={[
              styles.image,
              {
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLOR.COLOR_DARK_GRAY,
              },
            ]}>
            <Text numberOfLines={2} style={styles.unavailablePreview}>
              {'Preview not available'}
            </Text>
          </View>
        ) : (
          <Image source={{uri: Poster}} style={styles.image} />
        )}
        <Image
          source={require('../../shared/assets/gradiant.png')}
          resizeMode={'stretch'}
          style={{position: 'absolute', bottom: 0, height: 50, width: '100%'}}
        />
        <Text style={styles.text} numberOfLines={2}>
          {Title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    backgroundColor: COLOR.COLOR_LIGHT,
    flexGrow: 1,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    width: 180,
    height: 250,
    flexBasis: 0,
    flex: 1,
  },
  text: {
    color: COLOR.COLOR_LIGHT,
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    padding: 10,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    flex: 1,
    borderRadius: 10,
  },
  unavailablePreview: {
    marginHorizontal: 10,
    fontStyle: 'italic',
  },
});
