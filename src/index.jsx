// REACT & CREATEROOT
import React from 'react'
import { createRoot } from 'react-dom/client'

// APP
import App from './app'

// INSERT APP RENDER -> DOCUMENT.ROOT
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
