import * as React from 'react';
// import './App.css';

import {Route, RouteComponentProps, Switch} from 'react-router';
import AppBar from 'material-ui/AppBar';
import {DASH_PATH, SETUP_PATH} from './Path';
import DashView from './components/DashView';
import VerticalNavbar from './components/VerticalNavbar';
import SetupView from "./components/SetupView";
import Typography from "material-ui/Typography";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import List from "material-ui/List";
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import MenuIcon from 'material-ui-icons/Menu';
import classNames from 'classnames';

// import DashView from './dash/DashView';
// import Users from './users/Users';
// import Entities from './entities/Entities';


import {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import withStyles from "material-ui/styles/withStyles";
import {styles} from './App.styles';
import {lightTheme, darkTheme} from './App.theme';
import {StyleRulesCallback} from "material-ui/styles";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import createMuiTheme from "material-ui/styles/createMuiTheme";
import {MenuItem} from "material-ui";

const drawerWidth = 240;


const mailFolderListItems = (classes) => (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon className={classes.navIcon}/>
      </ListItemIcon>
      <ListItemText primary="Inbox"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon/>
      </ListItemIcon>
      <ListItemText primary="Starred"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon/>
      </ListItemIcon>
      <ListItemText primary="Send mail"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon/>
      </ListItemIcon>
      <ListItemText primary="Drafts"/>
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon style={{
          width: 36,
          height: 36,
        }}/>
      </ListItemIcon>
      <ListItemText primary="All mail"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon/>
      </ListItemIcon>
      <ListItemText primary="Trash"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon/>
      </ListItemIcon>
      <ListItemText primary="Spam"/>
    </ListItem>
  </div>
);

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
    const {classes} = this.props;

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
                  <List className={classes.list}>
                    <div>
                      <ListItem button>
                        <ListItemIcon>
                          <InboxIcon className={classes.navIcon}/>
                        </ListItemIcon>
                        <ListItemText primary="Inbox"/>
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <StarIcon className={classes.navIcon}/>
                        </ListItemIcon>
                        <ListItemText primary="Starred"/>
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <SendIcon className={classes.navIcon}/>
                        </ListItemIcon>
                        <ListItemText primary="Send mail"/>
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <DraftsIcon className={classes.navIcon}/>
                        </ListItemIcon>
                        <ListItemText primary="Drafts"/>
                      </ListItem>
                    </div>
                  </List>
                  <Divider/>
                  <MenuItem selected={true}>TTTT</MenuItem>
                  <List className={classes.list}>{otherMailFolderListItems}</List>
                </div>
              </Drawer>
            </MuiThemeProvider>
            <main className={classNames(classes.content, this.state.drawerOpened && classes.contentShift)}>
              <Typography type="body1" noWrap>
                {'You think water moves fast? You should see ice.'}
              </Typography>
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
