/* Import Libraries */
import React from 'react';

/* Import Styling */
// import './Education.css';
import { Box, Link, makeStyles, Typography } from '@material-ui/core';

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

  const educationList = [
    {
      school: "Prime Digital Academy",
      course: "Full Stack Software Engineering Certification",
      datesAttended: "December 2020 - April 2021",
      description: `Prime is a full stack immersion program that pushes it's students
                    to learn and grow at an accelerated pace. Experience gained with:
                    HTML, CSS, JavaScript, jQuery, React, Redux, Node, Express,
                    PostgreSQL, SQL, Python, Problem Solving, Public Speaking, Project
                    Scoping, and Teamwork.`,
      link: "https://primeacademy.io/",
      linkShown: "primeacademy.io",
    },
    {
      school: "Normandale Community College",
      course: "Associate of Science in Computer Science",
      datesAttended: "January 2016 - May 2020",
      description: `Experience gained with: C, Python, Java, Machine Architecture,
                    Discrete Structures, Algorithms and Data Structures, Problem
                    Solving, Public Speaking and Technical Writing.`,
      link: "https://www.normandale.edu/",
      linkShown: "normandale.edu",
    },
    {
      school: "Universal Technical Institute (UTI)",
      course: 'Automotive Technology with Ford Accelerated Credential Training "FACT" Certificate',
      datesAttended: "September 2003 - December 2005",
      description: `Gained experience with: Problem Solving, Vehicle Fundamentals,
                    Electrical Systems, Cooling and Heating Systems, Advanced
                    Diagnostics, FORD Factory Training, and Audi Factory Training.`,
      link: "https://start.uti.edu/",
      linkShown: "start.uti.edu",
    },
  ]

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
            <Box mb={5}>
              <Box mt={2} mb={2} ml={3}>
                <Typography variant="h3" component="h2">
                  {program.school}
                </Typography>
              </Box>
              <Box mt={2} ml={3}>
                <Typography variant="body1" component="p">
                  {program.course}
                </Typography>
              </Box>
              <Box mb={2} ml={3}>
                <Typography variant="subtitle1" component="p" className="dateRange">
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
          )
        })}
      </Box>
    </main>
  );
}

export default Education;
