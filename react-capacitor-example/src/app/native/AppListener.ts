
import { Plugins, AppState } from '@capacitor/core';
const { App: PluginApp } = Plugins;



export const AppListeners = () => {

    PluginApp.addListener('appUrlOpen', (data: any) => {
        console.log('App opened with URL: ' + data.url);
    });

    PluginApp.addListener('appRestoredResult', (data: any) => {
        console.log('Restored state:', data);
    });

    PluginApp.addListener('appStateChange', (state: AppState) => {
        // state.isActive contains the active state
        console.log('App state changed. Is active?', state.isActive);
    });
}