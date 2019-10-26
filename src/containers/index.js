import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import theme from '../theme';
import store from '../store';
import App from './App';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    top: 60,
  },
});

function Application() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            dense
            maxSnack={3}
            autoHideDuration={2000}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            classes={classes}
          >
            <CssBaseline />
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

export default Application;
