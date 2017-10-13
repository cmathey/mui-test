import * as React from 'react';
import * as update from 'immutability-helper';
import {TableRow, TableCell} from 'material-ui/Table';

const ReactDataGrid = require('react-data-grid');
// Note: typings do no seem up-to-date (raises error on getSubRowDetails prop)
// import * as ReactDataGrid from "react-data-grid";

const sampleEntities = [{
  'id': 1,
  'code': 'GROUP',
  'name': 'Consolis Operative Group',
  'children': [
    {
      'id': 2,
      'code': 'BUILD',
      'name': 'Building',
      'children': [
        {
          'id': 3,
          'code': 'BUILDING-FR',
          'name': 'Building France',
          'children': []
        },
        {
          'id': 4,
          'code': 'BUILDING-UK',
          'name': 'Building UK',
          'children': []
        }
      ]
    },
    {
      'id': 5,
      'name': 'Infrastructure',
      'code': 'INFRA',
      'children': []
    }
  ]
}];

const HeaderRenderer = () => {
  return (
    <div>
      {"Hello"}
    </div>
  );
}

const columns = [
  // {
  //   key: 'id',
  //   name: 'id',
  //   locked: true
  // },
  {
    key: 'code',
    name: 'Code',
    editable: true,
    headerRenderer: HeaderRenderer,
    formatter: (props) => {
      return <TableCell>Hello</TableCell>;
    }
  },
  {
    key: 'name',
    name: 'Name',
    editable: true
  }
];

export default class TreeTable extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    let rows = sampleEntities;
    this.state = {expanded: {}, rows: rows};
  }

  updateState(updates) {
    const newState = update(this.state, updates);
    // console.log(newState);
    this.setState(newState);
  }

  getRows(i) {
    return this.state.rows[i];
  }

  getSubRowDetails(rowItem) {
    let isExpanded = this.state.expanded[rowItem.code] ? this.state.expanded[rowItem.code] : false;
    return {
      group: rowItem.children && rowItem.children.length > 0,
      expanded: isExpanded,
      children: rowItem.children,
      field: 'code',
      treeDepth: rowItem.treeDepth || 0,
      siblingIndex: rowItem.siblingIndex,
      numberSiblings: rowItem.numberSiblings
    };
  }

  onCellExpand(args) {
    let rows = this.state.rows.slice(0);
    let rowKey = args.rowData.code;
    let rowIndex = rows.indexOf(args.rowData);
    let subRows = args.expandArgs.children;

    let expanded = Object.assign({}, this.state.expanded);
    if (expanded && !expanded[rowKey]) {
      expanded[rowKey] = true;
      this.updateSubRowDetails(subRows, args.rowData.treeDepth);
      rows.splice(rowIndex + 1, 0, ...subRows);
    } else if (expanded[rowKey]) {
      expanded[rowKey] = false;
      rows.splice(rowIndex + 1, subRows.length);
    }

    this.setState({expanded: expanded, rows: rows});
  }

  onGridRowsUpdated({fromRow, toRow, updated}) {
    let rows = this.state.rows.slice();
    for (let i = fromRow; i <= toRow; i++) {
      rows[i] = update(rows[i], {$merge: updated});
    }

    this.updateState({rows: {$set: rows}});
  }

  updateSubRowDetails(subRows, parentTreeDepth) {
    let treeDepth = parentTreeDepth || 0;
    subRows.forEach((sr, i) => {
      sr.treeDepth = treeDepth + 1;
      sr.siblingIndex = i;
      sr.numberSiblings = subRows.length;
    });
  }

  onDeleteSubRow(args) {
    let idToDelete = args.rowData.id;
    let rows = this.state.rows.slice(0);
    // Remove sub row from parent row.
    rows = rows.map(r => {
      let children = [];
      if (r.children) {
        children = r.children.filter(sr => sr.id !== idToDelete);
        if (children.length !== r.children.length) {
          this.updateSubRowDetails(children, r.treeDepth);
        }
      }
      return Object.assign({}, r, {children});
    });
    // Remove sub row from flattened rows.
    rows = rows.filter(r => r.id !== idToDelete);
    this.setState({rows});
  }

  onAddSubRow(args) {
    console.log('add sub row');
    console.log(args);
  }

  render() {
    const rowRenderer = (props) => {
      return (
        <TableRow>
          <ReactDataGrid.Row {...props}/>
        </TableRow>
      );
    };
    return (
      <ReactDataGrid
        enableCellSelect={true}
        columns={columns}
        rowGetter={this.getRows.bind(this)}
        rowsCount={this.state.rows.length}
        rowRenderer={rowRenderer}
        minHeight={500}
        onCellExpand={this.onCellExpand.bind(this)}
        getSubRowDetails={this.getSubRowDetails.bind(this)}
        onDeleteSubRow={this.onDeleteSubRow.bind(this)}
        onAddSubRow={this.onAddSubRow.bind(this)}
        onGridRowsUpdated={this.onGridRowsUpdated.bind(this)}
        style={{boxSizing: 'border-box'}}
      />
    );
  }

}
