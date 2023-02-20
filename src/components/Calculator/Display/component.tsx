import { Container, History, InputValues, Output, Operator } from './styles'

interface DisplayProps {
  displayValue: string
  operatorValue: string | null
  historyValue: string | null
}

export default function Display({
  displayValue,
  operatorValue,
  historyValue,
}: DisplayProps) {
  return (
    <Container>
      <History className="selectionDisabled">{historyValue}</History>
      <Output>
        <Operator className="selectionDisabled">{operatorValue}</Operator>
        <InputValues>{displayValue}</InputValues>
      </Output>
    </Container>
  )
}
