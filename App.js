import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import reduxStore from './js/store/reduxStore';
import {Provider} from 'react-redux';
import AppNavigator from './js/navigators/AppNavigator';
import COLOR from './js/shared/index';

const App = () => {
  const [store, setStore] = useState(reduxStore());

  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor={COLOR.COLOR_APP} />
        <AppNavigator />
      </Provider>
    </>
  );
};

export default App;
