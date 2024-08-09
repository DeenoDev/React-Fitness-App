import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

import App from './App';

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
  
);