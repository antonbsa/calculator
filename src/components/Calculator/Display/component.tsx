import { Container, History, InputValues, Output, Operator } from './styles'

export default function Display() {
  return (
    <Container>
      <History>1 + 1</History>
      <Output>
        <Operator>=</Operator>
        <InputValues>2</InputValues>
      </Output>
    </Container>
  )
}
