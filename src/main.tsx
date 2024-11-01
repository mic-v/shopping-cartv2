import { StrictMode } from 'react'
import ReactDOM  from 'react-dom/client'
import App from './app/App'
import './index.css'

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render (
  <StrictMode>
    <App />
  </StrictMode>,
)
