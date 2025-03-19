import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/blog')({
  component: RouteComponent,
})

const mockPostData = [
  {
    id: '1',
    title: 'Hello World1',
    content: 'Hello World',
  },
  {
    id: '2',
    title: 'Hello World2',
    content: 'Hello World',
  },
  {
    id: '3',
    title: 'Hello World3',
    content: 'Hello World',
  },
  {
    id: '4',
    title: 'Hello World4',
    content: 'Hello World',
  },
  {
    id: '5',
    title: 'Hello World5',
    content: 'Hello World',
  },
]

function RouteComponent() {
  return (
    <>
      <ul>
        {mockPostData.map((post) => (
          <li key={post.id}>
            <Link to={'/blog/$postId'} params={{ postId: post.id }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
