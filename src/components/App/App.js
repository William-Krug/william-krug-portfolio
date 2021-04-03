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
// import Header from '../Header/Header';
import Home from '../Home/Home';
import LeftDrawer from '../LeftDrawer/LeftDrawer';
import Projects from '../Projects/Projects';

/* Import Styling */
import logo from '../../logo.svg';
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
  return (
    <>
      <Router>
        {/* <Header /> */}
        <LeftDrawer />
      </Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
