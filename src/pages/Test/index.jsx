/* LINK */
import { Link } from 'react-router-dom'

/* QUEST & ANSWERS */
import { useContext } from 'react'
import { TestContext } from '../../utils/context/switchTest.jsx'

/* QUESTIONS */
import questionPack from '../../datas/questionPack'

/* LIGHT & DARK MODE */
import { useTheme } from '../../utils/hook/useTheme'

/* STYLED-COMPONENTS */
import styled from 'styled-components'

/* SCREEN, PROGRESSION, BUTTON, ICON & LINE */
import {
  Screen,
  Progression,
  Button,
  Icon,
  Line,
} from '../../utils/style/Modules'

/* CONCEPT */
const Concept = styled.h1`
  font-size: 30px;
`

/* QUESTION  */
const Question = styled.h2`
  width: 90%;
  height: 50px;

  box-sizing: border-box;
  font-size: 25px;
`

/* TEST */
function Test() {
  /* LIGHT & DARK MODE */
  let { theme } = useTheme()

  /* HOOK USECONTEXT */
  let { quest, setQuest } = useContext(TestContext)
  let { saveAnswers } = useContext(TestContext)
  let { saveSociety } = useContext(TestContext)

  /* QUESTION NUMBER */
  let numberOfQuestion = Object.keys(questionPack).length

  /* PROGRESSION BAR WIDTH */
  let width = ((quest / numberOfQuestion) * 100 + 4).toFixed(2)

  /* SAVE ANSWERS */
  function saveResponse(numberOfQuestion, answer) {
    saveAnswers({ [numberOfQuestion]: answer })
  }

  /* SAVE SOCIETY */
  function setSociety(numberOfQuestion, society) {
    saveSociety({ [numberOfQuestion]: society })
  }

  /* QUESTION SUIVANTE */
  function nextQuest() {
    if (quest !== numberOfQuestion) {
      setQuest(quest + 1)
    }
  }

  /* QUESTION PRECEDENTE */
  function prevQuest() {
    if (quest !== 0) {
      setQuest(quest - 1)
    }
  }

  /* RETURN */
  return (
    <Screen theme={theme}>
      {quest <= numberOfQuestion - 1 && (
        <>
          {/* PROGRESSION BAR */}
          <Progression
            theme={theme}
            style={{ width: `${width}%` }}
          ></Progression>

          {/* QUESTION */}
          <Concept>
            {quest + 1} / {questionPack[quest].question.toUpperCase()}
          </Concept>
          <Question theme={theme}>
            {questionPack[quest].description.toUpperCase()}
          </Question>
          <Line></Line>

          {/* REPONSE UP */}
          <Button
            theme={theme}
            onClick={() => {
              nextQuest()
              saveResponse(quest, questionPack[quest].pointA)
              setSociety(quest, questionPack[quest].society1)
            }}
          >
            <Icon theme={theme} className={questionPack[quest].reponseA}></Icon>
          </Button>

          {/* REPONSE EQUAL */}
          <Button
            theme={theme}
            onClick={() => {
              nextQuest()
              saveResponse(quest, questionPack[quest].pointC)
              setSociety(quest, questionPack[quest].society3)
            }}
          >
            <Icon theme={theme} className={questionPack[quest].reponseC}></Icon>
          </Button>

          {/* REPONSE DOWN */}
          <Button
            theme={theme}
            onClick={() => {
              nextQuest()
              saveResponse(quest, questionPack[quest].pointB)
              setSociety(quest, questionPack[quest].society2)
            }}
          >
            <Icon theme={theme} className={questionPack[quest].reponseB}></Icon>
          </Button>
        </>
      )}

      {/* TEST OVER */}
      {quest === numberOfQuestion && (
        <>
          <h1>TEST TERMINE</h1>
          <Button theme={theme}>
            <Link to="/result">VOIR LES RESULTATS</Link>
          </Button>
          <Button theme={theme} onClick={() => prevQuest()}>
            <p>RETOUR</p>
          </Button>
        </>
      )}

      {/* HOME */}
      {quest === 0 && (
        <Button theme={theme}>
          <Link to="/home">HOME</Link>
        </Button>
      )}

      {/* RETURN */}
      {quest <= numberOfQuestion - 1 && quest !== 0 && (
        <Button
          theme={theme}
          onClick={() => {
            prevQuest()
          }}
        >
          <p>RETOUR</p>
        </Button>
      )}
    </Screen>
  )
}

export default Test
