import '@mantine/core/styles.css'
import { AppShell, MantineProvider } from '@mantine/core'
import { Sidebar } from '../components/navigation/sidebar'
import { Outlet } from '@tanstack/react-router'

function App() {
  return (
    <MantineProvider>
      <AppShell
        padding="md"
        navbar={{ width: '100px', breakpoint: 'md' }}
        header={{ height: '60px' }}
        footer={{ height: '60px' }}
      >
        <AppShell.Header p="md">Header</AppShell.Header>
        <AppShell.Navbar>
          <Sidebar />
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
        <AppShell.Footer p="md">Footer</AppShell.Footer>
      </AppShell>
    </MantineProvider>
  )
}

export default App
