import React,{useEffect} from 'react';
import HomeStack from './src/navigation/HomeStack';

import SplashScreen from 'react-native-splash-screen';


const App = () => {
  useEffect(() => SplashScreen.hide());
  return (
    <HomeStack  />
  );
};



export default App;


