import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

// import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';

// import store from 'store/index';
import App from './App';

// const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <App />
      </SnackbarProvider>
      {/* </PersistGate> */}
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
