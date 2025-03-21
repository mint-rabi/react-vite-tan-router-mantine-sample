import type React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../services/firebase/auth.ts'

export const Home: React.FC = () => {
  const [user, loading, err] = useAuthState(auth)
  if (loading) return <div>Loading...</div>
  if (err) return <div>Error!</div>
  if (!user) return <div>Please login</div>

  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline">Home Page</h1>
      </div>
    </div>
  )
}
