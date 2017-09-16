// import pink from 'material-ui/colors/pink';
import indigo from 'material-ui/colors/indigo';
import createMuiTheme from "material-ui/styles/createMuiTheme";
import * as update from 'immutability-helper';

const themeOptions = {
  palette: {
    // type: 'dark', // Switching the dark mode on is a single property value change.
    primary: indigo, // Purple and green play nicely together.
  },
};

export const lightTheme = createMuiTheme(themeOptions);
export const darkTheme = createMuiTheme(update(themeOptions, {palette: {type: {$set: 'dark'}}}));
