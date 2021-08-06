/* Import Libraries */
import React from 'react';

/* Import Styling */
import './Projects.css';
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

  const projectsList = [
    {
      title: "My Running Journal",
      description: `Full stack application built to track users' logged runs and
                    provide metrics around distance, time, speed, and pacing so
                    that users can track their progress and feel better prepared
                    for their next event.`,
      technologies: `React, Redux, Sagas, Node.js, Express.js,
                     PostgreSQL, Postico, Material-UI, Moment, SweetAlert, and
                     Charts.js`,
      github: "https://github.com/William-Krug/my-running-journal",
      deployed: "https://my-running-journal.herokuapp.com/#/home",
    },
    {
      title: "Contrive",
      description: `Contrive is an event management software platform that
                    connects Event Planners with their local Vendors. With
                    enhanced search features, Planners can find the types of
                    Vendors they most want to do business with and can easily
                    connect with them utilizing the messaging feature.`,
      technologies: `React, Redux, Sagas, Node.js, Express.js, PostgreSQL, Postico, 
                     Material-UI, Socket.io, AWS S3 Buckets`,
      github: "https://github.com/Cullen-Contrive/Contrive",
      deployed: "https://contrive.herokuapp.com/",
    },
    {
      title: "Unit Testing",
      description: `This repo was created to practice unit testing and Test Driven
                    Development (TDD) practices. .test.js files were written first
                    to capture normal use cases and then edge cases of bad or
                    missing inputs. Implementation code was then written to handle
                    all test cases.`,
      technologies: `JavaScript, Node, Jest`,
      github: "https://github.com/William-Krug/javascript-unit-testing",
      deployed: "",
    },
    {
      title: "SQL To Do List",
      description: `Full stack application built to track users' logged runs and
                    provide metrics around distance, time, speed, and pacing so
                    that users can track their progress and feel better prepared
                    for their next event.`,
      technologies: `JavaScript, jQuery, Node.js, Express.js, Postico, PostgreSQL`,
      github: "https://github.com/William-Krug/sql-to-do-list",
      deployed: "",
    },
    {
      title: "Movie Sagas",
      description: `Full stack application built to track users' logged runs and
                    provide metrics around distance, time, speed, and pacing so
                    that users can track their progress and feel better prepared
                    for their next event.`,
      technologies: `JavaScript, Node.js, Express.js, React, Redux, Postico, PostgreSQL`,
      github: "https://github.com/William-Krug/movie-sagas",
      deployed: "",
    },
    {
      title: "Karel Robot",
      description: `An exercise in Object-Oriented Programming, taking Richard
                    Pattis's <em>Karel Robot</em> concept and recreating it in Java. 
                    Like Pattis's <em>Karel</em>, these robots have beepers, move 
                    around the world and must avoid obstacles in their path.`,
      technologies: `Java`,
      github: "https://github.com/William-Krug/karelRobot",
      deployed: "",
    },
    {
      title: "Valour Enterprises",
      description: `Website mockup for a fictional suite of companies.This project
                    gave me a good foundation on how HTML elements function and
                    their interaction with different CSS displays.`,
      technologies: `HTML and CSS`,
      github: "https://github.com/William-Krug/Valour-Enterprises",
      deployed: "",
    },
  ];

  return (
    <main className={classes.content}>
      <Box m={10}>
        <Typography variant="h2" component="h1">
          Projects
        </Typography>
      </Box>
      <Box mt={5} mr={20} mb={5} ml={20}>
        <Grid container spacing={5}>
          {projectsList.map((project) => {
            return (
              <Grid item xs={6}>
                <Box mb={10}>
                  <Typography variant="h3" component="h2">
                    {project.title}
                  </Typography>
                  <Box mt={3} mb={3}>
                    <Typography variant="body1" component="p">
                      {project.description}
                    </Typography>
                  </Box>
                  <Box mt={3} mb={3}>
                    <Typography variant="body1" component="p">
                      Technologies Used: {project.technologies}
                    </Typography>
                  </Box>
                  <Box mt={3} mb={3}>
                    <Typography variant="body1" component="p">
                      Dive into the repo on GitHub{' '}
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        color="secondary"
                      >
                        here
                      </Link>
                      .
                    </Typography>
                    <Typography variant="body1" component="p" class={project.deployed === '' ? "hidden" : ''}>
                      See the deployed app{' '}
                      <Link
                        href={project.deployed}
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
            )
          })}
        </Grid>
      </Box>
    </main>
  );
}

export default Projects;
