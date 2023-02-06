import Button from '../../Button/component'
import { Container, KeyboardRow } from './styles'

interface KeyboardProps {
  onButtonClicked: (value: string, isOperation: boolean) => void
}

export default function Keyboard({ onButtonClicked }: KeyboardProps) {
  function handleButtonClicked(stringValue: string, isOperation: boolean) {
    onButtonClicked(stringValue, isOperation)
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
          onButtonClicked={handleButtonClicked}
        />
        <Button
          value="C"
          isOperation
          hasDefaultStyle
          onButtonClicked={handleButtonClicked}
        />
        <Button
          value="%"
          isOperation
          hasDefaultStyle
          onButtonClicked={handleButtonClicked}
        />
        <Button value="/" isOperation onButtonClicked={handleButtonClicked} />
      </KeyboardRow>
      <KeyboardRow>
        <Button value="7" onButtonClicked={handleButtonClicked} />
        <Button value="8" onButtonClicked={handleButtonClicked} />
        <Button value="9" onButtonClicked={handleButtonClicked} />
        <Button value="X" isOperation onButtonClicked={handleButtonClicked} />
      </KeyboardRow>
      <KeyboardRow>
        <Button value="4" onButtonClicked={handleButtonClicked} />
        <Button value="5" onButtonClicked={handleButtonClicked} />
        <Button value="6" onButtonClicked={handleButtonClicked} />
        <Button value="-" isOperation onButtonClicked={handleButtonClicked} />
      </KeyboardRow>
      <KeyboardRow>
        <Button value="1" onButtonClicked={handleButtonClicked} />
        <Button value="2" onButtonClicked={handleButtonClicked} />
        <Button value="3" onButtonClicked={handleButtonClicked} />
        <Button value="+" isOperation onButtonClicked={handleButtonClicked} />
      </KeyboardRow>
      <KeyboardRow>
        <Button
          value="+-"
          isOperation
          hasDefaultStyle
          backgroundColor="light"
          onButtonClicked={handleButtonClicked}
        />
        <Button value="0" onButtonClicked={handleButtonClicked} />
        <Button
          value=","
          hasDefaultStyle
          isOperation
          onButtonClicked={handleButtonClicked}
        />
        <Button
          value="="
          isOperation
          backgroundColor="light"
          onButtonClicked={handleButtonClicked}
        />
      </KeyboardRow>
    </Container>
  )
}
