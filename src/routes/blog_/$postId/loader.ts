const mockPostData = [
  {
    id: '1',
    title: 'Hello World1',
    content: 'Hello World1',
  },
  {
    id: '2',
    title: 'Hello World2',
    content: 'Hello World2',
  },
  {
    id: '3',
    title: 'Hello World3',
    content: 'Hello World3',
  },
  {
    id: '4',
    title: 'Hello World4',
    content: 'Hello World4',
  },
  {
    id: '5',
    title: 'Hello World5',
    content: 'Hello World5',
  },
]

export async function fetch(id: string): Promise<{
  id: string
  title: string
  content: string
}> {
  console.log('fetching post', id)
  const post = mockPostData.find((post) => post.id === id)
  if (!post) {
    throw new Error('Post not found')
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(post)
    }, 10000)
  })
}
