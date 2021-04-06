/* Import Libraries */
import React from 'react';

/* Import Styling */
import { Box, Button, Link, makeStyles, Typography } from '@material-ui/core';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

import resume from '../../william-krug-resume.pdf';
import william from '../images/william.jpeg';

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

function Home() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        <Box mt={15} mr={10} mb={5} ml={20}>
          <Box mt={2}>
            <Typography variant="body1" component="p">
              Hello. My name is
            </Typography>
          </Box>
          <Box mt={2} mb={2}>
            <Typography variant="h1" component="h1">
              William
            </Typography>
            <Typography variant="h1" component="h1">
              Krug
            </Typography>
          </Box>
          <Box mt={2} mb={2} mr={10}>
            <Typography variant="body1" component="p">
              A full stack software developer that loves a good challenge and
              problem to solve.
            </Typography>
          </Box>
          <Box mt={2} mb={2} mr={10}>
            <Typography variant="body1" component="p">
              Let's start a conversation on{' '}
              <Link
                href="https://www.linkedin.com/in/william-krug-67a86ab6/"
                target="_blank"
                rel="noreferrer"
                color="initial"
              >
                LinkedIn
              </Link>
            </Typography>
          </Box>
          <Box mt={3} mb={2}>
            <Link href={resume} download underline="none">
              <Button
                variant="contained"
                endIcon={<SaveAltIcon />}
                color="primary"
              >
                Download CV
              </Button>
            </Link>
          </Box>
        </Box>
      </div>
    </main>
  );
}

export default Home;
