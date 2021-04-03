/* Import Libraries */
import React from 'react';

/* Import Styles */
import {
  Box,
  CssBaseline,
  Grid,
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

function About() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <CssBaseline />
      <div className={classes.toolbar}>
        <Box m={10}>
          <Typography variant="h2" component="h1">
            About Me
          </Typography>
        </Box>
        <Box mt={5} mr={20} mb={5} ml={20}>
          <Typography variant="body1" component="p">
            Decisiveness, grit, problem-solving, these are not simply buzz words
            but superpowers I bring to the table. Whether it's working on a car,
            coding, or life in general, I process all situations, big or small,
            the same. I analyze the situation, break down the problem into more
            manageable chunks, decide on a course of action, and work the
            smaller problems until the whole is complete.
          </Typography>
        </Box>
        <Box mt={5} mr={20} mb={5} ml={20}>
          <Typography variant="body1" component="p">
            My professional career started in the shop working on cars. I find
            an elegant relationship between auto mechanics and programming. When
            a car comes in, the customer has a problem. Something is broken, not
            working right or maintenance is needed. I have a tool box, inside
            that tool box are all the tools at my disposal to diagnose what is
            going on with the car and fix it so that it can get back on the
            road. Programming is much the same. A customer (internal or
            external) has a problem, there's a bug in the code or a new piece of
            software needing to be written. Instead of a tool box, I have the
            language being used, in place of my tools is the syntax of that
            language. Once again, I need to use those tools to diagnose what is
            going on, fix the problem and get the code base back up so that I
            have a happy customer. Paralleling my work with Audi, I strive to
            work with Tier 1 programmers and apps that have power behind them,
            but grace and sophistication as well.
          </Typography>
        </Box>
        <Box mt={5} mr={20} mb={5} ml={20}>
          <Typography variant="body1" component="p">
            In my free time I love to run. For fun, for sport, for peace of
            mind, running can handle it all. Whether I'm training for a 5, OCR
            (obstacle course race), or marathon, putting foot to pavement brings
            a sense of peace and calm that washes away troubles and brings peace
            of mind. I often find myself finding solutions to all sorts of
            questions and problems while on a run that previously eluded me. For
            me, running isn't jut a hobby but a necessity to traverse the paths
            in life.
          </Typography>
        </Box>
      </div>
    </main>
  );
}

export default About;
