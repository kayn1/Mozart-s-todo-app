import { app, auth } from './../firebase'

import {
  setPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

export const createNewuser = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then()
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
    })
}

export const signIn = (email: string, password: string) => {
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log("Signed in")
      })
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
    })
}

export const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log('Logged out')
    })
    .catch((error) => {
      console.log(error)
    })
}
