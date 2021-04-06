/* Import Libraries */
import React from 'react';
import { useHistory } from 'react-router-dom';

/* Import Styles */
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AppsIcon from '@material-ui/icons/Apps';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

import headshot from '../images/william-headshot.jpg';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: theme.palette.background.default,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  clickableIcon: {
    '&:hover': {
      color: '#d32f2f',
    },
    margin: 15,
  },
}));

function LeftDrawer() {
  const classes = useStyles();
  const history = useHistory();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />

        {/* Avatar */}
        <Grid container justify="center">
          <Grid item>
            <Box mt={10}>
              <div className={classes.root}>
                <Avatar
                  alt="William Krug"
                  src={headshot}
                  className={classes.large}
                />
              </div>
            </Box>
          </Grid>
          <Grid container justify="center">
            <Grid item>
              <Typography variant="subtitle2" component="p">
                William Krug
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />

        {/* Navigation Links */}
        <List>
          {/* Home */}
          <ListItem button key={'Home'} onClick={() => history.push('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>

          {/* Projects */}
          <ListItem
            button
            key={'Projects'}
            onClick={() => history.push('/projects')}
          >
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary={'Projects'} />
          </ListItem>

          {/* Skills */}
          {/* <ListItem
            button
            key={'Skills'}
            onClick={() => history.push('/skills')}
          >
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary={'Skills'} />
          </ListItem> */}

          {/* Experience */}
          <ListItem
            button
            key={'Experience'}
            onClick={() => history.push('/experience')}
          >
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={'Experience'} />
          </ListItem>

          {/* Education */}
          <ListItem
            button
            key={'Education'}
            onClick={() => history.push('/education')}
          >
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary={'Education'} />
          </ListItem>

          {/* About */}
          <ListItem button key={'About'} onClick={() => history.push('/about')}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={'About'} />
          </ListItem>

          {/* Contact */}
          <ListItem
            button
            key={'Contact'}
            onClick={() => history.push('/contact')}
          >
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary={'Contact'} />
          </ListItem>
        </List>

        {/* Social Media */}
        <Box>
          <Grid container justify="center" alignItems="flex-end">
            <Grid item>
              <Box mt={30}>
                <Link
                  href="https://github.com/William-Krug"
                  target="_blank"
                  rel="noreferrer"
                  color="inherit"
                  onClick={preventDefault}
                >
                  <GitHubIcon className={classes.clickableIcon} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/william-krug-67a86ab6/"
                  target="_blank"
                  rel="noreferrer"
                  color="inherit"
                  onClick={preventDefault}
                >
                  <LinkedInIcon className={classes.clickableIcon} />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </div>
  );
}

export default LeftDrawer;
