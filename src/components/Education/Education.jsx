/* Import Libraries */
import React from 'react';

/* Import Styling */
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

import prime from '../images/prime.jpeg';

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

function Education() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <CssBaseline />
      <div className={classes.toolbar}>
        <Box m={10}>
          <Typography variant="h2" component="h1">
            Education
          </Typography>
        </Box>
        <Box mt={5} mr={20} mb={5} ml={20}>
          <Grid container justify="space-between">
            <Grid item xs={8}>
              <Card>
                <CardMedia
                  alt="Prime Digital Academy"
                  image="../images/prime.jpeg"
                />
                <CardContent>
                  <Box mt={2} mb={2} ml={3}>
                    <Typography variant="h3" component="h2">
                      Prime Digital Academy
                    </Typography>
                  </Box>
                  <Box mt={2} mb={2} ml={3}>
                    <Typography variant="subtitle1" component="p">
                      December 2020 - Present
                    </Typography>
                  </Box>
                  <Box mt={2} mb={2} ml={3}>
                    <Typography variant="body1" component="p">
                      lkjlkj
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </main>
  );
}

export default Education;
