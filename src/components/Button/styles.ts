import { styled } from '../../libs/stitches'

export const Container = styled('button', {
  all: 'unset',
  width: 64,
  height: 64,
  borderRadius: '50%',
  textAlign: 'center',
  cursor: 'pointer',
  boxShadow:
    '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), inset 0px 2px 3px rgba(255, 255, 255, 0.06)',
  fontSize: 24,
  transition: 'all 0.15s',
  '&:hover': {
    filter: 'brightness(85%)',
  },
  '&:active': {
    boxShadow:
      'inset 0px 4px 6px rgba(0, 0, 0, 0.1), inset 0px -6px 6px rgba(0, 0, 0, 0.15)',
  },
  variants: {
    variant: {
      default: {
        background:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), $backgroundDark',
      },
      'purple-dark': {
        background:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), $purpleDark',
      },
      'purple-light': {
        '&:hover': {
          filter: 'brightness(65%)',
        },
        background:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%), $purpleMedium;',
        boxShadow:
          '0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
