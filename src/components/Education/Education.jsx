/* Import Libraries */
import React from 'react';

/* Import Styling */
// import './Education.css';
import { Box, Link, makeStyles, Typography } from '@material-ui/core';

import prime from '../images/prime-logo.png';
import ncc from '../images/ncc-logo.jpeg';
import uti from '../images/uti-logo.jpeg';

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
        {/* Prime Digital Academy */}
        <Box mb={5}>
          <Box mt={2} mb={2} ml={3}>
            <Typography variant="h3" component="h2">
              Prime Digital Academy
            </Typography>
          </Box>
          <Box mt={2} ml={3}>
            <Typography variant="body1" component="p">
              Full Stack Software Engineering Certification
            </Typography>
          </Box>
          <Box mb={2} ml={3}>
            <Typography variant="subtitle1" component="p" className="dateRange">
              December 2020 - April 2021
            </Typography>
          </Box>
          <Box mt={2} mr={20} mb={2} ml={3}>
            <Typography variant="body1" component="p">
              Prime is a full stack immersion program that pushes it's students
              to learn and grow at an accelerated pace. Experience gained with:
              HTML, CSS, JavaScript, jQuery, React, Redux, Node, Express,
              PostgreSQL, SQL, Python, Problem Solving, Public Speaking, Project
              Scoping, and Teamwork.
            </Typography>
          </Box>
          <Box mb={2} ml={3}>
            <Link
              href="https://primeacademy.io/"
              target="_blank"
              rel="noreferrer"
              color="secondary"
            >
              https://primeacademy.io/
            </Link>
          </Box>
        </Box>

        {/* Normandale Community College */}
        <Box mb={5}>
          <Box mt={2} mb={2} ml={3}>
            <Typography variant="h3" component="h2">
              Normandale Community College
            </Typography>
          </Box>
          <Box mt={2} ml={3}>
            <Typography variant="body1" component="p">
              Associate of Science in Computer Science
            </Typography>
          </Box>
          <Box mb={2} ml={3}>
            <Typography variant="subtitle1" component="p" className="dateRange">
              January 2016 - May 2020
            </Typography>
          </Box>
          <Box mt={2} mr={20} mb={2} ml={3}>
            <Typography variant="body1" component="p">
              Experience gained with: C, Python, Java, Machine Architecture,
              Discrete Structures, Algorithms and Data Structures, Problem
              Solving, Public Speaking and Technical Writing.
            </Typography>
          </Box>
          <Box mb={2} ml={3}>
            <Link
              href="https://www.normandale.edu/"
              target="_blank"
              rel="noreferrer"
              color="secondary"
            >
              https://www.normandale.edu/
            </Link>
          </Box>
        </Box>

        {/* Universal Technical Institute */}
        <Box mb={5}>
          <Box mt={2} mb={2} ml={3}>
            <Typography variant="h3" component="h2">
              Universal Technical Institute (UTI)
            </Typography>
          </Box>
          <Box mt={2} ml={3}>
            <Typography variant="body1" component="p">
              Automotive Technology with Ford Accelerated Credential Training
              "FACT" Certificate
            </Typography>
          </Box>
          <Box mb={2} ml={3}>
            <Typography variant="subtitle1" component="p" className="dateRange">
              September 2003 - December 2005
            </Typography>
          </Box>
          <Box mt={2} mr={20} mb={2} ml={3}>
            <Typography variant="body1" component="p">
              Gained experience with: Problem Solving, Vehicle Fundamentals,
              Electrical Systems, Cooling and Heating Systems, Advanced
              Diagnostics, FORD Factory Training, and Audi Factory Training.
            </Typography>
          </Box>
          <Box mb={2} ml={3}>
            <Link
              href="https://start.uti.edu/"
              target="_blank"
              rel="noreferrer"
              color="secondary"
            >
              https://start.uti.edu/
            </Link>
          </Box>
        </Box>
      </Box>
    </main>
  );
}

export default Education;
