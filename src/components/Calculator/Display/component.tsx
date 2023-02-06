import { useState } from 'react'
import { Container, History, InputValues, Output, Operator } from './styles'

interface DisplayProps {
  value: string
}

export default function Display({ value }: DisplayProps) {
  // eslint-disable-next-line no-unused-vars
  const [operatorValue, setOperatorValue] = useState<string | null>(null)
  // eslint-disable-next-line no-unused-vars
  const [historyValue, setHistoryValue] = useState<string | null>(null)

  return (
    <Container>
      <History>{historyValue}</History>
      <Output>
        <Operator>{operatorValue}</Operator>
        <InputValues>{value}</InputValues>
      </Output>
    </Container>
  )
}
