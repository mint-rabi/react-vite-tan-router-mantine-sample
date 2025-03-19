import { AppShell, Button, NavLink, NavLinkProps } from '@mantine/core'
import React from 'react'
import { createLink } from '@tanstack/react-router'

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
  {
    label: 'Blog',
    href: '/blog',
  },
]

export const Sidebar: React.FC<{
  opened: boolean
  toggle: () => void
}> = (props) => {
  return (
    <AppShell.Navbar>
      {props.opened ? (
        <Button onClick={props.toggle}>{'<'}</Button>
      ) : (
        <Button
          onClick={props.toggle}
          style={{
            padding: 0,
          }}
        >
          {'>'}
        </Button>
      )}
      {menus.map((menu) => {
        return <MenuItem key={menu.href} label={props.opened ? menu.label : menu.label.charAt(0)} href={menu.href} />
      })}
    </AppShell.Navbar>
  )
}

type MantineNavLinkProps = Omit<NavLinkProps, 'href'>

const MantineNavLinkComponent = React.forwardRef<HTMLAnchorElement, MantineNavLinkProps>((props, ref) => {
  return <NavLink ref={ref} {...props} />
})

const CustomNavLinkComponent = createLink(MantineNavLinkComponent)

const MenuItem: React.FC<{
  label: string
  href: string
}> = (props) => {
  return <CustomNavLinkComponent to={props.href} label={props.label} />
}
