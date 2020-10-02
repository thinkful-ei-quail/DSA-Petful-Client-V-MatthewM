import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root/Root'
require('dotenv').config();
console.log(process.env)

ReactDOM.render(<Root />, document.getElementById('root'))
