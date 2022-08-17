import { app, db } from '../firebase'
import { connectFirestoreEmulator } from 'firebase/firestore'
import { query, getDocs, collection, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

type Todo = {
  id: string
  title: string
  completed: boolean
  userID: string
}

connectFirestoreEmulator(db, 'localhost', 8080)

type Todos = Todo[]

export const fetchTodos = async (): Promise<Todo[]> => {
  const todos: Todo[] = []
  const q = query(collection(db, 'todo-app-mozart'))
  const data = await getDocs(q)

  data.forEach((doc) => {
    todos.push({
      id: doc.id,
      title: doc.data().title,
      completed: doc.data().completed,
      userID: doc.data().userID,
    })
  })

  return todos
}

export const createTodo = async (todo: Todo): Promise<Todo> => {
  const newTodo: Todo = todo
  await addDoc(collection(db, 'todo-app-mozart'), {
    title: todo.title,
    completed: todo.completed,
  }).then((docRef) => (newTodo.id = docRef.id))

  return newTodo
}

export const updateTodo = async ({
  id,
  completed,
}: {
  id: string
  completed: boolean
}): Promise<boolean> => {
  if (id != undefined && id != '') {
    const ref = doc(db, 'todo-app-mozart', id)
    await updateDoc(ref, { completed: completed })
  }

  return true
}

export const deleteTodo = async (id: string): Promise<void> => {
  if (id != undefined && id != '' && id != null) {
    try {
      const ref = doc(db, 'todo-app-mozart', id)
      await deleteDoc(ref)
    } catch (error) {
      console.log(error)
    }
  }
}

export type { Todo, Todos }
