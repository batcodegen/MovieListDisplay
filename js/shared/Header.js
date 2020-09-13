import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import COLOR from '../shared/index';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.COLOR_APP,
  },
  text: {
    color: COLOR.COLOR_LIGHT,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Header;
