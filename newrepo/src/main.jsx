import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/**you can put your</BrowserRouter> <App/> </BrowserRouter> like this if it doesn't work */}
   <BrowserRouter>
   <App />
   </BrowserRouter>
  </React.StrictMode>,
)
