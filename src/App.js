import { useState } from 'react';
import './App.css';

function App() {
  const defaultMantra = "Blow the candles"
  const [mantra, setMantra] = useState(defaultMantra)
  const [note, setNote] = useState()

  const isWindowContext = typeof window !== "undefined";

  const runSpeechRecognition = () => {
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function () {
      setNote("Say the mantra")
      //action.innerHTML = "<small>listening, please speak...</small>";
    };

    recognition.onspeechend = function () {
      setNote("Mantra recorded")
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
    <div className="App">
      <header className="App-header">
        The Mantra is <h4 >-- {mantra}</h4>
        <p>
          <button onClick={runSpeechRecognition}>Speech to Text</button>
          &nbsp;
          <span >{note}</span>
        </p>
      </header>
    </div>
  );
}

export default App;
