import '@mantine/core/styles.css'
import { AppShell, MantineProvider } from '@mantine/core'
import { Sidebar } from '../components/navigation/sidebar'
import { Outlet } from '@tanstack/react-router'

import { useState } from 'react'

function App() {
  const [sidebarOpened, setSidebarOpened] = useState(true)
  const toggleSidebar = () => setSidebarOpened((o) => !o)
  return (
    <MantineProvider>
      <AppShell
        padding="md"
        navbar={{
          width: sidebarOpened ? '100px' : '40px',
          breakpoint: 'md',
        }}
        header={{ height: '60px' }}
        footer={{ height: '60px' }}
      >
        <AppShell.Header p="md">Header</AppShell.Header>
        <Sidebar opened={sidebarOpened} toggle={toggleSidebar} />
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
        <AppShell.Footer p="md">Footer</AppShell.Footer>
      </AppShell>
    </MantineProvider>
  )
}

export default App
