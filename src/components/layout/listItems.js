import React from 'react';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CakeIcon from '@material-ui/icons/Cake';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import './listItems.css'

export const mainListItems = (
    <div>
        <Link to="/addEmployee" className="menu">
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Employees" />
            </ListItem>
        </Link>
        <Link to="/addMantra" className="menu">
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Mantra" />
            </ListItem>
        </Link>
        <Link to="/celebrate" className="menu">
            <ListItem button>
                <ListItemIcon>
                    <CakeIcon />
                </ListItemIcon>
                <ListItemText primary="Celebrate" />
            </ListItem>
        </Link>
        <Link to="/wishes" className="menu">
            <ListItem button>
                <ListItemIcon>
                    <AcUnitIcon />
                </ListItemIcon>
                <ListItemText primary="Wishes" />
            </ListItem>
        </Link>
        <Link to="/addWish" className="menu">
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Add Wish" />
            </ListItem>
        </Link>
    </div>
);

export const secondaryListItems = (
    <div>
        <Link to="/signUp" className="menu">
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Sign Up" />
            </ListItem>
        </Link>
        <Link to="/logIn" className="menu">
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Log In" />
            </ListItem>
        </Link>
        {/* <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>*/}
    </div>
);