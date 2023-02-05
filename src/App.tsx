import ReactDOM from 'react-dom'
import Calculator from './components/Calculator/component'
import { Container } from './styles/App.styles'
import { globalStyles } from './styles/global.styles'

globalStyles()

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  )
}

export default ReactDOM.render(<App />, document.querySelector('#root'))
