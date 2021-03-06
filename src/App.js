import {  React } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Dashboard from './components/layout/dashboard'
import SignUp from './components/auth/signUp';
import Login from './components/auth/login';
import Celebrate from './components/celebration';
import styles from './AppStyle';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplayComments from './components/comments/displayComments';

const useStyles = makeStyles(styles);

function App() {

  const classes = useStyles();
  return (
    <Router>
      <Grid className={clsx(classes.app)}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Selebre
            </Typography>
          </Toolbar>
        </AppBar>
        <Route path="/signUp" component={SignUp} />
        <Route path="/logIn" component={Login} />
        <Route exact path={["/dashBoard", "/", "/addMantra", "/addWish", "/addEmployee"]} component={Dashboard} />
        <Route path="/wishes" component={DisplayComments} />
        <Route path="/celebrate" component={Celebrate} />
      </Grid >
    </Router>
  )
}

export default App;
