
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DataProvider } from './components/DataProvider/DataProvider'; 
import { Reducer, initialState } from './utility/Reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider reducer={Reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);
