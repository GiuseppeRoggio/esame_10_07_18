import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Menu from './screens/Menu';
import Carrello from '/screens/Carrello';
import Detail from './screens/Detail'


const App = createStackNavigator (
    {
      Menu,
      Carrello,
      Detail
    },
    {
      initialRouteName: "Home"
    }
  );
  
  export default App;
