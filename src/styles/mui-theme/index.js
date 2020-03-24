import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import blueGrey from '@material-ui/core/colors/blueGrey';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[50],
      dark: teal[100],
    },
    secondary: {
      main: blueGrey[50],
      dark: red[400],
    },
  },
});
