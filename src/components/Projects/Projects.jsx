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
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Full stack application built to track users' logged runs and
                  provide metrics around distance, time, speed, and pacing so
                  that users can track their progress and feel better prepared
                  for their next event.
                </Typography>
              </Box>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Technologies Used: React, Redux, Sagas, Node.js, Express.js,
                  PostgreSQL, Postico, Material-UI, Moment, SweetAlert, and
                  Charts.js
                </Typography>
              </Box>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Dive into the repo on GitHub{' '}
                  <Link
                    href="https://github.com/William-Krug/my-running-journal"
                    target="_blank"
                    rel="noreferrer"
                    color="secondary"
                  >
                    here
                  </Link>
                  .
                </Typography>
                <Typography variant="body1" component="p">
                  See the deployed app{' '}
                  <Link
                    href="https://my-running-journal.herokuapp.com/#/home"
                    target="_blank"
                    rel="noreferrer"
                    color="secondary"
                  >
                    here
                  </Link>
                  .
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
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Coming Soon
                </Typography>
              </Box>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Technologies Used: React, Redux, Sagas, Node.js, Express.js,
                  PostgreSQL, Postico, Material-UI, Moment, SweetAlert, and
                  Charts.js
                </Typography>
              </Box>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Dive into the repo on GitHub{' '}
                  <Link
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    color="secondary"
                  >
                    here
                  </Link>
                  .
                </Typography>
                <Typography variant="body1" component="p">
                  See the deployed app{' '}
                  <Link
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    color="secondary"
                  >
                    here
                  </Link>
                  .
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
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Coming Soon
                </Typography>
              </Box>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Technologies Used: React, Redux, Sagas, Node.js, Express.js,
                  PostgreSQL, Postico, Material-UI, Moment, SweetAlert, and
                  Charts.js
                </Typography>
              </Box>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Dive into the repo on GitHub{' '}
                  <Link
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    color="secondary"
                  >
                    here
                  </Link>
                  .
                </Typography>
                <Typography variant="body1" component="p">
                  See the deployed app{' '}
                  <Link
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    color="secondary"
                  >
                    here
                  </Link>
                  .
                </Typography>
              </Box>
            </Box>
          </Grid> */}

          {/* SQL To Do List */}
          <Grid item xs={6}>
            <Box mb={10}>
              <Typography variant="h3" component="h2">
                SQL To Do List
              </Typography>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Full stack application built to track users' logged runs and
                  provide metrics around distance, time, speed, and pacing so
                  that users can track their progress and feel better prepared
                  for their next event.
                </Typography>
              </Box>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Technologies Used: JavaScript, jQuery, Node.js, Express.js,
                  Postico, PostgreSQL
                </Typography>
              </Box>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Dive into the repo on GitHub{' '}
                  <Link
                    href="https://github.com/William-Krug/sql-to-do-list"
                    target="_blank"
                    rel="noreferrer"
                    color="secondary"
                  >
                    here
                  </Link>
                  .
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Movie Sagas */}
          <Grid item xs={6}>
            <Box mb={10}>
              <Typography variant="h3" component="h2">
                Movie Sagas
              </Typography>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Full stack application built to track users' logged runs and
                  provide metrics around distance, time, speed, and pacing so
                  that users can track their progress and feel better prepared
                  for their next event.
                </Typography>
              </Box>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Technologies Used: JavaScript, Node.js, Express.js, React,
                  Redux, Postico, PostgreSQL
                </Typography>
              </Box>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Dive into the repo on GitHub{' '}
                  <Link
                    href="https://github.com/William-Krug/movie-sagas"
                    target="_blank"
                    rel="noreferrer"
                    color="secondary"
                  >
                    here
                  </Link>
                  .
                </Typography>
                <Typography variant="body1" component="p">
                  See the deployed app{' '}
                  <Link
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    color="secondary"
                  >
                    here
                  </Link>
                  .
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Karel Robot */}
          <Grid item xs={6}>
            <Box mb={10}>
              <Typography variant="h3" component="h2">
                Karel Robot
              </Typography>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  An exercise in Object-Oriented Programming, taking Richard
                  Pattis's <em>Karel Robot</em> concept and recreating it in{' '}
                  Java. Like Pattis's <em>Karel</em>, these robots have beepers,
                  move around the world and must avoid obstacles in their path.
                </Typography>
              </Box>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Technologies Used: Java
                </Typography>
              </Box>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Dive into the repo on GitHub{' '}
                  <Link
                    href="https://github.com/William-Krug/karelRobot"
                    target="_blank"
                    rel="noreferrer"
                    color="secondary"
                  >
                    here
                  </Link>
                  .
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Valour Enterprises */}
          <Grid item xs={6}>
            <Box mb={10}>
              <Typography variant="h3" component="h2">
                Valour Enterprises
              </Typography>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Website mockup for a fictional suite of companies.This project
                  gave me a good foundation on how HTML elements function and
                  their interaction with different CSS displays.
                </Typography>
              </Box>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Technologies Used: HTML and CSS
                </Typography>
              </Box>
              <Box mt={3} mb={3}>
                <Typography variant="body1" component="p">
                  Dive into the repo on GitHub{' '}
                  <Link
                    href="https://github.com/William-Krug/Valour-Enterprises"
                    target="_blank"
                    rel="noreferrer"
                    color="secondary"
                  >
                    here
                  </Link>
                  .
                </Typography>
                <Typography variant="body1" component="p">
                  See the deployed app{' '}
                  <Link
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    color="secondary"
                  >
                    here
                  </Link>
                  .
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}

export default Projects;
