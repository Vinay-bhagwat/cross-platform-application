import React from 'react';
import logo from './logo.svg';
import {BasePage} from './app/page/BasePage';
import './App.css';
import { Plugins,SplashScreen } from '@capacitor/core';
const { Device, Modals } = Plugins;

function App() {
  SplashScreen.show({
    showDuration: 2000,
    autoHide: true
  });
  return <BasePage/>
}

const showDeviceInfo= async ()=> {
  let info = await Device.getInfo();
  await Modals.alert({
      title: 'Info',
      message: `UUID: ${info.uuid};
      Model: ${info.model}`
  });
}

export default App;
