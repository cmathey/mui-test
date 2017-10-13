import * as React from 'react';
import {
  RowDetailState
} from '@devexpress/dx-react-grid';
import {
  Grid,
  TableView,
  TableHeaderRow,
  TableRowDetail,
} from '@devexpress/dx-react-grid-material-ui';

import {
  TableCell, TableRow
} from 'material-ui/Table';


export default class TreeTableX extends React.Component<{}, any> {

  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {name: 'name', title: 'Name'},
        {name: 'sex', title: 'Sex'},
        {name: 'city', title: 'City'}
      ],
      rows: [{
        name: 'Cyril', sex: 'Male', city: 'Paris'
      }, {
        name: 'Cyril', sex: 'Male', city: 'Paris'
      }, {
        name: 'Cyril', sex: 'Male', city: 'Paris'
      }, {
        name: 'Cyril', sex: 'Male', city: 'Paris'
      }, {
        name: 'Cyril', sex: 'Male', city: 'Paris'
      }, {
        name: 'Cyril', sex: 'Male', city: 'Paris'
      }]
    };
  }

  static rowTemplate(row) {
    return (
      <div>Details for {row.name} from {row.city}</div>
    );
  }

  render() {
    const {rows, columns} = this.state;
    const rowTemplate = ({ row }) => <div>Details for {row.name} from {row.city}</div>;
    const cellTemplate = (cell) => {
      console.log(JSON.stringify(cell));
      return <TableCell>One cell</TableCell>
      // return <div>Cell detail</div>;
    }
    const detailRowTemplate = ({ row }) => {
      return (
        <TableRow>
          <TableCell>m€</TableCell>
          <TableCell>2014</TableCell>
          <TableCell>2015</TableCell>
          <TableCell>2016</TableCell>
        </TableRow>
      );
    }
    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <RowDetailState
          defaultExpandedRows={[2, 5]}
        />
        <TableView/>
        <TableHeaderRow/>
        {/*<TableRowDetail*/}
          {/*template={rowTemplate}*/}
          {/*detailCellTemplate={cellTemplate}*/}
          {/*detailRowTemplate={detailRowTemplate}*/}
        {/*/>*/}
        <TableRowDetail
          detailRowTemplate={detailRowTemplate}
        />
      </Grid>
    );
  }
}
