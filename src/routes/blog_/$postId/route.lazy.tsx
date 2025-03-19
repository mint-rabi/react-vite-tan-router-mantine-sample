import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/blog_/$postId')({
  component: RouteComponent,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error!</div>,
})

function RouteComponent() {
  const post = Route.useLoaderData()
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}
