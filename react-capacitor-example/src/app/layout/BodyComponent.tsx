import React from 'react';
import { Container, Button } from '@material-ui/core';
import { GeoLocationComponent } from '../component/GeoLocationComponent'
import { Plugins, Device } from '@capacitor/core';
import { AppApisHandler } from '../native/AppAPIS';
import { ModalPopup } from '../component/ModalPopup'
const { SplashScreen } = Plugins;

export const BodyComponent: React.FC<{}> = () => {

    SplashScreen.show({
        showDuration: 2000,
        autoHide: true
    });

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

 const promptHandler=()=>ModalPopup.promptHandler('CANCEL','Placeholder','input text','message','OK', 'Prompt title')

    return <Container style={{ height: '79vh', overflowY: 'scroll' }}>
        <GeoLocationComponent />
        <Button variant="contained" color="primary" onClick={showDeviceInfo}>Get Device Info</Button>
        <Button variant="contained" color="primary" onClick={AppApisHandler.canOpenUrlHandler}>Can open URL handler?</Button>
        <Button variant="contained" color="primary" onClick={promptHandler}>Open prompt handler</Button>
        <Button variant="contained" color="primary" onClick={LaunchUrlHandler}>Get App URL</Button>
    </Container>
}