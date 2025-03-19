import { createRootRoute } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import App from '../pages/App.tsx'

export const Route = createRootRoute({
  // component: () => (
  //   <>
  //     <Outlet />
  //     <TanStackRouterDevtools />
  //   </>
  // ),
  component: () => <App />,
})
