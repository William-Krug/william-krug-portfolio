/* Import Libraries */
import React from 'react';

/* Import Styling */
import { Box, Grid, Link, makeStyles, Typography } from '@material-ui/core';

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

function Projects() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        <Box m={10}>
          <Typography variant="h2" component="h1">
            Projects
          </Typography>
        </Box>
        <Box mt={5} mr={20} mb={5} ml={20}>
          <Grid container spacing={5}>
            {/* My Running Journal */}
            <Grid item xs={6}>
              <Box mb={10}>
                <Typography variant="h3" component="h2">
                  My Running Journal
                </Typography>
                <Link
                  href="https://my-running-journal.herokuapp.com/#/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://my-running-journal.herokuapp.com/#/home
                </Link>
                <Box mt={3} mb={3}>
                  <Typography variant="body1" component="p">
                    Full stack application built to track users' logged runs and
                    provide metrics around distance, time, speed, and pacing so
                    that users can track their progress and feel better prepared
                    for their next event. App was built with{' '}
                    <strong>React</strong>, <strong>Redux</strong>,{' '}
                    <strong>Node.js</strong>, <strong>Express.js</strong>,{' '}
                    <strong>PostgreSQL</strong>, <strong>Material-UI</strong>,
                    and <strong>Charts.js</strong>.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Contrive */}
            {/* <Grid item xs={6}>
              <Box mb={10}>
                <Typography variant="h3" component="h2">
                  Contrive
                </Typography>
                <Link href="" target="_blank" rel="noreferrer"></Link>
                <Box mt={3} mb={3}>
                  <Typography variant="body1" component="p">
                    Coming Soon
                  </Typography>
                </Box>
              </Box>
            </Grid> */}

            {/* Unit Testing */}
            {/* <Grid item xs={6}>
              <Box mb={10}>
                <Typography variant="h3" component="h2">
                  Unit Testing
                </Typography>
                <Link href="" target="_blank" rel="noreferrer"></Link>
                <Box mt={3} mb={3}>
                  <Typography variant="body1" component="p">
                    Coming Soon
                  </Typography>
                </Box>
              </Box>
            </Grid> */}

            {/* Karel Robot */}
            <Grid item xs={6}>
              <Box mb={10}>
                <Typography variant="h3" component="h2">
                  Karel Robot
                </Typography>
                <Link
                  href="https://github.com/William-Krug/karelRobot"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/William-Krug/karelRobot
                </Link>
                <Box mt={3} mb={3}>
                  <Typography variant="body1" component="p">
                    An exercise in Object-Oriented Programming, taking Richard
                    Pattis's <em>Karel Robot</em> concept and recreating it in{' '}
                    <strong>Java</strong>. Like Pattis's <em>Karel</em>, these
                    robots have beepers, move around the world and must avoid
                    obstacles in their path.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Valout Enterprises */}
            <Grid item xs={6}>
              <Box mb={10}>
                <Typography variant="h3" component="h2">
                  Valour Enterprises
                </Typography>
                <Link
                  href="https://github.com/William-Krug/Valour-Enterprises"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/William-Krug/Valour-Enterprises
                </Link>
                <Box mt={3} mb={3}>
                  <Typography variant="body1" component="p">
                    Website mockup for a fictional suite of companies. Written
                    using vanilla <strong>HTML</strong> and <strong>CSS</strong>
                    , this project gave me a good foundation on how HTML
                    elements function and their interaction with different CSS
                    displays.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </main>
  );
}

export default Projects;
