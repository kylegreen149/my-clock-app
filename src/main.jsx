import { render } from 'preact'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app.jsx'

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))
