import { NavLink, Container } from '@mantine/core'
export const Sidebar = () => {
  const menus = ["dashboard","masters","settings","reports"]
  console.log(menus)
  return (
    <Container height="100px">
      <NavLink href="/about" label="About"/>
      <NavLink href="/dashboard" label="Dashboard" />
      <NavLink href="/logout" label="logout"/>
    </Container>
  )
}