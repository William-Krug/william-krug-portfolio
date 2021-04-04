/* Import Libraries */
import React from 'react';

/* Import Styling */
// import './Experience.css';
import {
  Box,
  CssBaseline,
  Link,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
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
      <CssBaseline />
      <div className={classes.toolbar}>
        <Box m={10}>
          <Typography variant="h2" component="h1">
            Experience
          </Typography>
        </Box>
        <Box mt={5} mr={20} mb={5} ml={20}>
          {/* Prime Digital Academy */}
          <Box mb={5}>
            <Box mt={2} mb={2} ml={3}>
              <Typography variant="h3" component="h2">
                Prime Digital Academy
                <span>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="dateRange"
                  >
                    December 2020 - Present
                  </Typography>
                </span>
              </Typography>
            </Box>
            <Box mt={2} ml={3}>
              <Typography variant="body1" component="p" className="jobTitle">
                Full Stack Software Development Student
              </Typography>
            </Box>
            <Box mt={2} mr={20} ml={3}>
              <Typography variant="body1" component="p">
                <strong>Solo Project:</strong> My Running Journal
              </Typography>
              <Box>
                <List>
                  <ListItem>
                    <ListItemText>
                      App was created to digitally track runs and provide
                      metrics on average distance, time, speed, and pace.
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      Users log a run by entering a distance and time and the
                      app automatically provides their speed and pace Users can
                      also look at a timeline of their runs to see, and gauge,
                      their progression.
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      Built with JavaScript, React, Redux, Node, Express,
                      Moment, Material-UI, SweetAlert, and Charts.js.
                    </ListItemText>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box mb={2} ml={3}>
              <Link
                href="https://primeacademy.io/"
                target="_blank"
                rel="noreferrer"
              >
                https://primeacademy.io/
              </Link>
            </Box>
          </Box>

          {/* Solera Holding / Identifix */}
          <Box mb={5}>
            <Box mt={2} mb={2} ml={3}>
              <Typography variant="h3" component="h2">
                Solera Holding / Identifix
                <span>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="dateRange"
                  >
                    June 2009 - September 2020
                  </Typography>
                </span>
              </Typography>
            </Box>

            {/* Project Manager */}
            <Box mt={2} mr={20} ml={3}>
              <Typography variant="body1" component="p" className="jobTitle">
                Project Manager
                <span>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="dateRange"
                  >
                    June 2018 - September 2020
                  </Typography>
                </span>
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    Trained Subject Matter Experts (SMEs) on classification of
                    repair manual documents and vehicle application to increase
                    content throughput.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Utilized in-house applications to connect automotive
                    specification and in-house developer software for use on
                    Direct-Hit website.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Revamped new account set up process for a clear
                    understanding between all involved departments and
                    streamlined completion.
                  </ListItemText>
                </ListItem>
              </List>
            </Box>

            {/* Data Author 2 */}
            <Box mt={2} mr={20} ml={3}>
              <Typography variant="body1" component="p" className="jobTitle">
                Data Author 2
                <span>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="dateRange"
                  >
                    June 2015 - June 2018
                  </Typography>
                </span>
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    Performed annual special independent projects for
                    competitive analysis and Product Team improvement
                    suggestions.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Classified repair manual content and defined automotive
                    applications.
                  </ListItemText>
                </ListItem>
              </List>
            </Box>

            {/* European Carline Specialist */}
            <Box mt={2} mr={20} ml={3}>
              <Typography variant="body1" component="p" className="jobTitle">
                European Carline Specialist
                <span>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="dateRange"
                  >
                    June 2009 - June 2015
                  </Typography>
                </span>
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    Communicated with automotive technicians via telephone,
                    email, and fax.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Diagnosed vehicle concerns and recommended solutions on
                    parts to replace.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Authored diagnostic procedures for Direct-Hit website.
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
            <Box mb={2} ml={3}>
              <Link
                href="https://www.identifix.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.identifix.com/
              </Link>
            </Box>
          </Box>

          {/* EMMA */}
          <Box mb={5}>
            <Box mt={2} mb={2} ml={3}>
              <Typography variant="h3" component="h2">
                European Medieval Arts of Arms, llc
                <span>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="dateRange"
                  >
                    December 2020 - Present
                  </Typography>
                </span>
              </Typography>
            </Box>
            <Box mt={2} mr={20} ml={3}>
              <Typography variant="body1" component="p" className="jobTitle">
                Instructor / Business Partner
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    Designed and updated new curriculum with fellow owners.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Collaborated with other instructors to produce training
                    materials for the academy.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Led training classes for students ranging from ages 7 to 65.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Fought in full armor with live steel on the Demonstration
                    team.
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Box>

          {/* Flow */}
          <Box mb={5}>
            <Box mt={2} mb={2} ml={3}>
              <Typography variant="h3" component="h2">
                Flow Automotive Companies
                <span>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="dateRange"
                  >
                    December 2020 - Present
                  </Typography>
                </span>
              </Typography>
            </Box>
            <Box mt={2} mr={20} ml={3}>
              <Typography variant="body1" component="p" className="jobTitle">
                Certified Audi Expert Level Technician
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    Diagnosed customer concerns using prior experience, factory
                    repair manuals, and wiring diagrams for a fast and efficient
                    service experience.
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
            <Box mb={2} ml={3}>
              <Link
                href="https://www.flowauto.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.flowauto.com/
              </Link>
            </Box>
          </Box>

          {/* Chili's */}
          <Box mb={5}>
            <Box mt={2} mb={2} ml={3}>
              <Typography variant="h3" component="h2">
                Chili's Grill & Bar
                <span>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="dateRange"
                  >
                    December 2020 - Present
                  </Typography>
                </span>
              </Typography>
            </Box>
            {/* Server */}
            <Box mt={2} ml={3}>
              <Typography variant="body1" component="p" className="jobTitle">
                Server / Trainer
                <span>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="dateRange"
                  >
                    December 2020 - Present
                  </Typography>
                </span>
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>Trained new servers.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Spoke with and confirmed guest dining request for their
                    expected meal.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Mediated resolutions with upset diners..
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
            {/* To Go */}
            <Box mt={2} ml={3}>
              <Typography variant="body1" component="p" className="jobTitle">
                To Go Server
                <span>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="dateRange"
                  >
                    December 2020 - Present
                  </Typography>
                </span>
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    Spoke with customers over the phone and verified requested
                    orders..
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Collaborated with cooks and line supervisors to prepare
                    orders.
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
            {/* Host */}
            <Box mt={2} ml={3}>
              <Typography variant="body1" component="p" className="jobTitle">
                Host
                <span>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="dateRange"
                  >
                    December 2020 - Present
                  </Typography>
                </span>
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    Approximated wiat times and set realistic expectations for
                    guest dining experience.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Addressed guest concerns and needs for an enjoyable meal
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
            <Box mb={2} ml={3}>
              <Link
                href="https://www.chilis.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.chilis.com/
              </Link>
            </Box>
          </Box>

          {/* Weinhagens */}
          <Box mb={5}>
            <Box mt={2} mb={2} ml={3}>
              <Typography variant="h3" component="h2">
                Weinhagen Tire Company
                <span>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="dateRange"
                  >
                    December 2020 - Present
                  </Typography>
                </span>
              </Typography>
            </Box>
            <Box mt={2} ml={3}>
              <Typography variant="body1" component="p" className="jobTitle">
                General Service Technician
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>Maintained customer vehicles.</ListItemText>
                </ListItem>
              </List>
            </Box>
            <Box mb={2} ml={3}>
              <Link
                href="https://weinhagen.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://weinhagen.com/
              </Link>
            </Box>
          </Box>

          {/* Dairy Queen */}
          <Box mb={5}>
            <Box mt={2} mb={2} ml={3}>
              <Typography variant="h3" component="h2">
                Dairy Queen
                <span>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="dateRange"
                  >
                    December 2020 - Present
                  </Typography>
                </span>
              </Typography>
            </Box>
            <Box mt={2} ml={3}>
              <Typography variant="body1" component="p" className="jobTitle">
                Shift Manager
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    Delegated nightly closing duties for an efficient end of
                    night.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Tabulated closing sales counts.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Constructed customer orders.</ListItemText>
                </ListItem>
              </List>
            </Box>
            <Box mb={2} ml={3}>
              <Link
                href="https://www.dairyqueen.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.dairyqueen.com/
              </Link>
            </Box>
          </Box>
        </Box>
      </div>
    </main>
  );
}

export default Experience;
