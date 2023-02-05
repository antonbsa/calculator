import { createStitches } from '@stitches/react'

const colors = {
  gray: '#6B6B6B',
  white: '#EBEBEB',
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
