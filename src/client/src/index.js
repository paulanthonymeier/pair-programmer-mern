import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { debugContextDevtool } from 'react-context-devtool';

const container = document.getElementById('root');

ReactDOM.render(<Router><App /></Router>, container);

debugContextDevtool(container);