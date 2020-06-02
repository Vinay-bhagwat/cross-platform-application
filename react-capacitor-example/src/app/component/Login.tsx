import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            flex: '1',
            alignContent: 'center',
            justifyContent: 'center',

            height: '75vh'
        },
        textBox: {
            width: '50% !important'
        },
        paper: {
            width: '60%',
            background: 'aliceblue',
            height: '50px',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center'
        }
    }),
);


export interface ILoginInfo {
    username: string,
    password: string
}

export const LoginComponent: React.FC<{ setLoginInfoHandler: (loginInfo: ILoginInfo) => void }> = (props) => {
    const classes = useStyles();
    const [loginInfo, setLoginInfo] = useState({ username: undefined, password: undefined })

    const onSubmitHandler = () => {
        props.setLoginInfoHandler(loginInfo)
    }
       

    return <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmitHandler}>

        <div className={classes.container}>
            <Paper className={classes.paper}>Login Form</Paper>
            <TextField
                id="standard-password-input"
                label="User Name"
                type="text"
                required
                className={classes.textBox}
                onChange={(e) => setLoginInfo({ ...loginInfo, username: e.target.value })}
            />
            <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                required
                className={classes.textBox}
                onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
            />
            <Button disabled={!(loginInfo.username && loginInfo.password)} color='primary' variant='contained' size="large" type='submit'>Log in</Button>
        </div>
    </form>
}