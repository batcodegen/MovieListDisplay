import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Dimensions,
} from 'react-native';
import COLOR from '../../shared/index';
import {withNavigation} from 'react-navigation';

const {height} = Dimensions.get('window');

class SplashScreen extends Component {
  state = {
    logoOpacity: new Animated.Value(0),
    titleMarginTop: new Animated.Value(height / 2),
  };

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.logoOpacity, {
        toValue: 1,
        duration: 1500,
      }),
      Animated.timing(this.state.titleMarginTop, {
        toValue: 10,
        duration: 1000,
      }),
    ]).start(() => {
      this.props.navigation.navigate('Home');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Image
          source={require('../../shared/assets/moviebuff.png')}
          style={{
            ...styles.logo,
            opacity: this.state.logoOpacity,
          }}></Animated.Image>
        <Animated.Text
          style={{...styles.title, marginTop: this.state.titleMarginTop}}>
          Movie Buff
        </Animated.Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.COLOR_APP,
  },
  logo: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
  },
  title: {
    color: COLOR.COLOR_LIGHT,
    marginTop: 10,
    textAlign: 'center',
    width: 400,
    fontSize: 21,
  },
});

export default withNavigation(SplashScreen);
