import { styled } from '../../../libs/stitches'

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '54px 36px 26px',
})

export const History = styled('span', {
  display: 'flex',
  justifyContent: 'flex-end',
  color: '$gray',
  marginBottom: 8,
  fontSize: 20,
})

export const Output = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 50,
  fontSize: 36,
})

export const Operator = styled('span', {
  color: '$gray',
  fontWeight: 300,
})

export const InputValues = styled('span', {})
