import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios"
import { Provider } from 'react-redux';
import {store} from "./redux/store"
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ChakraProvider>
  <Provider store={store}>
    <App />
  </Provider>
  </ChakraProvider>
  </BrowserRouter>
);

reportWebVitals();
