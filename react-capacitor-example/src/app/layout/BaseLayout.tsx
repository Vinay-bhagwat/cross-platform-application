import React from 'react';
import { HeaderComponent } from './HeaderComponent';
import { BodyComponent } from './BodyComponent';
import { FooterComponent } from './FooterComponent';



export const BaseLayout: React.FC<{}> = () => {

    return <>
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
    </>
}