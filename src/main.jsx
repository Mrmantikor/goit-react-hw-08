import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { Toaster } from 'react-hot-toast';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  CircularProgress,
  Box,
} from '@mui/material';
import App from './App.jsx';
import './index.css';
import 'modern-normalize';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <PersistGate
          loading={
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
              }}
            >
              <CircularProgress />
            </Box>
          }
          persistor={persistor}
        >
          <App />
        </PersistGate>

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 2000,
          }}
        />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
