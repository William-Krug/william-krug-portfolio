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
      {/* Page Heading */}
      <Box m={10}>
        <Typography variant="h2" component="h1">
          Projects
        </Typography>
      </Box>

      {/* Projects List */}
      <Box mt={5} mr={20} mb={5} ml={20}>
        <Grid container spacing={5}>
          {projectsList.map((project) => {
            return (
              <Grid item xs={6}>
                <Box mb={10}>
                  {/* Project Title */}
                  <Typography variant="h3" component="h2">
                    {project.title}
                  </Typography>

                  {/* Project Description */}
                  <Box mt={3} mb={3}>
                    <Typography variant="body1" component="p">
                      {project.description}
                    </Typography>
                  </Box>

                  {/* Technologies */}
                  <Box mt={3} mb={3}>
                    <Typography variant="body1" component="p">
                      Technologies Used: {project.technologies}
                    </Typography>
                  </Box>

                  {/* Links */}
                  <Box mt={3} mb={3}>
                    {/* GitHub */}
                    <Typography variant="body1" component="p">
                      Dive into the repo on{' '}
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        color="secondary"
                      >
                        GitHub
                      </Link>
                      .
                    </Typography>

                    {/* Deployed */}
                    <Typography
                      variant="body1"
                      component="p"
                      class={project.deployed === '' ? 'hidden' : ''}
                    >
                      See the deployed{' '}
                      <Link
                        href={project.deployed}
                        target="_blank"
                        rel="noreferrer"
                        color="secondary"
                      >
                        app
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
