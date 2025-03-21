import { firebaseApp } from './app.ts'
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth'

const auth = getAuth(firebaseApp)
setPersistence(auth, browserLocalPersistence)
export { auth }
