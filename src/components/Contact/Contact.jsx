/* Import Libraries */
import React from 'react';

/* Import Styling */
import { Box, Grid, Link, makeStyles, Typography } from '@material-ui/core';

// Global variable to Navigation sidebar
const drawerWidth = 240;

// Custom theme setup
const useStyles = makeStyles((theme) => ({
  content: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

/**
 * Component provides ways to get ahold of me
 *
 * @returns {jsx} renders Contact page
 */
function Contact() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      {/* Page Heading */}
      <Box m={10}>
        <Typography variant="h2" component="h1">
          Contact Me
        </Typography>
      </Box>

      {/* Contact Details */}
      <Box mt={5} mr={20} mb={5} ml={20}>
        <Box mb={5}>
          {/* Name */}
          <Box mt={2} mb={2} ml={3}>
            <Typography variant="h3" component="h2">
              William Krug
            </Typography>
          </Box>

          {/* Location */}
          <Box mt={2} ml={3}>
            <Typography variant="body1" component="p">
              <strong>Location:</strong> Twin Cities, Minnesota
            </Typography>
          </Box>

          {/* GitHub */}
          <Box mt={2} ml={3}>
            <Typography variant="body1" component="p">
              <strong>GitHub:</strong>{' '}
              <Link
                href="https://github.com/William-Krug"
                target="_blank"
                rel="noreferrer"
                color="info"
              >
                github.com/William-Krug
              </Link>
            </Typography>
          </Box>

          {/* LinkedIn */}
          <Box mt={2} ml={3}>
            <Typography variant="body1" component="p">
              <strong>LinkedIn:</strong>{' '}
              <Link
                href="https://www.linkedin.com/in/william-krug-67a86ab6/"
                target="_blank"
                rel="noreferrer"
                color="info"
              >
                linkedin.com/in/william-krug-67a86ab6
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </main>
  );
}

export default Contact;
