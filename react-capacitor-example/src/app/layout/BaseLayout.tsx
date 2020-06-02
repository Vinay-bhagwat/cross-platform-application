import React, { useState } from 'react';
import { HeaderComponent } from './HeaderComponent';
import { BodyComponent } from './BodyComponent';
import { FooterComponent } from './FooterComponent';
import { LoginComponent } from '../component/Login'


export const BaseLayout: React.FC<{}> = () => {
    const [loginInfo, setLoginInfo] = useState({ username: undefined, password: undefined }),
        { password, username } = loginInfo,
        isLoggedIn = username && password

    return <>
        {isLoggedIn && <>  <HeaderComponent username={loginInfo.username}/>
            <BodyComponent />
        </>}
        {!(isLoggedIn) && <LoginComponent setLoginInfoHandler={setLoginInfo} />}
        {isLoggedIn && <FooterComponent />}
    </>
}