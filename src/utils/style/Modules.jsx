/* COLORS & STYLED COMPONENTS */
import colors from './colors'
import styled from 'styled-components'

/* SCREEN */
export const Screen = styled.main`
  width: 350px;
  height: 600px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 2%;

  border-bottom: 3px solid
    ${({ theme }) => (theme === 'light' ? colors.primary : colors.secondary)};
  border-right: 3px solid
    ${({ theme }) => (theme === 'light' ? colors.primary : colors.secondary)};
  border-left: 3px solid
    ${({ theme }) => (theme === 'light' ? colors.primary : colors.secondary)};
`

/* BUTTON */
export const Button = styled.button`
  width: 90%;
  height: 50px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => (theme === 'dark' ? colors.Light : colors.Dark)};

  background-color: transparent;
  border: 1px solid
    ${({ theme }) => (theme === 'dark' ? colors.Light : colors.Dark)};

  &:hover {
    background-color: ${({ theme }) =>
      theme === 'dark' ? colors.Light : colors.Dark};
    color: ${({ theme }) => (theme === 'dark' ? colors.Dark : colors.Light)};
  }

  & a {
    color: inherit;
    font-size: 30px;
  }

  & p {
    font-size: 30px;
  }
`

/* LINE */
export const Line = styled.hr`
  width: 90%;
`

/* IMAGE */
export const Image = styled.img`
  width: 80%;
  height: 50%;
  object-fit: cover;

  border: 2px solid
    ${({ theme }) => (theme === 'light' ? colors.primary : colors.secondary)};
`

/* ICON */
export const Icon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 30px;
  color: inherit;
`

/* SMALL ICON */
export const SmallIcon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  color: inherit;
`

/* PROGRESSION BAR */
export const Progression = styled.div`
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) =>
    theme === 'dark' ? colors.Light : colors.Dark};
`

/* SOCIETY */
export const Society = styled.div`
  width: 90%;
  height: 40px;

  display: flex;
  flex-direction: row;

  margin: 0 auto;
  overflow: hidden;

  border: 3px solid
    ${({ theme }) => (theme === 'light' ? colors.primary : colors.secondary)};
`

/* LEFT */
export const LeftBar = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: repeating-linear-gradient(
    -26deg,
    rgba(255, 255, 255, 0.25),
    rgba(0, 0, 0, 0.25) 2px,
    transparent 3px,
    transparent 7px
  );
  background-size: 6px 8px;
  border-right: 3px solid
    ${({ theme }) => (theme === 'light' ? colors.Dark : colors.Light)};
`

/* RIGHT */
export const RightBar = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-image: repeating-linear-gradient(
    315deg,
    rgba(0, 0, 0, 0.25),
    rgba(255, 255, 255, 0.25) 3px,
    transparent -19px,
    transparent 5px
  );
  background-size: 6px;
  border-left: 3px solid
    ${({ theme }) => (theme === 'light' ? colors.Dark : colors.Light)};
`

/* CENTER */
export const CenterBar = styled.div`
  height: 100%;
  background-color: colors.primary;
`
