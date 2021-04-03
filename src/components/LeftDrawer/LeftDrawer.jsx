/* Import Libraries */
import React from 'react';
import { useHistory } from 'react-router-dom';

/* Import Components */

/* Import Styles */
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AppsIcon from '@material-ui/icons/Apps';
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
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  clickableIcon: {
    '&:hover': {
      color: '#ED2939',
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
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            William Krug
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Grid container justify="center">
          <Grid item>
            <div className={classes.root}>
              <Avatar
                alt="William Krug"
                src={headshot}
                className={classes.large}
              />
            </div>
          </Grid>
        </Grid>
        <Divider />
        <List>
          <ListItem button key={'Home'} onClick={history.push('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>

          <ListItem button key={'Projects'} onClick={history.push('/projects')}>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary={'Projects'} />
          </ListItem>

          <ListItem
            button
            key={'Experience'}
            onClick={history.push('/experience')}
          >
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={'Experience'} />
          </ListItem>

          <ListItem
            button
            key={'Education'}
            onClick={history.push('/eduction')}
          >
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary={'Education'} />
          </ListItem>

          <ListItem button key={'About'} onClick={history.push('/about')}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={'About'} />
          </ListItem>

          <ListItem button key={'Contact'} onClick={history.push('/contact')}>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary={'Contact'} />
          </ListItem>
        </List>
        <Box>
          <Grid container justify="center" alignItems="flex-end">
            <Grid item>
              <Box mt={45}>
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
