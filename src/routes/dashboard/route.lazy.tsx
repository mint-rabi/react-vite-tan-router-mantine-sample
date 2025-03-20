import { createLazyFileRoute } from '@tanstack/react-router'
import { DashboardPage } from './-components/dashboard.tsx'

export const Route = createLazyFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DashboardPage />
}
