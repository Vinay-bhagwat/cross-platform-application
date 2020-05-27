import { Plugins } from '@capacitor/core';

const { App } = Plugins;

const canOpenUrlHandler=async ()=> await App.canOpenUrl({ url: 'com.getcapacitor.myapp' });


const openUrlHandler=async ()=>await App.openUrl({ url: 'com.getcapacitor.myapp://page?id=ionicframework' });


const getLaunchUrlHandler = async ()=>await App.getLaunchUrl();


export const AppApisHandler={
    canOpenUrlHandler,
    openUrlHandler,
    getLaunchUrlHandler
}