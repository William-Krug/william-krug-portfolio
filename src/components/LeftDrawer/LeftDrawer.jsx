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

/* Import Icons */
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AppsIcon from '@material-ui/icons/Apps';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

/* Import Avatar Photo */
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
  navLink: {
    '&:hover': {
      backgroundColor: '#d32f2f',
      '& $kid': {
        color: '#ffffff',
      },
    },
  },
  kid: {},
}));

function LeftDrawer() {
  const classes = useStyles();
  const history = useHistory();

  // List of navigation links
  const menuItems = [
    {
      text: 'Home',
      icon: <HomeIcon />,
      path: '/',
    },
    {
      text: 'Projects',
      icon: <AppsIcon />,
      path: '/projects',
    },
    {
      text: 'Skills',
      icon: <CodeIcon />,
      path: '/skills',
    },
    {
      text: 'Experience',
      icon: <WorkIcon />,
      path: '/experience',
    },
    {
      text: 'Education',
      icon: <SchoolIcon />,
      path: '/education',
    },
    {
      text: 'About',
      icon: <InfoIcon />,
      path: '/about',
    },
    {
      text: 'Contact',
      icon: <AccountBoxIcon />,
      path: '/contact',
    },
  ];

  // List of social media links
  const socialMedia = [
    {
      icon: <GitHubIcon className={classes.clickableIcon} />,
      link: 'https://github.com/William-Krug',
    },
    {
      icon: <LinkedInIcon className={classes.clickableIcon} />,
      link: 'https://www.linkedin.com/in/william-krug-67a86ab6/',
    },
  ];

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
          {menuItems.map((item) => {
            return (
              <ListItem
                className={classes.navLink}
                button
                key={item.text}
                onClick={() => history.push(item.path)}
              >
                <ListItemIcon className={classes.kid}>{item.icon}</ListItemIcon>
                <ListItemText className={classes.kid} primary={item.text} />
              </ListItem>
            );
          })}
        </List>

        {/* Social Media */}
        <Box>
          <Grid container justify="center" alignItems="flex-end">
            <Grid item>
              <Box mt={30}>
                {socialMedia.map((item) => {
                  return (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      color="inherit"
                    >
                      {item.icon}
                    </Link>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </div>
  );
}

export default LeftDrawer;
