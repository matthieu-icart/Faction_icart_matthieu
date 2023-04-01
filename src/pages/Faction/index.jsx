/* USESTATE */
import { useState } from 'react'

/* LIGHT & DARK MODE */
import { useTheme } from '../../utils/hook/useTheme'

/* FACTION PACK*/
import { factionPack } from '../../datas/factionPack'

/* COLORS & STYLED-COMPONENTS */
import colors from '../../utils/style/colors'
import styled from 'styled-components'

/* SCREEN, BUTTON & LINE */
import { Screen, Button, Line } from '../../utils/style/Modules'

/* FACTIONS */
const FactionsBlock = styled.div`
  width: 100%;
  height: 95%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

/* BUTTON */
const FactionButton = styled.button`
  width: 90%;
  height: 10%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  background-color: transparent;

  color: ${({ theme }) => (theme === 'dark' ? colors.Light : colors.Dark)};
  border: 2px solid
    ${({ theme }) => (theme === 'dark' ? colors.Light : colors.Dark)};

  & .hover {
    display: none;
  }

  &:hover {
    ${(props) => props.$Balti && `background-color: ${colors.Balti};`}
    ${(props) => props.$Bellagher && `background-color: ${colors.Bellagher};`}
    ${(props) => props.$Ferro && `background-color: ${colors.Ferro};`}
    ${(props) => props.$Havok && `background-color: ${colors.Havok};`}
    ${(props) => props.$Klein && `background-color: ${colors.Klein};`}
    ${(props) => props.$Royce && `background-color: ${colors.Royce};`}
    ${(props) => props.$Sinklair && `background-color: ${colors.Sinklair};`}
    color: ${({ theme }) => (theme === 'dark' ? colors.Dark : colors.Light)};

    & .notHover {
      display: none;
    }

    & .hover {
      display: flex;
    }
  }
`

/* SIMPLE */
const Simple = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

/* HEADER */
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

/* NATION */
const Nation = styled.ul`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  padding: 10%;

  border: 1px solid
    ${({ theme }) => (theme === 'dark' ? colors.Light : colors.Dark)};

  & p {
    text-align: justify;
  }
`

/* CLIMAT */
const Climat = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  padding: 10%;

  border: 1px solid
    ${({ theme }) => (theme === 'dark' ? colors.Light : colors.Dark)};
`

/* FACTIONS */
function Factions() {
  /* LIGHT & DARK MODE */
  const { theme } = useTheme()

  /* FACTION SELECTED */
  let [thisFaction, setThisFaction] = useState('all')

  /* RETURN */
  return (
    <Screen theme={theme}>
      {thisFaction === 'all' && (
        /* ALL */
        <FactionsBlock key={thisFaction}>
          {/* BALTI */}
          <FactionButton
            $Balti
            theme={theme}
            onClick={() => setThisFaction(0)}
            className="balti"
          >
            <p className="notHover">BALTI</p>
            <p className="hover">OLIGARCHIE</p>
          </FactionButton>

          {/* BELLAGHER */}
          <FactionButton
            $Bellagher
            onClick={() => setThisFaction(1)}
            theme={theme}
            className="bellagher"
          >
            <p className="notHover">BELLAGHER</p>
            <p className="hover">DEMOCRATIE</p>
          </FactionButton>

          {/* FERRO */}
          <FactionButton
            $Ferro
            onClick={() => setThisFaction(2)}
            theme={theme}
            className="ferro"
          >
            <p className="notHover">FERRO</p>
            <p className="hover">AUTOCRATIE</p>
          </FactionButton>

          {/* HAVOK */}
          <FactionButton
            $Havok
            onClick={() => setThisFaction(3)}
            theme={theme}
            className="havok"
          >
            <p className="notHover">HAVOK</p>
            <p className="hover">ANARCHIE</p>
          </FactionButton>

          {/* KLEIN */}
          <FactionButton
            $Klein
            onClick={() => setThisFaction(4)}
            theme={theme}
            className="klein"
          >
            <p className="notHover">KLEIN</p>
            <p className="hover">TECHNOCRATIE</p>
          </FactionButton>

          {/* ROYCE */}
          <FactionButton
            $Royce
            onClick={() => setThisFaction(5)}
            theme={theme}
            className="royce"
          >
            <p className="notHover">ROYCE</p>
            <p className="hover">MONARCHIE</p>
          </FactionButton>

          {/* SINKLAIR */}
          <FactionButton
            $Sinklair
            onClick={() => setThisFaction(6)}
            theme={theme}
            className="sinklair"
          >
            <p className="notHover">SINKLAIR</p>
            <p className="hover">THEOCRATIE</p>
          </FactionButton>
        </FactionsBlock>
      )}

      {/* SIMPLE */}
      {thisFaction !== 'all' && (
        <Simple>
          {/* HEADER */}
          <Header>
            <h2>{factionPack[thisFaction].title}</h2>
            <Line></Line>
            <h3>{factionPack[thisFaction].decision}</h3>
          </Header>

          {/* NATION */}
          <Nation theme={theme}>
            <p>
              {factionPack[thisFaction].color}{' '}
              {factionPack[thisFaction].symbole}{' '}
              {factionPack[thisFaction].peuple} {factionPack[thisFaction].chef}
            </p>
          </Nation>

          {/* CLIMAT */}
          <Climat theme={theme}>
            <p>{factionPack[thisFaction].climatTitle}</p>
            <Line></Line>
            <p>{factionPack[thisFaction].climat}</p>
          </Climat>

          {/* BUTTON */}
          <Button theme={theme} onClick={() => setThisFaction('all')}>
            <p>Retour</p>
          </Button>
        </Simple>
      )}
    </Screen>
  )
}

export default Factions
