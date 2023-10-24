import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/Layout/App.tsx'
import 'semantic-ui-css/semantic.min.css'
import './app/Layout/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
