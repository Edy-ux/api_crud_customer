import { createRoot } from 'react-dom/client';
import React from 'react';
import { MyProvider } from './components/context/context';
import App from './App';


const root = createRoot(document.querySelector('#root'));
root.render(
  <MyProvider>
    <App />
  </MyProvider>
);
