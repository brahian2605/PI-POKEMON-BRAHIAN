import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './Redux/Store';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

const rootElement = createRoot(root);
rootElement.render(app);