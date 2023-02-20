import { globalCss } from '../libs/stitches'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },
  body: {
    backgroundColor: '#807ECE',
    '-webkit-font-smoothing': 'antialiased',
    color: '$white',
    fontFamily: 'Rubik, sans-serif',
  },
  '.selectionDisabled': {
    userSelect: 'none',
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
  },
})
