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
      <Box m={10}>
        <Typography variant="h2" component="h1">
          Experience
        </Typography>
      </Box>
      <Box mt={5} mr={20} mb={5} ml={20}>
        {experienceList.map((job) => {
          return (
            <Box mb={7}>
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
                className={job.thirdPosition.title === '' ? 'hidden' : ''}
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
                  className={job.thirdPosition.bullet1 === '' ? 'hidden' : ''}
                >
                  <ListItem>
                    <ListItemText>{job.thirdPosition.bullet1}</ListItemText>
                  </ListItem>
                  <ListItem
                    className={job.thirdPosition.bullet2 === '' ? 'hidden' : ''}
                  >
                    <ListItemText>{job.thirdPosition.bullet2}</ListItemText>
                  </ListItem>
                  <ListItem
                    className={job.thirdPosition.bullet3 === '' ? 'hidden' : ''}
                  >
                    <ListItemText>{job.thirdPosition.bullet3}</ListItemText>
                  </ListItem>
                </List>
              </Box>

              {/* Second Role/Position */}
              <Box
                mt={2}
                mr={20}
                ml={3}
                className={job.secondPosition.title === '' ? 'hidden' : ''}
              >
                <Typography variant="body1" component="p" className="job-title">
                  <strong>{job.secondPosition.title}</strong>
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className={
                    job.secondPosition.dateRange === ''
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
                  <ListItem
                    className={
                      job.secondPosition.bullet2 === '' ? 'hidden' : ''
                    }
                  >
                    <ListItemText>{job.secondPosition.bullet2}</ListItemText>
                  </ListItem>
                  <ListItem
                    className={
                      job.secondPosition.bullet3 === '' ? 'hidden' : ''
                    }
                  >
                    <ListItemText>{job.secondPosition.bullet3}</ListItemText>
                  </ListItem>
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
                    <ListItemText>{job.firstPosition.bullet1}</ListItemText>
                  </ListItem>
                  <ListItem
                    className={job.firstPosition.bullet2 === '' ? 'hidden' : ''}
                  >
                    <ListItemText>{job.firstPosition.bullet2}</ListItemText>
                  </ListItem>
                  <ListItem
                    className={job.firstPosition.bullet3 === '' ? 'hidden' : ''}
                  >
                    <ListItemText>{job.firstPosition.bullet3}</ListItemText>
                  </ListItem>
                  <ListItem
                    className={job.firstPosition.bullet4 === '' ? 'hidden' : ''}
                  >
                    <ListItemText>{job.firstPosition.bullet4}</ListItemText>
                  </ListItem>
                </List>
              </Box>

              {/* Web Link */}
              <Box
                mr={20}
                ml={3}
                className={job.websiteLink === '' ? 'hidden' : ''}
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
