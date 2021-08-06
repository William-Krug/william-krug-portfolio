/* Import Libraries */
import React from 'react';

/* Import Styling */
// import './Experience.css';
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

  const experienceList = [
    {
      company: "LAB651",
      dateRange: "May 2021 - Current",
      jobTitle1: "Full Stack Software Developer",
      jobTitle1DateRange: "",
      jobTitle1Bullet1: `Collaborated with other developers to create features matching customer's requirements.`,
      jobTitle1Bullet2: `Focused on front end design and functionality.`,
      jobTitle1Bullet3: `Acquired additional skills learning a new language and framework.`,
      jobTitle1Bullet4: ``,
      jobTitle2: "",
      jobTitle2DateRange: "",
      jobTitle2Bullet1: ``,
      jobTitle2Bullet2: ``,
      jobTitle2Bullet3: ``,
      jobTitle3: "",
      jobTitle3DateRange: "",
      jobTitle3Bullet1: ``,
      jobTitle3Bullet2: ``,
      jobTitle3Bullet3: ``,
      link: "https://lab651.com/",
      linkDisplayed: "lab651.com",
    },
    {
      company: "Prime Digital Academy",
      dateRange: "December 2020 - April 2021",
      jobTitle1: "Full Stack Software Development Student",
      jobTitle1DateRange: "",
      jobTitle1Bullet1: ``,
      jobTitle1Bullet2: ``,
      jobTitle1Bullet3: ``,
      jobTitle1Bullet4: ``,
      jobTitle2: "<strong>Solo Project:</strong> My Running Journal",
      jobTitle2DateRange: "",
      jobTitle2Bullet1: `App was created to digitally track runs and provide metrics
                         on average distance, time, speed, and pace.`,
      jobTitle2Bullet2: `Users log a run by entering a distance and time and the app
                         automatically provides their speed and pace Users can also
                         look at a timeline of their runs to see, and gauge, their
                         progression.`,
      jobTitle2Bullet3: `Built with JavaScript, React, Redux, Node, Express, Moment,
                         Material-UI, SweetAlert, and Charts.js.`,
      jobTitle3: "<strong>Group Project:</strong> Contrive",
      jobTitle3DateRange: "",
      jobTitle3Bullet1: `Contrive is a DIY Party Planner application that sets itself
                         apart by suggesting vendors to planners and allowing
                         planners to filter search results based on unique facts
                         about the vendors such as female owned, bipoc owned, small
                         business, and more.`,
      jobTitle3Bullet2: `Working with fellow Prime students, I led the group as both
                         developer and Project Manager to build the application in a
                         timely and efficient manner for an MVP product. Vendors can
                         register to the site and fill out their profile to be
                         searched by planners as part of the Contrive network.
                         Planers can create events and review suggested vendors from
                         the app. If the planner prefers, they can search the vendor
                         network for help that meets their preferences. To facilitate
                         connecting with vendors, a chat feature is included in the
                         app.`,
      jobTitle3Bullet3: `Built with JavaScript, React, Redux, Node, Express, Moment,
                         and Material-UI.`,
      link: "https://primeacademy.io/",
      linkDisplayed: "primeacademy.io",
    },
    {
      company: "Solera Holding / Identifix",
      dateRange: "June 2009 - September 2020",
      jobTitle1: "Project Manager",
      jobTitle1DateRange: "June 2018 - September 2020",
      jobTitle1Bullet1: `Trained Subject Matter Experts (SMEs) on classification of
                         repair manual documents and vehicle application to increase
                         content throughput.`,
      jobTitle1Bullet2: `Utilized in-house applications to connect automotive
                         specification and in-house developer software for use on
                         Direct-Hit website.`,
      jobTitle1Bullet3: `Revamped new account set up process for a clear understanding
                         between all involved departments and streamlined completion.`,
      jobTitle1Bullet4: ``,
      jobTitle2: "Data Author 2",
      jobTitle2DateRange: "June 2015 - June 2018",
      jobTitle2Bullet1: `Performed annual special independent projects for competitive
                         analysis and Product Team improvement suggestions.`,
      jobTitle2Bullet2: `Classified repair manual content and defined automotive
                         applications.`,
      jobTitle2Bullet3: ``,
      jobTitle3: "European Carline Specialist",
      jobTitle3DateRange: "June 2009 - June 2015",
      jobTitle3Bullet1: `Communicated with automotive technicians via telephone, email,
                         and fax.`,
      jobTitle3Bullet2: `Diagnosed vehicle concerns and recommended solutions on parts
                         to replace.`,
      jobTitle3Bullet3: `Authored diagnostic procedures for Direct-Hit website.`,
      link: "https://www.identifix.com/",
      linkDisplayed: "identifix.com",
    },
    {
      company: "European Medieval Arts of Arms, llc",
      dateRange: "June 2006 - May 2009",
      jobTitle1: "Instructor / Business Partner",
      jobTitle1DateRange: "",
      jobTitle1Bullet1: `Designed and updated new curriculum with fellow owners.`,
      jobTitle1Bullet2: `Collaborated with other instructors to produce training
                         materials for the academy.`,
      jobTitle1Bullet3: `Led training classes for students ranging from ages 7 to 65.`,
      jobTitle1Bullet4: `Fought in full armor with live steel on the Demonstration team.`,
      jobTitle2: "",
      jobTitle2DateRange: "",
      jobTitle2Bullet1: ``,
      jobTitle2Bullet2: ``,
      jobTitle2Bullet3: ``,
      jobTitle3: "",
      jobTitle3DateRange: "",
      jobTitle3Bullet1: ``,
      jobTitle3Bullet2: ``,
      jobTitle3Bullet3: ``,
      link: "",
      linkDisplayed: "",
    },
    {
      company: "Flow Automotive Companies",
      dateRange: "August 2005 - May 2009",
      jobTitle1: "Certified Audi Expert Level Technician",
      jobTitle1DateRange: "",
      jobTitle1Bullet1: `Diagnosed customer concerns using prior experience, factory
                         repair manuals, and wiring diagrams for a fast and efficient
                         service experience.`,
      jobTitle1Bullet2: ``,
      jobTitle1Bullet3: ``,
      jobTitle1Bullet4: ``,
      jobTitle2: "",
      jobTitle2DateRange: "",
      jobTitle2Bullet1: ``,
      jobTitle2Bullet2: ``,
      jobTitle2Bullet3: ``,
      jobTitle3: "",
      jobTitle3DateRange: "",
      jobTitle3Bullet1: ``,
      jobTitle3Bullet2: ``,
      jobTitle3Bullet3: ``,
      link: "https://www.flowauto.com/",
      linkDisplayed: "flowauto.com",
    },
    {
      company: "Chili's Grill & Bar",
      dateRange: "August 2003 - June 2005",
      jobTitle1: "Server / Trainer",
      jobTitle1DateRange: "August 2004 - June 2005",
      jobTitle1Bullet1: `Trained new servers.`,
      jobTitle1Bullet2: `Spoke with and confirmed guest dining request for their
                         expected mea.`,
      jobTitle1Bullet3: `Mediated resolutions with upset diners.`,
      jobTitle1Bullet4: ``,
      jobTitle2: "To Go Server",
      jobTitle2DateRange: "February 2004 - August 2004",
      jobTitle2Bullet1: `Spoke with customers over the phone and verified requested orders.`,
      jobTitle2Bullet2: `Collaborated with cooks and line supervisors to prepare orders.`,
      jobTitle2Bullet3: ``,
      jobTitle3: "Host",
      jobTitle3DateRange: "August 2003 - February 2004",
      jobTitle3Bullet1: `Approximated wait times and set realistic expectations for
                         guest dining experience.`,
      jobTitle3Bullet2: `Addressed guest concerns and needs for an enjoyable meal.`,
      jobTitle3Bullet3: ``,
      link: "https://www.chilis.com/",
      linkDisplayed: "chilis.com",
    },
    {
      company: "Weinhagen Tire Company",
      dateRange: "June 2002 - August 2003",
      jobTitle1: "General Service Technician",
      jobTitle1DateRange: "",
      jobTitle1Bullet1: `Maintained customer vehicles.`,
      jobTitle1Bullet2: ``,
      jobTitle1Bullet3: ``,
      jobTitle1Bullet4: ``,
      jobTitle2: "",
      jobTitle2DateRange: "",
      jobTitle2Bullet1: ``,
      jobTitle2Bullet2: ``,
      jobTitle2Bullet3: ``,
      jobTitle3: "",
      jobTitle3DateRange: "",
      jobTitle3Bullet1: ``,
      jobTitle3Bullet2: ``,
      jobTitle3Bullet3: ``,
      link: "https://weinhagen.com/",
      linkDisplayed: "weinhagen.com",
    },
    {
      company: "Dairy Queen",
      dateRange: "June 2000 - June 2002",
      jobTitle1: "Shift Manager",
      jobTitle1DateRange: "",
      jobTitle1Bullet1: `Delegated nightly closing duties for an efficient end of night.`,
      jobTitle1Bullet2: `Tabulated closing sales counts.`,
      jobTitle1Bullet3: `Constructed customer orders.`,
      jobTitle1Bullet4: ``,
      jobTitle2: "",
      jobTitle2DateRange: "",
      jobTitle2Bullet1: "",
      jobTitle2Bullet2: "",
      jobTitle2Bullet3: "",
      jobTitle3: "",
      jobTitle3DateRange: "",
      jobTitle3Bullet1: "",
      jobTitle3Bullet2: "",
      jobTitle3Bullet3: "",
      link: "https://www.dairyqueen.com/",
      linkDisplayed: "dairyqueen.com",
    },
  ];

  return (
    <main className={classes.content}>
      <Box m={10}>
        <Typography variant="h2" component="h1">
          Experience
        </Typography>
      </Box>
      <Box mt={5} mr={20} mb={5} ml={20}>
        {/* LAB651 */}
        <Box mb={7}>
          <Box mt={2} mb={2} ml={3}>
            <Typography variant="h3" component="h2">
              LAB651
            </Typography>
            <Typography variant="subtitle1" component="p" className="dateRange">
              May 2021 - Current
            </Typography>
          </Box>
          <Box mt={2} mr={20} ml={3}>
            <Typography variant="body1" component="p" className="jobTitle">
              Full Stack Software Developer
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  Collaborated with other developers to create features matching customer's requirements.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Focused on front end design and functionality.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Acquired additional skills learning a new language and framework.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Fought in full armor with live steel on the Demonstration
                  team.
                </ListItemText>
              </ListItem>
            </List>
            <Link
              href="https://lab651.com/"
              target="_blank"
              rel="noreferrer"
              color="secondary"
            >
              lab651.com
            </Link>
          </Box>
        </Box>

        {/* Prime Digital Academy */}
        <Box mb={7}>
          <Box mt={2} mb={2} ml={3}>
            <Typography variant="h3" component="h2">
              Prime Digital Academy
            </Typography>
            <Typography variant="subtitle1" component="p" className="dateRange">
              December 2020 - April 2021
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
                    App was created to digitally track runs and provide metrics
                    on average distance, time, speed, and pace.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Users log a run by entering a distance and time and the app
                    automatically provides their speed and pace Users can also
                    look at a timeline of their runs to see, and gauge, their
                    progression.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Built with JavaScript, React, Redux, Node, Express, Moment,
                    Material-UI, SweetAlert, and Charts.js.
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
            <Typography variant="body1" component="p">
              <strong>Group Project:</strong> Contrive
            </Typography>
            <Box>
              <List>
                <ListItem>
                  <ListItemText>
                    Contrive is a DIY Party Planner application that sets itself
                    apart by suggesting vendors to planners and allowing
                    planners to filter search results based on unique facts
                    about the vendors such as female owned, bipoc owned, small
                    business, and more.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Working with fellow Prime students, I led the group as both
                    developer and Project Manager to build the application in a
                    timely and efficient manner for an MVP product. Vendors can
                    register to the site and fill out their profile to be
                    searched by planners as part of the Contrive network.
                    Planers can create events and review suggested vendors from
                    the app. If the planner prefers, they can search the vendor
                    network for help that meets their preferences. To facilitate
                    connecting with vendors, a chat feature is included in the
                    app.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Built with JavaScript, React, Redux, Node, Express, Moment,
                    and Material-UI.
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
            <Link
              href="https://primeacademy.io/"
              target="_blank"
              rel="noreferrer"
              color="secondary"
            >
              primeacademy.io
            </Link>
          </Box>
        </Box>

        {/* Solera Holding / Identifix */}
        <Box mb={7}>
          <Box mt={2} mb={2} ml={3}>
            <Typography variant="h3" component="h2">
              Solera Holding / Identifix
            </Typography>
            <Typography variant="subtitle1" component="p" className="dateRange">
              June 2009 - September 2020
            </Typography>
          </Box>

          {/* Project Manager */}
          <Box mt={2} mr={20} ml={3}>
            <Typography variant="body1" component="p" className="jobTitle">
              Project Manager
            </Typography>
            <Typography variant="subtitle1" component="p" className="dateRange">
              June 2018 - September 2020
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
                  Revamped new account set up process for a clear understanding
                  between all involved departments and streamlined completion.
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          {/* Data Author 2 */}
          <Box mt={2} mr={20} ml={3}>
            <Typography variant="body1" component="p" className="jobTitle">
              Data Author 2
            </Typography>
            <Typography variant="subtitle1" component="p" className="dateRange">
              June 2015 - June 2018
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  Performed annual special independent projects for competitive
                  analysis and Product Team improvement suggestions.
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
            </Typography>
            <Typography variant="subtitle1" component="p" className="dateRange">
              June 2009 - June 2015
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  Communicated with automotive technicians via telephone, email,
                  and fax.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Diagnosed vehicle concerns and recommended solutions on parts
                  to replace.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Authored diagnostic procedures for Direct-Hit website.
                </ListItemText>
              </ListItem>
            </List>

            <Link
              href="https://www.identifix.com/"
              target="_blank"
              rel="noreferrer"
              color="secondary"
            >
              identifix.com
            </Link>
          </Box>
        </Box>

        {/* EMMA */}
        <Box mb={7}>
          <Box mt={2} mb={2} ml={3}>
            <Typography variant="h3" component="h2">
              European Medieval Arts of Arms, llc
            </Typography>
            <Typography variant="subtitle1" component="p" className="dateRange">
              June 2006 - May 2009
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
        <Box mb={7}>
          <Box mt={2} mb={2} ml={3}>
            <Typography variant="h3" component="h2">
              Flow Automotive Companies
            </Typography>
            <Typography variant="subtitle1" component="p" className="dateRange">
              August 2005 - May 2009
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
            <Link
              href="https://www.flowauto.com/"
              target="_blank"
              rel="noreferrer"
              color="secondary"
            >
              flowauto.com
            </Link>
          </Box>
        </Box>

        {/* Chili's */}
        <Box mb={7}>
          <Box mt={2} mb={2} ml={3}>
            <Typography variant="h3" component="h2">
              Chili's Grill & Bar
            </Typography>
            <Typography variant="subtitle1" component="p" className="dateRange">
              August 2003 - June 2005
            </Typography>
          </Box>
          {/* Server */}
          <Box mt={2} ml={3}>
            <Typography variant="body1" component="p" className="jobTitle">
              Server / Trainer
            </Typography>
            <Typography variant="subtitle1" component="p" className="dateRange">
              August 2004 - June 2005
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
            </Typography>
            <Typography variant="subtitle1" component="p" className="dateRange">
              February 2004 - August 2004
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  Spoke with customers over the phone and verified requested
                  orders.
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
            </Typography>
            <Typography variant="subtitle1" component="p" className="dateRange">
              August 2003 - February 2004
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  Approximated wait times and set realistic expectations for
                  guest dining experience.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Addressed guest concerns and needs for an enjoyable meal
                </ListItemText>
              </ListItem>
            </List>
            <Link
              href="https://www.chilis.com/"
              target="_blank"
              rel="noreferrer"
              color="secondary"
            >
              chilis.com
            </Link>
          </Box>
        </Box>

        {/* Weinhagens */}
        <Box mb={7}>
          <Box mt={2} mb={2} ml={3}>
            <Typography variant="h3" component="h2">
              Weinhagen Tire Company
            </Typography>
            <Typography variant="subtitle1" component="p" className="dateRange">
              June 2002 - August 2003
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
            <Link
              href="https://weinhagen.com/"
              target="_blank"
              rel="noreferrer"
              color="secondary"
            >
              weinhagen.com
            </Link>
          </Box>
        </Box>

        {/* Dairy Queen */}
        <Box mb={7}>
          <Box mt={2} mb={2} ml={3}>
            <Typography variant="h3" component="h2">
              Dairy Queen
            </Typography>
            <Typography variant="subtitle1" component="p" className="dateRange">
              June 2000 - June 2002
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
            <Link
              href="https://www.dairyqueen.com/"
              target="_blank"
              rel="noreferrer"
              color="secondary"
            >
              dairyqueen.com
            </Link>
          </Box>
        </Box>
      </Box>
    </main>
  );
}

export default Experience;
