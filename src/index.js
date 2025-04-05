import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/layout/Header';
import MainLayout from './components/layout/MainLayout';

import './assets/css/base.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout>
        <Header />
        <App />
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
