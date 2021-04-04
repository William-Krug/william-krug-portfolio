/* Import Libraries */
import { HashRouter as Router, Route } from 'react-router-dom';

/* Import Components */
import About from '../About/About';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Home from '../Home/Home';
import LeftDrawer from '../LeftDrawer/LeftDrawer';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

/* Import Styling */
import './App.css';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const drawerWidth = 240;

/*
  Generate own Material-UI theme
*/
const customTheme = createMuiTheme({
  // Theme Settings
  // palette: {
  //   //type: 'dark',
  //   primary: {
  //     main: '#424242',
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
  // typography: {
  //   subtitle1: {
  //     fontStyle: italic,
  //   },
  // },
  // root: {
  //   display: 'flex',
  // },
  // drawer: {
  //   width: drawerWidth,
  //   flexShrink: 0,
  // },
  // drawerPaper: {
  //   width: drawerWidth,
  // },
  // content: {
  //   flexGrow: 1,
  //   backgroundColor: this.palette.background.default,
  //   padding: this.spacing(3),
  // },
});

function App() {
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

        {/* <Route exact path="/skills">
          <Skills />
        </Route> */}

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
