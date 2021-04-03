/* Import Libraries */
import React from 'react';

/* Import Components */

/* Import Styling */
import { Box, CssBaseline, makeStyles, Typography } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  // toolbar: theme.mixins.toolbar,
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
      <CssBaseline />
      <div className={classes.toolbar}>
        <Box mt={10} ml={10} mb={10}>
          <Typography variant="h2" component="h1">
            Contact Me
          </Typography>
        </Box>
      </div>
    </main>
  );
}

export default Contact;
