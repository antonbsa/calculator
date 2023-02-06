import { createRoot } from 'react-dom/client'
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

const container = document.getElementById('app')
const root = createRoot(container!)
export default root.render(<App />)
