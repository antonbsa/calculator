import { createStitches } from '@stitches/react'

const colors = {
  gray: '#6B6B6B',
  white: '#EBEBEB',
  backgroundDark: '#2D2A37',
  purpleDark: '#462878',
  purpleMedium: '#7F45E2',
  purpleLight: '#975DFA',
}

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
  },
})
