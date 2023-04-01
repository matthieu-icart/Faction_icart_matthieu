/* LINK */
import { Link } from 'react-router-dom'

/* QUESTS & ANSWERS */
import { useContext } from 'react'
import { TestContext } from '../../utils/context/switchTest.jsx'

/* LIGHT & DARK MODE */
import { useTheme } from '../../utils/hook/useTheme'

/* COLORS & STYLED-COMPONENTS */
import colors from '../../utils/style/colors'
import styled from 'styled-components'

/* SCREEN, BUTTON, SMALL ICON, SOCIETY, CENTER, LEFT & RIGHT BAR */
import {
  Screen,
  Button,
  SmallIcon,
  Society,
  CenterBar,
  LeftBar,
  RightBar,
} from '../../utils/style/Modules'

/* Title */
const Title = styled.h1`
  font-size: 70px;

  margin-top: -30px;
`

/* SOCIETY */
const SocietyResult = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 2%;
  margin: 0 auto;
`

/* FACTION */
const Faction = styled.div`
  width: 90%;
  height: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  border: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.primary : colors.secondary)};
`

/* RANK */
const Rank = styled.div`
  width: 30%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & p {
    margin: 0;

    font-size: 30px;
  }
`

/* NAME */
const Name = styled.div`
  width: 40%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

/* NOTE */
const Note = styled.div`
  width: 30%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const DivKey = styled.div`
  width: 100%;
`

/* RESULTS */
function Results() {
  /* LIGHT & DARK MODE */
  let { theme } = useTheme()

  /* ANSWERS */
  let { answers } = useContext(TestContext)
  let { society } = useContext(TestContext)

  /* ANSWERS SCORE FUNCTION */
  function getResult(answers) {
    /* COMPTAGE DES POINTS */
    let pointsCounter = {}
    for (let index in answers) {
      answers[index].forEach((answer) => {
        if (answer in pointsCounter) {
          pointsCounter[answer]++
        } else {
          pointsCounter[answer] = 1
        }
      })
    }
    let Points = Object.entries(pointsCounter).sort((a, b) => b[1] - a[1])
    return Points
  }

  /* SOCIETY SCORE FUNCTION */
  function getSociety(society) {
    /* POINTS */
    let societyCounter = { Groupe: 0, Individu: 0, Neutre: 0 }
    for (let index in society) {
      society[index].forEach((reply) => {
        if (reply in societyCounter) {
          societyCounter[reply]++
        } else {
          societyCounter[reply] = 1
        }
      })
    }
    return societyCounter
  }

  /* RESULTATS */
  let answersResult = getResult(answers)
  let societyResult = getSociety(society)

  /* SOCIETY WIDTH */
  let groupeWidth = Object.values(societyResult)[0] * 4
  let individuWidth = Object.values(societyResult)[1] * 4
  let NeutreWidth = Object.values(societyResult)[2] * 4

  /* RETURN */
  return (
    <Screen theme={theme}>
      <Title>RESULTATS</Title>
      {/* SOCIETY */}
      <SocietyResult>
        <SmallIcon className="fa-sharp fa-solid fa-users"></SmallIcon>
        <Society theme={theme}>
          {/* LEFT */}
          <LeftBar theme={theme} style={{ width: `${groupeWidth}%` }}></LeftBar>

          {/* CENTER */}
          <CenterBar
            theme={theme}
            style={{ width: `${NeutreWidth}%` }}
          ></CenterBar>

          {/* RIGHT */}
          <RightBar
            theme={theme}
            CenterBar
            style={{ width: `${individuWidth}%` }}
          ></RightBar>
        </Society>
        <SmallIcon className="fa-sharp fa-solid fa-user"></SmallIcon>
      </SocietyResult>

      {/* FACTIONS */}
      {answersResult.map((result, index) => (
        <DivKey key={index}>
          {result[1] >= 12.5 && (
            <Faction>
              <Rank>
                <SmallIcon className="fa-sharp fa-solid fa-hashtag"></SmallIcon>
                <p>{index + 1}</p>
              </Rank>
              <Name>
                <p>{result[0]}</p>
                <p>{result[1] * 4} %</p>
              </Name>
              <Note>
                <SmallIcon className="fa-sharp fa-solid fa-star"></SmallIcon>
                <SmallIcon className="fa-sharp fa-solid fa-star"></SmallIcon>
                <SmallIcon className="fa-sharp fa-solid fa-star"></SmallIcon>
              </Note>
            </Faction>
          )}

          {/* ( ** ) */}
          {result[1] >= 10 && result[1] < 12.5 && (
            <Faction>
              <Rank>
                <SmallIcon className="fa-sharp fa-solid fa-hashtag"></SmallIcon>
                <p>{index + 1}</p>
              </Rank>
              <Name>
                <p>{result[0]}</p>
                <p> {result[1] * 4} %</p>
              </Name>
              <Note>
                <SmallIcon className="fa-sharp fa-solid fa-star"></SmallIcon>
                <SmallIcon className="fa-sharp fa-solid fa-star"></SmallIcon>
              </Note>
            </Faction>
          )}

          {/* ( * ) */}
          {result[1] > 6.5 && result[1] < 10 && (
            <Faction>
              <Rank>
                <SmallIcon className="fa-sharp fa-solid fa-hashtag"></SmallIcon>
                <p>{index + 1}</p>
              </Rank>
              <Name>
                <p>{result[0]}</p>
                <p> {result[1] * 4} %</p>
              </Name>
              <Note>
                <SmallIcon className="fa-sharp fa-solid fa-star"></SmallIcon>
              </Note>
            </Faction>
          )}

          {/* ( Ø ) */}
          {result[1] <= 6.5 && (
            <Faction>
              <Rank>
                <SmallIcon className="fa-sharp fa-solid fa-hashtag"></SmallIcon>
                <p>{index + 1}</p>
              </Rank>
              <Name>
                <p>{result[0]}</p>
                <p> {result[1] * 4} %</p>
              </Name>
              <Note>
                <SmallIcon className="fa-sharp fa-solid fa-star"></SmallIcon>
              </Note>
            </Faction>
          )}
        </DivKey>
      ))}

      {/* HOME */}
      <Button theme={theme}>
        <Link to="/">
          <SmallIcon
            theme={theme}
            className="fa-sharp fa-solid fa-house"
          ></SmallIcon>
        </Link>
      </Button>
    </Screen>
  )
}

export default Results
