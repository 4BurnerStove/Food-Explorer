import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import Theme from './styles/theme'

// import { SignUp } from "./pages/SignUp"
// import { SignIn } from "./pages/SignIn"
// import { Home } from "./pages/Home"
// import { DishesPreview } from "./pages/DishesPreview"
import { CreateDishe } from './pages/CreateDishes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <CreateDishe />
    </ThemeProvider>
  </React.StrictMode >,
)
