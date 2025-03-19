import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { Container, Text } from '@mantine/core'
import { Sidebar } from './components/navigation/sidebar'

function App() {
  return (
    <MantineProvider>
      <Container>
        <Sidebar></Sidebar>
        <Text>Hello world</Text>
      </Container>
    </MantineProvider>
  )
}

export default App
