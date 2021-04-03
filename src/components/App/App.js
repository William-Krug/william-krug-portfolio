/* Import Libraries */
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';

/* Import Components */
import About from '../About/About';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Home from '../Home/Home';
import LeftDrawer from '../LeftDrawer/LeftDrawer';
import Projects from '../Projects/Projects';

/* Import Styling */
import './App.css';
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AppsIcon from '@material-ui/icons/Apps';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const drawerWidth = 240;

/*
  Generate own Material-UI theme
*/
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: theme.palette.background.default,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const customTheme = createMuiTheme({
  // Theme Settings
  // palette: {
  //   //type: 'dark',
  //   primary: {
  //     main: '',
  //     contrastText: '',
  //   },
  //   secondary: {
  //     main: '',
  //     contrastText: '',
  //   },
  //   error: {
  //     main: '',
  //     contrastText: '',
  //   },
  //   warning: {
  //     main: '',
  //     contrastText: '',
  //   },
  //   info: {
  //     main: '',
  //     contrastText: '',
  //   },
  //   success: {
  //     main: '',
  //     contrastText: '',
  //   },
  // },
  // typography: {},
  // root: {
  //   diplay: 'flex',
  // },
  // appBar: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  // },
  // drawer: {
  //   width: drawerWidth,
  //   flexShrink: 0,
  // },
  // drawerPaper: {
  //   width: drawerWidth,
  // },
  // toolbar: this.mixins.toolbar,
  // content: {
  //   flexGrow: 1,
  //   backgroundColor: this.palette.background.default,
  //   padding: this.spacing(3),
  // },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />

      <Router>
        <LeftDrawer />
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route exact path="/experience">
          <Experience />
        </Route>

        <Route exact path="/education">
          <Education />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
