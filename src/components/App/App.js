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

// const drawerWidth = 240;

/*
  Generate own Material-UI theme
*/
const customTheme = createMuiTheme({
  // Theme Settings
  palette: {
    //type: 'dark',
    primary: {
      main: '#d32f2f',
    },
    secondary: {
      main: '#0000ee',
    },
    // error: {
    //   main: '#f44336',
    // },
    // warning: {
    //   main: '#ff9800',
    // },
    // info: {
    //   main: '#2196f3',
    // },
    // success: {
    //   main: '#4caf50',
    // },
    // background: {
    //   default: '#9e9e9e',
    // },
  },
  typography: {
    fontFamily: ['Lora', 'serif'].join(','),
    fontSize: 18,
    h1: {
      fontFamily: ['Cabin', 'sans-serif'].join(','),
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: ['Cabin', 'sans-serif'].join(','),
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: ['Cabin', 'sans-serif'].join(','),
    },
    subtitle1: {
      fontStyle: 'italic',
    },
    subtitle2: {
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '',
    },
    body2: {},
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 'bold',
      },
    },
    // MuiDrawer: {
    //   root: {
    //     width: drawerWidth,
    //     flexShrink: '0',
    //   },
    //   paper: {
    //     width: drawerWidth,
    //   },
    // },
  },
  // root: {
  //   display: 'flex',
  //   '& > *': {
  //     margin: theme.spacing(1),
  //   }
  // },
  // drawer: {
  //   width: drawerWidth,
  //   flexShrink: 0,
  // },
  // drawerPaper: {
  //   width: drawerWidth,
  // },
  // content: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.default,
  //   padding: theme.spacing(3),
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

        <Route exact path="/skills">
          <Skills />
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
