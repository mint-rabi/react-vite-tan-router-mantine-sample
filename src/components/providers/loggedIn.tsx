import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../services/firebase/auth.ts'
import { useCallback } from 'react'
import { Container, Flex, PasswordInput, Stack, TextInput } from '@mantine/core'
import { hasLength, useForm } from '@mantine/form'

type loggedInProviderProps = {
  children: React.ReactNode
}
export const LoggedInProvider: React.FC<loggedInProviderProps> = (props) => {
  const [user, loading, error] = useAuthState(auth)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>
  if (!user) return <LoginForm />
  return <>{props.children}</>
}

const LoginForm: React.FC = () => {
  const [signIn] = useSignInWithEmailAndPassword(auth)
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: hasLength({ min: 3 }, 'Email must be at least 3 characters long'),
      password: hasLength({ min: 6 }, 'Password must be at least 6 characters long'),
    },
  })

  const procSignIn = useCallback(async () => {
    const res = form.validate()
    if (res.hasErrors) {
      return
    }
    const { email, password } = form.getValues()
    signIn(email, password)
  }, [signIn, form])
  return (
    <Stack align="center" justify={'stretch'}>
      <form onSubmit={form.onSubmit(procSignIn)}>
        <Container>
          <TextInput
            label="Email"
            placeholder="Email"
            width="100%"
            {...form.getInputProps('email')}
            key={form.key('email')}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            width="100%"
            {...form.getInputProps('password')}
            key={form.key('password')}
          />

          <Flex justify="space-between">
            <button
              onClick={() => {
                form.reset()
              }}
              style={{
                margin: '10px',
              }}
            >
              Reset
            </button>
            <button
              type="submit"
              style={{
                margin: '10px',
              }}
            >
              Login
            </button>
          </Flex>
        </Container>
      </form>
    </Stack>
  )
}
