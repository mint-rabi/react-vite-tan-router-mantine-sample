import { NavLink, NavLinkProps } from '@mantine/core'
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
    label: 'Contact',
    href: '/rasulasdkfa',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
]

export const Sidebar = () => {
  return (
    <>
      {menus.map((menu) => {
        return <MenuItem key={menu.href} label={menu.label} href={menu.href} />
      })}
    </>
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
