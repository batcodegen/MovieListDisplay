import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../components/Home/';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SplashScreen from '../components/Splash/SplashScreen';

const MainStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
  },
  {headerMode: 'none'},
);

const AppNavigator = createSwitchNavigator(
  {
    splashScreen: {screen: SplashScreen},
    mainStack: {screen: MainStack},
  },
  {
    initialRouteName: 'splashScreen',
  },
);

export default createAppContainer(AppNavigator);
