import { NavLink, Container } from '@mantine/core'
type menuType = {
  label: string
  href: string
}

const menus: menuType[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
]

export const Sidebar = () => {
  return (
    <Container>
      {menus.map((menu) => (
        <NavLink href={`${menu.href}`} label={menu.label} key={menu.label} />
      ))}
    </Container>
  )
}
