import React from 'react';
import ReactDOM from 'react-dom/client';
import Productos from '../Productos/Productos';
import './mfe.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Productos titulo='Productos en stock' />
  </React.StrictMode>
);
