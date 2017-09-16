import * as React from 'react';
import {RouteComponentProps} from "react-router";
import Typography from "material-ui/Typography";

export default class DashView extends React.Component<RouteComponentProps<{}>, {}> {

  render() {

    return <div className="dash-view">
      <Typography type="display1" color="inherit" noWrap>
        Dashboard
      </Typography>
    </div>;
  }

}
