import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { App } from './App'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { GithubProvider } from './contexts/GithubContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <GithubProvider>
          <App />
        </GithubProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
