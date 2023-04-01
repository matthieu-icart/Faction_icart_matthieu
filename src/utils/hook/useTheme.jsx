/* USECONTEXT & THEMECONTEXT */
import { useContext } from 'react'
import { ThemeContext } from '../context/switchTheme.jsx'

/* HOOK USETHEME */
export function useTheme() {
  const { theme, changeTheme } = useContext(ThemeContext)
  return { theme, changeTheme }
}
