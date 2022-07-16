type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type Todos = Todo[]

export const fetchTodos = async (): Promise<Todos> => {
  const todos = localStorage.getItem('todos')
  if (todos) {
    return JSON.parse(todos)
  }

  return []
}

export type { Todo, Todos }
