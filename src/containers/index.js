import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import theme from '../theme';
import store from '../store';
import App from './App';

function Application() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            maxSnack={3}
            autoHideDuration={3000}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
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
