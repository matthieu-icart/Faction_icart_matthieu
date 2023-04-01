// LIGHT & DARK MODE
import { useContext } from 'react'
import { ThemeContext } from '../context/switchTheme.jsx'

/* COLORS & STYLED COMPONENTS */
import { createGlobalStyle } from 'styled-components'
import colors from './colors'

import Night from '../../assets/night.png'
import Day from '../../assets/day.png'

// GLOBAL STYLE
const StyledGlobalStyle = createGlobalStyle`
    body { 
      width: 100vw;
      height: 100vh;

      min-width: 350px;
      min-height: 600px;
      overflow: hidden;

      display: flex;
      justify-content: center;
      align-items: center;
    
      margin : 0 auto;
   
      color : ${({ isDarkMode }) => (isDarkMode ? colors.Light : colors.Dark)};
      font-family: 'VT323', Helvetica, sans-serif;
     
      background-color: ${({ isDarkMode }) =>
        isDarkMode ? colors.Dark : colors.Light};

      background-image: url(${({ isDarkMode }) => (isDarkMode ? Night : Day)});
      background-repeat: space;
      background-size: 50%;


& .AllScreen {
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? colors.Dark : colors.Light};
}
        & h1, h2, h3, p {
          text-align: center;
          margin : 0 auto;
          padding : 0;
        }

        & h1 {
          font-size: 100px;
        }

        & h2 {
          font-size: 50px;
        }

        & h3 {
          font-size: 30px;
        }

        & p {
          font-size: 20px;
        }

        & button { 
          padding: 0;
          font-family: 'VT323', Helvetica, sans-serif;
        }

        & ul {
          margin : 0 auto;
          padding : 0;

          list-style-type: none;
        }

        & li {
          width: 100%;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        & a {
          width: 100%;
          height: 100%;

          display: flex;
          justify-content: center;
          align-items: center;

          margin : 0 auto;
          padding : 0;

          text-decoration: none;
          font-family: 'VT323', Helvetica, sans-serif;
          color: inherit;
 
        }
    }
 `

// FUNCTION
function GlobalStyle() {
  // HOOK USECONTEXT
  const { theme } = useContext(ThemeContext)
  // RETURN
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
