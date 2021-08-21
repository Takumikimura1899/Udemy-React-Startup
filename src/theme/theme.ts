import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    // type: 'dark',
    // text: { primary: '#dd2c00' },
    primary: {
      main: '#009688',
      contrastText: '#795548',
    },
    background: {
      default: '#bdbdbd',
    },
    text: { primary: '#ff9800' },
  },
});

export default theme;
