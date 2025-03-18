import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { Container, Text } from '@mantine/core'
import { Link } from '@tanstack/react-router'

function App() {
  return (
    <MantineProvider>
      <Container>
        <Text>Hello world</Text>
        <Link to="/about">About</Link>
      </Container>
    </MantineProvider>
  )
}

export default App
