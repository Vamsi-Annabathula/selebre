import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './style.css'

//const useStyles = makeStyles(styles);

export default function Celebrate() {
    //const classNamees = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            Cake
            <div className="cake">
                <div className="plate"></div>
                <div className="layer layer-bottom"></div>
                <div className="layer layer-middle"></div>
                <div className="layer layer-top"></div>
                <div className="icing"></div>
                <div className="drip drip1"></div>
                <div className="drip drip2"></div>
                <div className="drip drip3"></div>
                <div className="candle">
                    <div className="flame"></div>
                </div>
            </div>
        </Container>
    );
}