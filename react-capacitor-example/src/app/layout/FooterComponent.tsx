import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    appbar: {
        alignItems: "center",
        justifyContent:'center',
        height:'10vh'
    }
}));


export const FooterComponent: React.FC<{}> = () => {
    const classes = useStyles();
    return <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
            <Typography className={classes.title} variant="h6" noWrap>
                Footer
          </Typography>
        </AppBar>
    </div>

}