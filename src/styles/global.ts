import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue}; 
  }

  a {
    color: ${(props) => props.theme.blue};
    &:hover {
      text-decoration: underline;
    }
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased;
    line-height: 160%;
  }

  body, input-security, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }
`
