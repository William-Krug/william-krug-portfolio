/* Import Libraries */
import React from 'react';

/* Import Project List */
import { projectsList } from './ProjectsList';

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
                    <Typography
                      variant="body1"
                      component="p"
                      class={project.deployed === '' ? 'hidden' : ''}
                    >
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
            );
          })}
        </Grid>
      </Box>
    </main>
  );
}

export default Projects;
