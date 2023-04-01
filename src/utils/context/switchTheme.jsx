/* REACT, USESTATE & CREATECONTEXT */
import React, { useState, createContext } from 'react'

/* THEME CONTEXT */
export const ThemeContext = createContext()

/* THEME PROVIDER */
export const ThemeProvider = ({ children }) => {
  /* HOOK USESTATE */
  const [theme, setTheme] = useState('light')
  /* FUNCTION */
  const setThemeFunction = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  /* RETURN */
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setThemeFunction,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
