import { useState } from 'react'
import Display from './Display/component'
import Keyboard from './Keyboard/component'
import { Container } from './styles'

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>('0')

  function onButtonClicked(value: string, isOperation: boolean) {
    console.log({
      value,
      isOperation,
    })
    setDisplayValue(displayValue === '0' ? value : displayValue + value)
  }

  return (
    <Container>
      <Display value={displayValue} />
      <Keyboard onButtonClicked={onButtonClicked} />
    </Container>
  )
}
