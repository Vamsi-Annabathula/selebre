import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    Button,
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
    const [mantra, setMantra] = useState()
    const [blowCandle, setBlowCandle] = useState(false)
    const [note, setNote] = useState("Spell");
    const [checkSpell, setCheckSpell] = useState();


    var flame = "flame";

    useEffect(() => {
        dispatch(fetchRecordedMantra())
    }, []);
    useEffect(() => {
        if (checkSpell === defaultMantra) {
            flame = "";
        }
    }, [checkSpell])

    const defaultMantra = useSelector(state => state.mantra?.mantra);

    function blowCandles() {
        setBlowCandle(true)
    }
    const runSpeechRecognition = () => {
        let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        let recognition = new SpeechRecognition();

        // This runs when the speech recognition service starts
        recognition.onstart = function () {
            setNote("Spell")
            //action.innerHTML = "<small>listening, please speak...</small>";
        };

        recognition.onspeechend = function () {
            setNote("Spelled")
            recognition.stop();
        }

        // This runs when the speech recognition service returns result
        recognition.onresult = function (event) {
            let transcript = event.results[0][0].transcript;
            setMantra(transcript);
            setCheckSpell(transcript)
        };

        // start recognition
        recognition.start();
    }
    return (
        <Grid component="main" maxWidth="xs" direction='row'>
            <CssBaseline />
            <Grid item className={classes.celebMantraText}>

                <Typography component="h1" variant="h6" color="inherit" noWrap >
                    Say this mantra to blow the candle -- {mantra} "Aabra Ka Daabra"
                </Typography>
            </Grid>
            <Grid item className={classes.recordMantra} >
                {/* <RecordMantra
                    initialButtonText={"Spell"}
                    displayText={"You Spelled"}
                    onSayButtonText={"Spell"}
                    onStopButtonText={"Spelled"}
                    isCeleb
                    blowCandles={blowCandles}
                /> */}

                <Grid className={classes.mantraHeader}>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={runSpeechRecognition}>
                            {note}
                        </Button>
                    </Grid>
                    <Grid item className={classes.mantraText}>
                        {(<h4 > "You spelled"- {mantra}</h4>)}
                    </Grid>
                </Grid>
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
                        <div className={flame}> </div>
                    </div>
                </div>
            </Grid>
        </Grid >
    );
}