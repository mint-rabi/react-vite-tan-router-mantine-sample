import { createLazyFileRoute } from '@tanstack/react-router'
import { Home } from './-components/home.tsx'

export const Route = createLazyFileRoute('/')({
  component: () => <Home />,
})
