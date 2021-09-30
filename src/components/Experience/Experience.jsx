/* Import Libraries */
import React from 'react';

/* Import Experience List */
import { experienceList } from './ExperienceList';

/* Import Styling */
import './Experience.css';
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';

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

function Experience() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      {/* Page Heading */}
      <Box m={10}>
        <Typography variant="h2" component="h1">
          Experience
        </Typography>
      </Box>

      {/* Experience Details */}
      <Box mt={5} mr={20} mb={5} ml={20}>
        {experienceList.map((job) => {
          return (
            <Box mb={10}>
              {/* Company Name & Employment Year Range */}
              <Box mt={2} mb={2} ml={3}>
                <Typography variant="h3" component="h2">
                  {job.company}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className="date-range"
                >
                  {job.totalDateRange}
                </Typography>
              </Box>

              {/* Third Role/Position */}
              <Box
                mt={2}
                mr={20}
                ml={3}
                className={job.thirdPosition.title === '' ? 'hidden' : null}
              >
                <Typography variant="body1" component="p" className="job-title">
                  <strong>{job.thirdPosition.title}</strong>
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className={
                    job.thirdPosition.dateRange === '' ? 'hidden' : 'date-range'
                  }
                >
                  {job.thirdPosition.dateRange}
                </Typography>
                <List
                  className={job.thirdPosition.bullet1 === '' ? 'hidden' : null}
                >
                  <ListItem>
                    <ListItemText>{job.thirdPosition.bullet1}</ListItemText>
                  </ListItem>
                  {job.thirdPosition.bullet2 !== '' ? (
                    <ListItem>
                      <ListItemText primary={job.thirdPosition.bullet2} />
                    </ListItem>
                  ) : null}
                  {job.thirdPosition.bullet3 !== '' ? (
                    <ListItem>
                      <ListItemText primary={job.thirdPosition.bullet3} />
                    </ListItem>
                  ) : null}
                </List>
              </Box>

              {/* Second Role/Position */}
              <Box
                mt={2}
                mr={20}
                ml={3}
                className={job.secondPosition.title === '' ? 'hidden' : null}
              >
                <Typography variant="body1" component="p" className="job-title">
                  <strong>{job.secondPosition.title}</strong>
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className={
                    job.secondPosition.dateRange === null
                      ? 'hidden'
                      : 'date-range'
                  }
                >
                  {job.secondPosition.dateRange}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText>{job.secondPosition.bullet1}</ListItemText>
                  </ListItem>
                  {job.secondPosition.bullet2 !== '' ? (
                    <ListItem>
                      <ListItemText primary={job.secondPosition.bullet2} />
                    </ListItem>
                  ) : null}
                  {job.secondPosition.bullet3 !== '' ? (
                    <ListItem>
                      <ListItemText primary={job.secondPosition.bullet3} />
                    </ListItem>
                  ) : null}
                </List>
              </Box>

              {/* First Role/Position */}
              <Box mt={2} mr={20} ml={3}>
                <Typography variant="body1" component="p" className="job-title">
                  <strong>{job.firstPosition.title}</strong>
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className={
                    job.firstPosition.dateRange === '' ? 'hidden' : 'date-range'
                  }
                >
                  {job.firstPosition.dateRange}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary={job.firstPosition.bullet1} />
                  </ListItem>
                  {job.firstPosition.bullet2 !== '' ? (
                    <ListItem>
                      <ListItemText primary={job.firstPosition.bullet2} />
                    </ListItem>
                  ) : null}
                  {job.firstPosition.bullet3 !== '' ? (
                    <ListItem>
                      <ListItemText primary={job.firstPosition.bullet3} />
                    </ListItem>
                  ) : null}
                  {job.firstPosition.bullet4 !== '' ? (
                    <ListItem>
                      <ListItemText primary={job.firstPosition.bullet4} />
                    </ListItem>
                  ) : null}
                </List>
              </Box>

              {/* Web Link */}
              <Box
                mr={20}
                ml={3}
                className={job.websiteLink === '' ? 'hidden' : null}
              >
                <Link
                  href={job.websiteLink}
                  target="_blank"
                  rel="noreferrer"
                  color="secondary"
                >
                  {job.displayedLink}
                </Link>
              </Box>
            </Box>
          );
        })}
      </Box>
    </main>
  );
}

export default Experience;
