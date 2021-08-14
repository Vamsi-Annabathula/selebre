import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.js'
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Grid
} from '@material-ui/core';
import { postMantra, saveMantra } from '../../actions/mantra.js';

const useStyles = makeStyles(styles);

function RecordMantra(props) {
    const {
        initialButtonText,
        onSayButtonText,
        onStopButtonText,
        displayText,
        isCeleb,
        blowCandles
    } = props;
    //const defaultMantra = "Blow the candles"
    const [mantra, setMantra] = useState()
    const classes = useStyles();
    const [note, setNote] = useState(initialButtonText);
    const [checkSpell, setCheckSpell] = useState();
    const dispatch = useDispatch();

    const isMantraRecordingFailed = useSelector(state => state.mantra?.error);
    const isMantraRecorded = useSelector(state => state.mantra?.isMantraRecorded);
    const recordingError = useSelector(state => state.mantra?.errorInfo);
    const defaultMantra = useSelector(state => state.mantra?.mantra);

    useEffect(() => {
        if (checkSpell === defaultMantra) {
            blowCandles()
        }
    }, [checkSpell])

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
            setMantra(transcript);
            if (isCeleb) setCheckSpell(transcript)
        };

        // start recognition
        recognition.start();
    }

    const submitMantra = (mantra) => {
        const res = {
            'userId': 2,
            "mantra": mantra
        }
        dispatch(postMantra(res))
    }
    return (
        <Grid className={classes.mantraHeader}>
            <Grid item>
                <Button variant="contained" color="primary" onClick={runSpeechRecognition}>
                    {note}
                </Button>
            </Grid>
            <Grid item className={classes.mantraText}>
                {(<h4 >{displayText}- {mantra}</h4>)}
            </Grid>
            {!isCeleb && (
                <Grid item>
                    <Button variant="contained" color="primary" onClick={() => submitMantra(mantra)} >
                        Save the Mantra
                    </Button>
                    <br></br>
                    {isMantraRecordingFailed ? "There was an error saving the mantra, please try again."
                        : isMantraRecorded ? "Mantra recorded successfully" : ""}
                    {recordingError}
                </Grid>
            )}

        </Grid>
    );
}

export default RecordMantra;
