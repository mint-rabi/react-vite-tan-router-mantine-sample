import { createFileRoute } from '@tanstack/react-router'
import { fetch } from './-api/loader.ts'
export const Route = createFileRoute('/blog_/$postId')({
  loader: ({ params }) => {
    return fetch(params.postId)
  },
  preload: true,
  pendingMs: 100,
})
