import { StrictMode } from 'react'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import '@mantine/core/styles/global.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { MantineProvider } from '@mantine/core'
import { LoggedInProvider } from './components/providers/loggedIn.tsx'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return (
    <StrictMode>
      <MantineProvider defaultColorScheme={'auto'}>
        <LoggedInProvider>
          <RouterProvider router={router}></RouterProvider>
        </LoggedInProvider>
        <TanStackRouterDevtools router={router} />
      </MantineProvider>
    </StrictMode>
  )
}

export default App
