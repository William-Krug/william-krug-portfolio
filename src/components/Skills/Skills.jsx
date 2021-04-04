/* Import Libraries */
import React from 'react';

/* Import Styling */
import {
  Box,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  content: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function Skills() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        <Box m={10}>
          <Typography variant="h2" component="h1">
            Skills
          </Typography>
        </Box>
        <Box mt={5} mr={20} mb={5} ml={20}>
          <Typography variant="h3" component="h2" gutterBottom>
            Programming Languages
          </Typography>
          <List>
            <ListItem>
              <ListItemText></ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box mt={5} mr={20} mb={5} ml={20}>
          <Typography variant="h3" component="h2" gutterBottom>
            Soft Skills
          </Typography>
          <List>
            <ListItem>
              <ListItemText></ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box mt={5} mr={20} mb={5} ml={20}>
          <Typography variant="h3" component="h2" gutterBottom>
            Programming Languages
          </Typography>
          <List>
            <ListItem>
              <ListItemText></ListItemText>
            </ListItem>
          </List>
        </Box>
      </div>
    </main>
  );
}

export default Skills;
