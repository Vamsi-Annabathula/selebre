import { useState } from 'react';
import styles from './style.js'
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Grid
} from '@material-ui/core';

const useStyles = makeStyles(styles);

function RecordMantra() {
    //const defaultMantra = "Blow the candles"
    const [mantra, setMantra] = useState()
    const classes = useStyles();
    const [note, setNote] = useState("Record Mantra")

    const runSpeechRecognition = () => {
        let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        let recognition = new SpeechRecognition();

        // This runs when the speech recognition service starts
        recognition.onstart = function () {
            setNote("Say the mantra")
            //action.innerHTML = "<small>listening, please speak...</small>";
        };

        recognition.onspeechend = function () {
            setNote("Record Mantra")
            recognition.stop();
        }

        // This runs when the speech recognition service returns result
        recognition.onresult = function (event) {
            let transcript = event.results[0][0].transcript;
            setMantra(transcript)
        };

        // start recognition
        recognition.start();
    }

    return (
        <Grid className={classes.mantraHeader} direction='column'>
            <Grid item>
                <Button variant="contained" color="primary" onClick={runSpeechRecognition}>
                    {note}
                </Button>
            </Grid>
            <Grid item className={classes.mantraText}>
                The Mantra is <h4 >-- {mantra}</h4>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" >
                    Save the Mantra
                </Button>
            </Grid>
        </Grid>
    );
}

export default RecordMantra;
