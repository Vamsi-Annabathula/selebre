import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    Typography
} from '@material-ui/core';
import './style.css';
import styles from './style';
import RecordMantra from '../recordMantra';
import { fetchRecordedMantra, fetchPostedMantra } from '../../actions/mantra';

const useStyles = makeStyles(styles);
export default function Celebrate() {
    const classes = useStyles();
    const dispatch = useDispatch();
    dispatch(fetchRecordedMantra());
    const mantra = useSelector(state => state.mantra?.mantra);
    
    return (
        <Grid component="main" maxWidth="xs" direction='row'>
            <CssBaseline />
            <Grid item className={classes.celebMantraText}>
                
                <Typography component="h1" variant="h6" color="inherit" noWrap >
                    Say this mantra to blow the candle -- {mantra} "Aabra Ka Daabra"
                </Typography>
            </Grid>
            <Grid item className={classes.recordMantra} >
                <RecordMantra
                    initialButtonText={"Spell"}
                    displayText={"You Spelled"}
                    onSayButtonText = {"Spell"}
                    onStopButtonText = {"Spelled"}
                    isCeleb
                />
            </Grid>
            <Grid item>
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
            </Grid>
        </Grid>
    );
}