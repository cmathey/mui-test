import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import {
  Grid, TableView, TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';
import TreeTableX from './TreeTableX';

export default class DashView extends React.Component<RouteComponentProps<{}>, {}> {

  render() {

    return (
      <div>
        <TreeTableX/>
        {/*<Grid*/}
          {/*rows={[*/}
            {/*{id: 0, product: 'DevExtreme', owner: 'DevExpress'},*/}
            {/*{id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress'}*/}
          {/*]}*/}
          {/*columns={[*/}
            {/*{name: 'id', title: 'ID'},*/}
            {/*{name: 'product', title: 'Product'},*/}
            {/*{name: 'owner', title: 'Owner'}*/}
          {/*]}>*/}
          {/*<TableView/>*/}
          {/*<TableHeaderRow/>*/}
        {/*</Grid>*/}
      </div>

    );

  }

}
