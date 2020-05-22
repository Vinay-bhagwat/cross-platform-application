import React from 'react';
import { Container } from '@material-ui/core';
import { Plugins,GeolocationPosition } from '@capacitor/core';



export const BodyComponent:React.FC<{}>=()=>{
    const getGeolocation=async()=>await Plugins.Geolocation.getCurrentPosition();
    return <Container>
     {<div>{ getGeolocation().then(location=>{
return <>
<div>Location Co-ordinate: {location.coords}</div>
<div>Current Time: {location.timestamp}</div>
</>
     })}</div>}
    </Container>
}