import Button from '../../Button/component'
import { Container, KeyboardRow } from './styles'

export default function Keyboard() {
  return (
    <Container>
      <KeyboardRow>
        <Button
          value="CE"
          extraCss={{
            color: '$purpleLight',
          }}
        />
        <Button value="C" />
        <Button value="%" />
        <Button type="operation" value="/" />
      </KeyboardRow>
      <KeyboardRow>
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button type="operation" value="X" />
      </KeyboardRow>
      <KeyboardRow>
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button type="operation" value="-" />
      </KeyboardRow>
      <KeyboardRow>
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button type="operation" value="+" />
      </KeyboardRow>
      <KeyboardRow>
        <Button value="+-" />
        <Button value="0" />
        <Button value="," />
        <Button type="operation" colorType="light" value="=" />
      </KeyboardRow>
    </Container>
  )
}
