// import { createTheme } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blueGrey } from '@material-ui/core/colors';
export const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
      light: blueGrey[300],
      dark: blueGrey[700]
    },
    secondary: {
      main: blueGrey[700],
      light: blueGrey[500]
    }
  }
});
