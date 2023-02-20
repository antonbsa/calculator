import Button from '../../Button/component'
import { Container, KeyboardRow } from './styles'

interface KeyboardProps {
  onClick: (value: string, isOperation: boolean) => void
}

export default function Keyboard({ onClick }: KeyboardProps) {
  function handleOperationButtonClick(stringValue: string) {
    onClick(stringValue, true)
  }

  return (
    <Container>
      <KeyboardRow>
        <Button
          value="CE"
          hasDefaultStyle
          isOperation
          extraCss={{
            color: '$purpleLight',
          }}
          onButtonClick={onClick}
        />
        <Button value="C" isOperation hasDefaultStyle onButtonClick={onClick} />
        <Button value="%" isOperation hasDefaultStyle onButtonClick={onClick} />
        <Button
          value="/"
          isOperation
          onButtonClick={handleOperationButtonClick}
        />
      </KeyboardRow>
      <KeyboardRow>
        <Button value="7" onButtonClick={onClick} />
        <Button value="8" onButtonClick={onClick} />
        <Button value="9" onButtonClick={onClick} />
        <Button
          value="X"
          isOperation
          onButtonClick={handleOperationButtonClick}
        />
      </KeyboardRow>
      <KeyboardRow>
        <Button value="4" onButtonClick={onClick} />
        <Button value="5" onButtonClick={onClick} />
        <Button value="6" onButtonClick={onClick} />
        <Button
          value="-"
          isOperation
          onButtonClick={handleOperationButtonClick}
        />
      </KeyboardRow>
      <KeyboardRow>
        <Button value="1" onButtonClick={onClick} />
        <Button value="2" onButtonClick={onClick} />
        <Button value="3" onButtonClick={onClick} />
        <Button
          value="+"
          isOperation
          onButtonClick={handleOperationButtonClick}
        />
      </KeyboardRow>
      <KeyboardRow>
        <Button
          value="+-"
          isOperation
          hasDefaultStyle
          backgroundColor="light"
          onButtonClick={onClick}
        />
        <Button value="0" onButtonClick={onClick} />
        <Button value="." hasDefaultStyle isOperation onButtonClick={onClick} />
        <Button
          value="="
          isOperation
          backgroundColor="light"
          onButtonClick={onClick}
        />
      </KeyboardRow>
    </Container>
  )
}
