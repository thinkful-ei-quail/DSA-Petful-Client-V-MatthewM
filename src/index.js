import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Root from './root/Root'
require('dotenv').config();
console.log(process.env)

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
  , document.getElementById('root')
);
