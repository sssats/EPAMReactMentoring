import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from './pages/home';
import DetailPage from './pages/details'

import '../sass/style.scss'

ReactDOM.render(
    <DetailPage/>,
    document.getElementById('root')
);

module.hot.accept();