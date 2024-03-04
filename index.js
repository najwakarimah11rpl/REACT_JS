import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Kontak from './pages/kontak';
import Nav from './pages/nav';
import Sejarah from './pages/sejarah';
import reportWebVitals from 'reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <Kontak />
    </React.StrictMode>
    document.getElementById('root')
);



reportWebVitals();

