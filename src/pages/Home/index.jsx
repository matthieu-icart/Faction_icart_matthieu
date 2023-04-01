/* LINK */
import { Link } from 'react-router-dom'

/* LIGHT & DARK MODE */
import { useTheme } from '../../utils/hook/useTheme'

/* LOCK & ANSWERS */
import { useContext } from 'react'
import { LockContext } from '../../utils/context/switchLock.jsx'
import { TestContext } from '../../utils/context/switchTest.jsx'

/* QUESTION PACK */
import questionPack from '../../datas/questionPack'

/* SCREEN, BUTTON & IMAGE */
import { Screen, Button, Icon } from '../../utils/style/Modules'

/* SLIDER */
import Slider from '../../components/Slider/index.jsx'

/* HOME */
function Home() {
  /* LIGHT & DARK MODE */
  let { theme } = useTheme()

  /* HOOK USECONTEXT */
  let { lock, setLockFunction } = useContext(LockContext)
  let { answers } = useContext(TestContext)

  /* LOCK || UNLOCK */
  let onTextChange = (isText) => {
    if (isText === 5) {
      setLockFunction()
    }
  }

  /* QUESTION NUMBER */
  let numberOfQuestion = Object.keys(questionPack).length

  /* RETURN */
  return (
    <>
      <Screen theme={theme}>
        {/* TITLE */}
        <h1>FACTION</h1>
        {/* INSTRUCTIONS */}
        {Object.keys(answers).length !== numberOfQuestion && (
          <>
            <Slider onTextChange={onTextChange} />
            <h2>INSTRUCTIONS</h2>
          </>
        )}
        {/* LOCK & TEST || FACTION & RESULT */}
        {Object.keys(answers).length === numberOfQuestion ? (
          <>
            {/* FACTION */}
            <Button theme={theme}>
              <Link theme={theme} to="/faction">
                DECOUVRIR LES FACTIONS
              </Link>
            </Button>
            {/* RESULT */}
            <Button theme={theme}>
              <Link theme={theme} to="/result">
                REVOIR LES RESULTAT
              </Link>
            </Button>
          </>
        ) : (
          /* LOCK || TEST */
          <Button theme={theme} disabled={!lock}>
            {lock ? (
              /* TEST */
              <Link to="/test">FAIRE LE TEST</Link>
            ) : (
              /* LOCK */
              <Icon className="fa-sharp fa-solid fa-lock"></Icon>
            )}
          </Button>
        )}
      </Screen>
    </>
  )
}

export default Home
