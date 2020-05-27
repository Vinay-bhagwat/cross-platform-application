import React, { useEffect, useState } from 'react';
import { Container, ListSubheader } from '@material-ui/core';
import { Geolocation, GeolocationPosition } from '@capacitor/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export const GeoLocationComponent: React.FC<{}> = () => {
    const getGeolocation = async () => await Geolocation.getCurrentPosition(),
        initialState: GeolocationPosition = {
            coords: {
                accuracy: 0,
                altitude: 0,
                altitudeAccuracy: 0,
                heading: 0,
                latitude: 0,
                longitude: 0,
                speed: 0
            },
            timestamp: 0
        },
        [currentLocation, setCurrentLocation] = useState(initialState)


    useEffect(() => {
        getGeolocation()
            .then((currentLocation: GeolocationPosition) => {
                const { coords: {
                    accuracy, altitude, altitudeAccuracy,
                    heading, latitude, longitude, speed },
                    timestamp } = currentLocation

                setCurrentLocation({
                    coords: {
                        accuracy,
                        altitude,
                        altitudeAccuracy,
                        heading,
                        latitude,
                        longitude,
                        speed
                    },
                    timestamp
                }
                )
            })
    }, [])

    
    return <Container>
         <List subheader={<ListSubheader>Location Info :</ListSubheader>}>
            {Object.keys(currentLocation.coords)
                   .map(locationInfo =>
                    <ListItem key={locationInfo} role={undefined} dense>
             <ListItemText id={locationInfo} style={{textTransform: 'uppercase',fontWeight:'bold'}} primary={locationInfo} />
            <ListItemText id={locationInfo} style={{textAlign: 'left'}} primary={currentLocation.coords[locationInfo] ?? 0} />
          </ListItem>
                   )}      
         </List>
    
         <List> <ListItem>Current Time: {new Date(currentLocation.timestamp).toDateString()}</ListItem> </List>
    </Container>
}

