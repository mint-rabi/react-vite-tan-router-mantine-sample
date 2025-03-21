import { z } from 'zod'
export const ConstantSchema = z.object({
  VITE_FIREBASE_API_KEY: z.string(),
  VITE_FIREBASE_AUTH_DOMAIN: z.string(),
  VITE_FIREBASE_PROJECT_ID: z.string(),
  VITE_FIREBASE_STORAGE_BUCKET: z.string(),
  VITE_FIREBASE_MESSAGE_SENDER_ID: z.string(),
  VITE_FIREBASE_APP_ID: z.string(),
  VITE_FIREBASE_MEASUREMENT_ID: z.string(),
})
export type ConstantsSchema = z.infer<typeof ConstantSchema>
export const constants = ConstantSchema.parse(import.meta.env)

export const firebaseConfig = {
  apiKey: constants.VITE_FIREBASE_API_KEY,
  authDomain: constants.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: constants.VITE_FIREBASE_PROJECT_ID,
  storageBucket: constants.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: constants.VITE_FIREBASE_MESSAGE_SENDER_ID,
  appId: constants.VITE_FIREBASE_APP_ID,
}
