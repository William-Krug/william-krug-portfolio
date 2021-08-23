/* Import Libraries */
import React from 'react';

/* Import Skills Lists */
import { hardSkills } from './HardSkills';
import { softSkills } from './SoftSkills';

/* Import Styling */
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
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
      <Box m={10}>
        <Typography variant="h2" component="h1">
          Skills
        </Typography>
      </Box>

      {/* Hard Skills */}
      <Box mt={5} mr={20} mb={5} ml={20}>
        <Typography variant="h3" component="h2" gutterBottom>
          Hard Skills
        </Typography>
        <List>
          {hardSkills.map((skill) => {
            return (
              <ListItem class="skills-list">
                {/* <ListItemAvatar>
                  <Avatar
                    alt={skill.name}
                    src={skill.icon}
                    className={classes.large}
                  />
                </ListItemAvatar> */}
                {skill.icon ? (
                  <img src={skill.icon} alt={skill.name} class="skills-icon" />
                ) : (
                  ''
                )}
                <ListItemText>{skill.name}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* Soft Skills */}
      <Box mt={5} mr={20} mb={5} ml={20}>
        <Typography variant="h3" component="h2" gutterBottom>
          Soft Skills
        </Typography>
        <List>
          {softSkills.map((skill) => {
            return (
              <ListItem>
                <ListItemText>{skill.skill}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </main>
  );
}

export default Skills;
