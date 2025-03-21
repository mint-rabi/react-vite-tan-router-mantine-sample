import { createRootRoute, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useState } from 'react'
import { AppShell } from '@mantine/core'
import { Sidebar } from '../components/navigation/sidebar'

export const Route = createRootRoute({
  component: () => <RootApp />,
})

const RootApp = () => {
  const [sidebarOpened, setSidebarOpened] = useState(true)
  const toggleSidebar = () => setSidebarOpened((o) => !o)
  return (
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
  )
}
