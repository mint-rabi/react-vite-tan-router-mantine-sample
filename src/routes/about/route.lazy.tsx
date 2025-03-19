import { createLazyFileRoute } from '@tanstack/react-router'
import { About } from './-components/about.tsx'

export const Route = createLazyFileRoute('/about')({
  component: () => <RouteComponent />,
})

function RouteComponent() {
  return <About />
}
