import { useState, React } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import RecordMantra from './components/recordMantra';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Dashboard from './components/layout/dashboard'

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="App">
      <Router>
        {/* toggle ?
          <Container maxWidth="sm">
            <RecordMantra />
          </Container>
          :
          <button onClick={() => { setToggle(!toggle) }}> clck </button> */}
        <Dashboard />
      </Router>
    </div >
  )
}

export default App;
