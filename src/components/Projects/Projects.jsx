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
            <Grid item xs={6}>
              <Box mb={10}>
                <Typography variant="h3" component="h2">
                  My Running Journal
                </Typography>
                <Link href="" target="_blank" rel="noreferrer"></Link>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box mb={10}>
                <Typography variant="h3" component="h2">
                  Contrive
                </Typography>
                <Link href="" target="_blank" rel="noreferrer"></Link>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box mb={10}>
                <Typography variant="h3" component="h2">
                  Unit Testing
                </Typography>
                <Link href="" target="_blank" rel="noreferrer"></Link>
              </Box>
            </Grid>
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
              </Box>
            </Grid>
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
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </main>
  );
}

export default Projects;
