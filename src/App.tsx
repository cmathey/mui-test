import * as React from 'react';
import './App.css';

import {Route, RouteComponentProps, Switch} from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBaseTheme, MuiThemeProvider} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import {DASH_PATH, SETUP_PATH} from './Path';
import DashView from './components/DashView';
import VerticalNavbar from './components/VerticalNavbar';
import SetupView from "./components/SetupView";

// import DashView from './dash/DashView';
// import Users from './users/Users';
// import Entities from './entities/Entities';

// import './Application.scss';
const lightMuiTheme = getMuiTheme(lightBaseTheme);

interface IAppState {
  drawerOpen: boolean
}

class App extends React.Component<{} & RouteComponentProps<{}>, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = { drawerOpen: true };
  }
  render() {
    const contentStyle: any = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };
    if (this.state.drawerOpen) {
      contentStyle.marginLeft = 128;
    }
    return (
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <div className="application">
          <VerticalNavbar {...this.props} opened={this.state.drawerOpen} />
          <header>
            <AppBar title="MUIdqsdqsdqsdsq sq dsq"/>
          </header>
          <div style={contentStyle}>
            <Switch>
              <Route exact path={DASH_PATH} component={DashView}/>
              <Route exact path={SETUP_PATH} component={SetupView}/>
            </Switch>
          </div>
          {/*<div id="page-wrapper">*/}
          {/**/}
          {/*</div>*/}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
