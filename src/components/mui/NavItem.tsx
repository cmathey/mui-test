import * as React from 'react';
import {withStyles} from 'material-ui/styles';
import MenuItem from "material-ui-icons/Menu";
// import {MenuItem} from "material-ui";


const styles: any = (theme: any) => ({
  selected: {
    backgroundColor: 'red'
  },
});

// class NavItem extends MenuItem {
//
// }

export default withStyles(styles)(MenuItem);
