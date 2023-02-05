import ReactDOM from 'react-dom'
import { Container } from './styles/App.styles'
import { globalStyles } from './styles/global.styles'

globalStyles()

function App() {
  return <Container></Container>
}

export default ReactDOM.render(<App />, document.querySelector('#root'))
