import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    console.log('beforeLoad')
  },
})
