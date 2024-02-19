import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App'
import './style/index.scss'
import { ContextComponent } from './Context/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextComponent >
    <App />
    </ContextComponent>
  </React.StrictMode>,
)
