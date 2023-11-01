import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import Theme from './styles/theme'

import { SignIn } from "./pages/SignIn"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <SignIn />
    </ThemeProvider>
  </React.StrictMode >,
)
