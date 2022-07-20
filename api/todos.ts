type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9ByeBRLKFcmsrzwBNr3J5OBe9PR-alXE",
  authDomain: "todo-app-mozart.firebaseapp.com",
  databaseURL:
    "https://todo-app-mozart-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-app-mozart",
  storageBucket: "todo-app-mozart.appspot.com",
  messagingSenderId: "361282930273",
  appId: "1:361282930273:web:173bc968152bc13e754c20"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
if (location.hostname === "localhost") {
  db.useEmulator("localhost", 8080);
}

type Todos = Todo[];

export const fetchTodos = async (): Promise<Todo[]> => {
  const todos: Todo[] = []
  const data = await db.collection("todo-app-mozart").get()

  data.forEach(doc => {
    todos.push({ id: doc.id, title: doc.data().title, completed: doc.data().completed })
  })

  return todos
};

export const createTodo = async (todo: Todo): Promise<Todo> => {
  const newTodo: Todo = todo
  await db.collection("todo-app-mozart").add({
    title: todo.title, completed: todo.completed
  }).then(docRef => newTodo.id = docRef.id)

  return newTodo
}

export const updateTodo = async ({ id, completed }: { id: string, completed: boolean }): Promise<boolean> => {
  if (id != undefined && id != "") {
    const doc = db.collection("todo-app-mozart").doc(id)
    await doc.update({ completed: completed })
  }
  return true
}

export const deleteTodo = async (id: string): Promise<void> => {
  if (id != undefined && id != "" && id != null) {
    try {
      const doc = db.collection("todo-app-mozart").doc(id)
      doc.delete()
    } catch (error) {
      console.log(error)
    }
  }
}

export type { Todo, Todos };
