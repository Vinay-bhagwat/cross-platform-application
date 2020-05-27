import React from 'react';
import { BasePage } from './app/page/BasePage';
import './App.css';
import {AppListeners} from './app/native/AppListener'

function App() {
  AppListeners()
  return <BasePage />
}
export default App;
