import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA9ByeBRLKFcmsrzwBNr3J5OBe9PR-alXE',
  authDomain: 'todo-app-mozart.firebaseapp.com',
  databaseURL: 'https://todo-app-mozart-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'todo-app-mozart',
  storageBucket: 'todo-app-mozart.appspot.com',
  messagingSenderId: '361282930273',
  appId: '1:361282930273:web:173bc968152bc13e754c20',
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
