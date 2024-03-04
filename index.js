import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Kontak from './pages/Kontak';
import reportWebVitals from 'reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <Kontak />
    </React.StrictMode>
    document.getElementById('root')
);

reportWebVitals();
