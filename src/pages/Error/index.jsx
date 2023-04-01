/* LINK */
import { Link } from 'react-router-dom'

/* LIGHT & DARK MODE */
import { useTheme } from '../../utils/hook/useTheme'

/* SCREEN, BUTTON & IMAGE */
import { Screen, Button, Image } from '../../utils/style/Modules'

/* PICTURE */
import ErrorPicture from '../../assets/error.png'

/* ERROR */
function Error() {
  /* LIGHT & DARK MODE */
  let { theme } = useTheme()

  /* RETURN */
  return (
    <>
      <Screen theme={theme}>
        {/* TITLE */}
        <h1>404</h1>
        <Image src={ErrorPicture} alt={'Dune de sables'}></Image>
        <p>Il n'y a rien ici.</p>
        {/* BUTTON */}
        <Button theme={theme}>
          <h3>
            <Link to="/">Home</Link>
          </h3>
        </Button>
      </Screen>
    </>
  )
}

export default Error
