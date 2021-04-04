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

function Contact() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        <Box m={10}>
          <Typography variant="h2" component="h1">
            Contact Me
          </Typography>
        </Box>
        <Box mt={5}>
          <Grid container justify="center">
            <Grid item>
              <Grid container justify="center">
                <Grid item>
                  <Box mt={3} mb={1}>
                    <Typography variant="h3" component="h2">
                      William Krug
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box mt={2} mb={2} ml={3}>
                <Typography variant="body1" component="p">
                  <strong>Email:</strong> william.p.krug@gmail.com
                </Typography>
              </Box>
              <Box mt={2} mb={2} ml={3}>
                <Typography variant="body1" component="p">
                  <strong>Phone:</strong> +1 (651) 428-5553
                </Typography>
              </Box>
              <Box mt={2} mb={2} ml={3}>
                <Typography variant="body1" component="p">
                  <strong>Location:</strong> Twin Cities, Minnesota
                </Typography>
              </Box>
              <Box mt={2} mb={2} ml={3} mr={3}>
                <Typography variant="body1" component="p">
                  <strong>GitHub:</strong>{' '}
                  <Link
                    href="https://github.com/William-Krug"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/William-Krug
                  </Link>
                </Typography>
              </Box>
              <Box mt={2} mb={2} ml={3} mr={3}>
                <Typography variant="body1" component="p">
                  <strong>LinkedIn:</strong>{' '}
                  <Link
                    href="https://www.linkedin.com/in/william-krug-67a86ab6/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.linkedin.com/in/william-krug-67a86ab6/
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </main>
  );
}

export default Contact;
