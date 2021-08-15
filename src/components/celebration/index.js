import { React, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Button,
    Typography,
    Container
} from '@material-ui/core';
import './style.css';
import styles from './style';
import {  fetchPostedMantra } from '../../actions/mantra';
import { ADMINID } from '../../utils';
import bdySong from '../../assests/music/bdy.mp3';

const useStyles = makeStyles(styles);
export default function Celebrate() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [mantra, setMantra] = useState()
    const [flame, setFlame] = useState("flame")
    const [note, setNote] = useState("Spell");
    const [checkSpell, setCheckSpell] = useState();
    const [playGif, setPlayGif] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const audioRef = useRef();

    const defaultMantra = useSelector(state => state.mantra?.mantra);

    useEffect(() => {
        if (defaultMantra != null)
            dispatch(fetchPostedMantra(ADMINID))
    });

    useEffect(() => {
        if (checkSpell === defaultMantra) {
            setFlame("off");
            audioRef.current.play();

            setTimeout(() => {
                setPlayGif(true)
            }, 2000);
            setTimeout(() => {
                setRedirect(true)
            }, 12500)
        }
    }, [checkSpell, defaultMantra])


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
            setMantra(transcript)
            setCheckSpell(transcript)
        };

        // start recognition
        recognition.start();
    }

    return (
        <Container>
            <Grid component="main" maxWidth="xs" direction='row'>
                <CssBaseline />
                <audio ref={audioRef} src={bdySong}></audio>

                {
                    flame !== "off" ? (<>
                        <Grid item className={classes.celebMantraText} style={{ display: flame === "Off" ? "none" : "" }}>

                            <Typography component="h1" variant="h6" color="inherit" noWrap >
                                Here, your mantra to get started😉:
                                <br></br>
                                "{defaultMantra}"
                            </Typography>
                        </Grid>

                        <Grid item className={classes.recordMantra} >
                            <Grid className={classes.mantraHeader}>
                                <Grid item>
                                    <Button className={"spell-button"} variant="contained" color="primary" onClick={runSpeechRecognition}>
                                        {note}
                                    </Button>
                                </Grid>
                                <Grid item className={classes.mantraText} style={{ fontSize: "1.25rem", textAlign: "left" }}>
                                    You spelled - {mantra}
                                </Grid>
                            </Grid>
                        </Grid> </>)
                        :
                        null
                }
                <div className="title">🤩 Let the Celebration Begin!🥳</div>


                {!playGif ? (
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
                ) :
                    <Grid item>
                        <img src="https://i.gifer.com/9FMN.gif" className={classes.cakeGif} alt = "cake-cutting"/>
                    </Grid>
                }
                {
                    redirect ?
                        <Redirect push to='/wishes' />
                        :
                        null
                }
            </Grid >
        </Container>
    );
}