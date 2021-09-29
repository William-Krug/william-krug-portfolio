/* Import Libraries */
import React from 'react';

/* Import Education List */
import { educationList } from './EducationList';

/* Import Styling */
import './Education.css';
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';

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
  media: {
    height: 200,
  },
}));

/**
 * Component lists out higher education I've obtained including:
 * - School Name
 * - Link to School Website
 * - Degree / Certification
 * - Dates Attended
 * - Brief Description of Learned Material
 * @returns {jsx} renders Education page
 */
function Education() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      {/* Page Heading */}
      <Box m={10}>
        <Typography variant="h2" component="h1">
          Education
        </Typography>
      </Box>
      <Box mt={5} mr={20} mb={5} ml={20}>
        {educationList.map((program) => {
          return (
            <Box mb={10}>
              <Box ml={3}>
                <img
                  src={program.image}
                  alt={program.school}
                  className="educationImage"
                />
              </Box>
              <Box mt={2} mb={2} ml={3}>
                <Typography variant="h3" component="h2">
                  {program.school}
                </Typography>
              </Box>
              <Box mt={2} ml={3}>
                <Typography variant="body1" component="p">
                  <strong>{program.course}</strong>
                </Typography>
              </Box>
              <Box mb={2} ml={3}>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className="dateRange"
                >
                  {program.datesAttended}
                </Typography>
              </Box>
              <Box mt={2} mr={20} mb={2} ml={3}>
                <Typography variant="body1" component="p">
                  {program.description}
                </Typography>
              </Box>
              <Box mb={2} ml={3}>
                <Link
                  href={program.link}
                  target="_blank"
                  rel="noreferrer"
                  color="secondary"
                >
                  {program.linkShown}
                </Link>
              </Box>
            </Box>
          );
        })}
      </Box>
      {/* <Box mt={5} mr={20} mb={5} ml={20}>
        {educationList.map((program) => {
          return (
            <Box mt={5} mb={5}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // height="300"
                    // width="auto"
                    image={program.image}
                    alt={program.school}
                    className="educationImage"
                  />
                  <CardContent>
                    <Box mt={2} mb={2}>
                      <Typography variant="h3" component="h2">
                        {program.school}
                      </Typography>
                    </Box>
                    <Box mt={2}>
                      <Typography variant="body1" component="p">
                        <strong>{program.course}</strong>
                      </Typography>
                    </Box>
                    <Box mb={2}>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        className="dateRange"
                      >
                        {program.datesAttended}
                      </Typography>
                    </Box>
                    <Box mt={2} mb={2}>
                      <Typography variant="body1" component="p">
                        {program.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link
                    href={program.link}
                    target="_blank"
                    rel="noreferrer"
                    color="secondary"
                  >
                    {program.linkShown}
                  </Link>
                </CardActions>
              </Card>
            </Box>
          );
        })}
      </Box> */}
    </main>
  );
}

export default Education;
