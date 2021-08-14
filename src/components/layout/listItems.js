import React from 'react';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './listItems.css'

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Employees" />
        </ListItem>
        <Link to="/dashBoard/mantra" className="menu">
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Mantra" />
            </ListItem>
        </Link>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>pages other link (Temp)</ListSubheader>
        <Link to="/dashboard/addComment" className="menu">
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Add Comment" />
            </ListItem>
        </Link>
        <Link to="/celebrate" className="menu">
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Celebrate" />
            </ListItem>
        </Link>
        {/* <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem> */}
    </div>
);