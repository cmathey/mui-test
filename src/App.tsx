import * as React from 'react';
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router';
import AppBar from 'material-ui/AppBar';
import {DASH_PATH, SETUP_PATH, USERS_PATH} from './Path';
import DashView from './components/DashView';
import SetupView from "./components/SetupView";
import Typography from "material-ui/Typography";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import {ListItemText} from "material-ui/List";
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import MenuIcon from 'material-ui-icons/Menu';
import classNames from 'classnames';
import DashboardIcon from 'material-ui-icons/Dashboard';
import SettingsIcon from 'material-ui-icons/Settings';
import UsersIcon from 'material-ui-icons/Group';

import withStyles from "material-ui/styles/withStyles";
import {styles} from './App.styles';
import {darkTheme, lightTheme} from './App.theme';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {MenuItem} from "material-ui";
import {Link} from "react-router-dom";
import {Location} from "history";
// import './App.css';

// import DashView from './dash/DashView';
// import Users from './users/Users';
// import Entities from './entities/Entities';


const NoMatch = (location): any => (
  <div className="error-message">
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);



// const navRoutes = [
//   {
//     path: DASH_PATH,
//     label: 'Dashboard',
//     icon: <DashboardIcon/>
//   }
// ];

function makeNavItem(classes: any, icon: any, label: string, path: string, location: Location): any {
  return (
    <Link to={path}>
      <MenuItem className={classes.navItem} selected={location.pathname === path}>
        {icon}
        {/*<Typography type="body2" color="inherit" noWrap style={{marginTop: 4}}>*/}
        {/*{label}*/}
        {/*</Typography>*/}
        <ListItemText className={classes.navItemText} primary={label}/>
      </MenuItem>
    </Link>
  );
}

interface IAppState {
  drawerOpened: boolean
}

class App extends React.Component<any & RouteComponentProps<{}>, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {drawerOpened: true};
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen() {
    this.setState({drawerOpened: true});
  };

  handleDrawerClose() {
    this.setState({drawerOpened: false});
  };

  render() {
    const {classes, location} = this.props;

    return (
      <MuiThemeProvider theme={lightTheme}>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar className={classNames(classes.appBar, this.state.drawerOpened && classes.appBarShift)}>
              <Toolbar disableGutters={!this.state.drawerOpened}>
                <IconButton
                  color="contrast"
                  aria-label="open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, this.state.drawerOpened && classes.hide)}
                >
                  <MenuIcon/>
                </IconButton>
                <Typography type="title" color="inherit" noWrap>
                  Persistent drawer
                </Typography>
              </Toolbar>
            </AppBar>
            <MuiThemeProvider theme={darkTheme}>
              <Drawer
                type="persistent"
                classes={{
                  paper: classes.drawerPaper,
                }}
                open={this.state.drawerOpened}
              >
                <div className={classes.drawerInner}>
                  <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                      <ChevronLeftIcon/>
                    </IconButton>
                  </div>
                  <Divider/>
                  {
                    makeNavItem(classes, <DashboardIcon className={classes.navIcon}/>, 'Dashboard', DASH_PATH, location)
                  }
                  {
                    makeNavItem(classes, <SettingsIcon className={classes.navIcon}/>, 'Setup', SETUP_PATH, location)
                  }
                  {
                    makeNavItem(classes, <UsersIcon className={classes.navIcon}/>, 'Users', USERS_PATH, location)
                  }
                </div>
              </Drawer>
            </MuiThemeProvider>
            <main className={classNames(classes.content, this.state.drawerOpened && classes.contentShift)}>
              <Switch>
                <Route exact path={DASH_PATH} component={DashView}/>
                <Route exact path={SETUP_PATH} component={SetupView}/>
                <Redirect from="/" to={DASH_PATH}/>
                <Route component={NoMatch}/>
              </Switch>
            </main>
          </div>
        </div>
      </MuiThemeProvider>
      // <div className="application">
      //   <VerticalNavbar {...this.props} opened={this.state.drawerOpen}/>
      //   <header>
      //     <AppBar title="MUIdqsdqsdqsdsq sq dsq"/>
      //   </header>
      //   <div style={contentStyle}>
      //     <Switch>
      //       <Route exact path={DASH_PATH} component={DashView}/>
      //       <Route exact path={SETUP_PATH} component={SetupView}/>
      //     </Switch>
      //     <Typography type="display1" gutterBottom>
      //       Display 1
      //     </Typography>
      //   </div>
      //   {/*<div id="page-wrapper">*/}
      //   {/**/}
      //   {/*</div>*/}
      // </div>
    );
  }
}

export default withStyles(styles)(App);
