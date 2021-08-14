import { useState } from 'react';
import styles from './style.js'
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Grid
} from '@material-ui/core';

const useStyles = makeStyles(styles);

function RecordMantra(props) {
    const {
        initialButtonText,
        onSayButtonText,
        onStopButtonText,
        displayText,
        isCeleb
    } = props;
    //const defaultMantra = "Blow the candles"
    const [mantra, setMantra] = useState()
    const classes = useStyles();
    const [note, setNote] = useState(initialButtonText)

    const runSpeechRecognition = () => {
        let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        let recognition = new SpeechRecognition();

        // This runs when the speech recognition service starts
        recognition.onstart = function () {
            setNote(onSayButtonText)
            //action.innerHTML = "<small>listening, please speak...</small>";
        };

        recognition.onspeechend = function () {
            setNote(onStopButtonText)
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
        <Grid className={classes.mantraHeader}>
            <Grid item>
                <Button variant="contained" color="primary" onClick={runSpeechRecognition}>
                    {note}
                </Button>
            </Grid>
            <Grid item className={classes.mantraText}>
                {(<h4 >{displayText} -{mantra}</h4>)}
            </Grid>
            {!isCeleb && (
                <Grid item>
                    <Button variant="contained" color="primary" >
                        Save the Mantra
                    </Button>
                </Grid>
            )}

        </Grid>
    );
}

export default RecordMantra;
