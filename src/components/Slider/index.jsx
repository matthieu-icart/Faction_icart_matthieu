/* USESTATE & USEEFFECT */
import { useState } from 'react'
import { useEffect } from 'react'

/* LIGHT & DARK MODE */
import { useTheme } from '../../utils/hook/useTheme'

/* SLIDER PACK */
import SliderPack from '../../datas/sliderPack'

/* COLORS & STYLED-COMPONENTS */
import colors from '../../utils/style/colors'
import styled from 'styled-components'

/* SCREEN, BUTTON & IMAGE */
import { Button, Icon } from '../../utils/style/Modules'

/* SCREEN */
const Screen = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

/* TIPS */
const Tips = styled.div`
  width: 90%;
  height: 80%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 10%;
  padding-top: 15%;

  border: 1px solid
    ${({ theme }) => (theme === 'dark' ? colors.Light : colors.Dark)}; ;
`

/* NAVIGATION */
const Navigation = styled.div`
  width: 90%;
  height: 20%;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 3%;
`

/* TEXT */
const Text = styled.p`
  margin-top: 20px;

  font-size: 25px;
`

/* SLIDER */
function Slider(props) {
  /* LIGHT & DARK MODE */
  const { theme } = useTheme()

  /* HOOK USESTATE */
  const [isText, setText] = useState(0)

  /* HOOK USEEFFECT */
  useEffect(() => {
    isTextChange()
  }, [isText])

  /* TIPS PRECEDENT */
  function prevTips() {
    if (isText !== 0) {
      setText(isText - 1)
    }
  }

  /* TIPS SUIVANT */
  function nextTips() {
    if (isText !== SliderPack.length - 1) {
      setText(isText + 1)
    }
  }

  /* UNLOCK HOME */
  const isTextChange = () => {
    props.onTextChange(isText)
  }

  /* RETURN */
  return (
    <Screen>
      {/*TIPS */}

      <Tips theme={theme}>
        <Icon theme={theme} className={SliderPack[isText][0]}></Icon>
        <Text>{SliderPack[isText][1]}</Text>
      </Tips>
      <p>
        {isText + 1} / {SliderPack.length}
      </p>
      <Navigation>
        {/* PRECEDENT */}
        <Button theme={theme} onClick={() => prevTips()}>
          <Icon
            theme={theme}
            className="fa-sharp fa-solid fa-circle-arrow-left"
          ></Icon>
        </Button>
        {/* SUIVANT */}
        <Button theme={theme} onClick={() => nextTips()}>
          <Icon
            theme={theme}
            className="fa-sharp fa-solid fa-circle-arrow-right"
          ></Icon>
        </Button>
      </Navigation>
    </Screen>
  )
}

export default Slider
