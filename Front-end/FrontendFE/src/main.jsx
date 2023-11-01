import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import Theme from './styles/theme'

import { SignIn } from "./pages/SignIn"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <ThemeProvider theme={Theme}>
        <SignIn />
      </ThemeProvider>

  </React.StrictMode>,
)
