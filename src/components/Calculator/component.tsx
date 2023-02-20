import { useState } from 'react'
import Display from './Display/component'
import Keyboard from './Keyboard/component'
import { Container } from './styles'
import { calculate } from '../../utils/calculate'

export default function Calculator() {
  const [prevDisplayValue, setPrevDisplayValue] = useState<string | null>(null)
  const [prevOperation, setPrevOperation] = useState<string | null>(null)
  const [isNewOperation, setIsNewOperation] = useState<boolean>(false)
  const [shouldClearDisplay, setShouldClearDisplay] = useState<boolean>(false)
  // Display states
  const [displayValue, setDisplayValue] = useState<string>('0')
  const [operatorValue, setOperatorValue] = useState<string | null>(null)
  const [historyValue, setHistoryValue] = useState<string | null>(null)

  function clearAll() {
    setDisplayValue('0')
    setOperatorValue(null)
    setHistoryValue(null)
    setPrevDisplayValue(null)
    setPrevOperation(null)
    setIsNewOperation(false)
  }

  function incrementDisplayValue(value: string) {
    setDisplayValue(displayValue + value)
  }

  function setNewDisplayInputValue(value: string) {
    setDisplayValue(value)
  }

  function equalOperation(value: string) {
    if (prevDisplayValue) {
      const resultValue = calculate(
        Number(prevDisplayValue),
        prevOperation || value,
        Number(displayValue),
      )
      setPrevDisplayValue(resultValue)
      setNewDisplayInputValue(resultValue)
      setOperatorValue(value)
      setIsNewOperation(false)
      return setHistoryValue(
        `${prevDisplayValue} ${prevOperation} ${displayValue}`,
      )
    }
  }

  function handleOperationClicked(value: string) {
    switch (value) {
      case 'C':
        return setDisplayValue('0')
      case 'CE':
        return clearAll()
      case '=':
        return equalOperation(value)
      case '.':
        return addDigit('.')
      default:
        setShouldClearDisplay(true)
        setPrevOperation(value)
        setOperatorValue(value)
        setPrevDisplayValue(displayValue)
        if (isNewOperation) {
          setIsNewOperation(false)
          return setNewDisplayInputValue(value)
        }

        return setIsNewOperation(true)
    }
  }

  function addDigit(value: string) {
    if (displayValue === '0' || shouldClearDisplay) {
      if (shouldClearDisplay) setShouldClearDisplay(false)
      return setNewDisplayInputValue(value)
    }
    incrementDisplayValue(value)
  }

  function handleClick(value: string, isOperation: boolean) {
    console.log({
      value,
      isOperation,
    })

    if (isOperation) {
      handleOperationClicked(value)
    } else {
      addDigit(value)
    }
  }

  return (
    <Container>
      <Display
        displayValue={displayValue}
        operatorValue={operatorValue}
        historyValue={historyValue}
      />
      <Keyboard onClick={handleClick} />
    </Container>
  )
}
