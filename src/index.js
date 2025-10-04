import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./theme.css"; 

import App from './App';
import { GoogleOAuthProvider } from "@react-oauth/google";

import reportWebVitals from './reportWebVitals';

import '@fontsource/inter/500.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/open-sans/400.css';

const GOOGLE_CLIENT_ID = "664647325083-i1n501c6v085ia02q36a9l70llkuh9ba.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById('root'));
/* root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
