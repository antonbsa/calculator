import { styled } from '../../libs/stitches'

export const Container = styled('div', {
  backgroundColor: '$backgroundDark',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  borderRadius: 48,
  boxShadow:
    '0px 68px 41px rgba(0, 0, 0, 0.15), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1)',
  padding: 32,
})
