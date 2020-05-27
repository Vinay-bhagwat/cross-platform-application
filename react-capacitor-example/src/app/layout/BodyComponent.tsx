import React, { useState } from 'react';
import { Container, Button } from '@material-ui/core';
import { GeoLocationComponent } from '../component/GeoLocationComponent'
import { Plugins, Device } from '@capacitor/core';
import { AppApisHandler } from '../native/AppAPIS';
import { ModalPopup } from '../component/ModalPopup';
import { StatusBarHandler } from '../component/StatusBar'
const { SplashScreen } = Plugins;

export const BodyComponent: React.FC<{}> = () => {

    SplashScreen.show({
        showDuration: 2000,
        autoHide: true
    });

    const [isLightStatusBar,setStatusBar]=useState(true)

    const showDeviceInfo = async () => {
        let info = await Device.getInfo();
        await ModalPopup.alertHandler(
            'Info',
            `UUID: ${info.uuid};
            Model: ${info.model}`
        );
    }

    const LaunchUrlHandler = async () => {
        const { getLaunchUrlHandler } = AppApisHandler,
            { url } = await getLaunchUrlHandler()
        ModalPopup.alertHandler('App URL', url)
    }

    const promptHandler = () => ModalPopup.promptHandler('CANCEL', 'Placeholder', 'input text', 'message', 'OK', 'Prompt title')

    const handlerURL = async () => {
        const { canOpenUrlHandler } = AppApisHandler,
            { value } = await canOpenUrlHandler()
        ModalPopup.confirmHandler('CANCEL', `The app can ${!value && 'not'} open URLs`, 'OK', 'AppURL')

    }

    const listRenderer = () => {
        return [{ msg: 'Get Device Info', handler: showDeviceInfo }, { msg: 'Can open URL handler?', handler: handlerURL },
        { msg: 'Open prompt handler', handler: promptHandler }, { msg: 'Get App URL', handler: LaunchUrlHandler },
        { msg: 'Hide Status bar', handler: StatusBarHandler.hideStatusBar }, { msg: 'Show Status bar', handler: StatusBarHandler.showStatusBar }, { msg: 'Dark mode Status bar', handler: () => {setStatusBar(!isLightStatusBar); StatusBarHandler.changeStatusBar(isLightStatusBar) } }]
            .map(item => <div><Button variant="contained" color="primary" onClick={item.handler}>{item.msg}</Button></div>)
    }

    return <Container style={{ height: '79vh', overflowY: 'scroll' }}>
        <GeoLocationComponent />

        {listRenderer()}
        <div><Button variant="contained" color="primary" onClick={AppApisHandler.exitAppHnadler}>Exit app</Button></div>
    </Container>
}