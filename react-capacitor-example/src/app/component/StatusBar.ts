import {
    Plugins,
    StatusBarStyle,
} from '@capacitor/core';
import {showToaster} from '../component/ToasterComponent'

const { StatusBar } = Plugins;

const changeStatusBar = (isStatusBarLight: boolean) => {
    StatusBar.setStyle({
        style: isStatusBarLight ? StatusBarStyle.Dark : StatusBarStyle.Light
    });
    StatusBar.setOverlaysWebView({
        overlay: true
    });
    showToaster(`Status bar style is ${isStatusBarLight ? 'light':'dark'} mode`)

}

const hideStatusBar = () => {
    StatusBar.hide();
    showToaster('Status bar is now hidden')
}

const showStatusBar = () => {
    StatusBar.show();
    showToaster('Status bar is now visible')

}

export const StatusBarHandler = {
    changeStatusBar,
    hideStatusBar,
    showStatusBar
}