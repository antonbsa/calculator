import Display from './Display/component'
import Keyboard from './Keyboard/component'
import { Container } from './styles'

export default function Calculator() {
  return (
    <Container>
      <Display />
      <Keyboard />
    </Container>
  )
}
