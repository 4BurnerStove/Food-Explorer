import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import Theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </GlobalStyles>
  </React.StrictMode>,
)
