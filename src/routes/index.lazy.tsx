import { createLazyFileRoute } from '@tanstack/react-router'
import { Home } from './dashboard/-components/home.tsx'

export const Route = createLazyFileRoute('/')({
  component: () => <Home />,
})
