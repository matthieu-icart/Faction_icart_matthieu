/* LIGHT AND DARK MODE */
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context/switchTheme.jsx'

/* LINK */
import { Link } from 'react-router-dom'

/* COLORS & STYLED COMPONENTS */
import colors from '../../utils/style/colors'
import styled from 'styled-components'

/* SMALL ICON */
import { SmallIcon } from '../../utils/style/Modules'

/* HEADER */
const HeaderBlock = styled.header`
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2%;

  border-top: 3px solid
    ${({ theme }) => (theme === 'light' ? colors.primary : colors.secondary)};
  border-right: 3px solid
    ${({ theme }) => (theme === 'light' ? colors.primary : colors.secondary)};
  border-left: 3px solid
    ${({ theme }) => (theme === 'light' ? colors.primary : colors.secondary)};
`

/* NAVIGATION */
const Navigation = styled.ul`
  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

/* ELEMENT */
const Element = styled.li`
  width: 100%;
  height: 100%;

  color: inherit;
  background-color: inherit;
  cursor: pointer;
  border: none;

  & a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &:hover p {
    display: block;
  }
`

/* TEXT */
const Text = styled.p`
  display: none;
`

/* BUTTON */
const Button = styled.button`
  color: ${({ theme }) => (theme === 'dark' ? colors.Light : colors.Dark)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;
`

/* HEADER */
function Header() {
  /* HOOK USECONTEXT */
  const { theme, setThemeFunction } = useContext(ThemeContext)

  /* RETURN */
  return (
    <HeaderBlock>
      {/* NAVIGATION */}
      <Navigation>
        {/* LIGHT & DARK MODE */}
        <Element>
          <Button theme={theme} onClick={() => setThemeFunction()}>
            {theme === 'light' && (
              <SmallIcon className="fa-sharp fa-solid fa-sun"></SmallIcon>
            )}
            {theme !== 'light' && (
              <SmallIcon className="fa-sharp fa-solid fa-moon"></SmallIcon>
            )}
            <Text>Switch</Text>
          </Button>
        </Element>
        {/* HOME */}
        <Element>
          <Link to="/">
            <SmallIcon className="fa-sharp fa-solid fa-house"></SmallIcon>
            <Text>Home</Text>
          </Link>
        </Element>
        {/* TEST */}
        <Element>
          <Link to="/test">
            <SmallIcon className="fa-sharp fa-solid fa-file-circle-question"></SmallIcon>
            <Text>Test</Text>
          </Link>
        </Element>
        {/* FACTION */}
        <Element>
          <Link to="/faction">
            <SmallIcon className="fa-sharp fa-solid fa-people-group"></SmallIcon>
            <Text>Faction</Text>
          </Link>
        </Element>
      </Navigation>
    </HeaderBlock>
  )
}

export default Header
