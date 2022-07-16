import { useEffect, useState } from "react";
import { fetchTodos, Todo } from "../../api/todos";
import { NewTodoEntry } from "./NewTodoEntry";
import { TodoEntry } from "./TodoEntry";

export const TodosList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (todo: Todo) => {
    const newTodos = [...todos, todo]
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  useEffect(() => {
    fetchTodos().then((data) => { setTodos(data) });
  }, []);

  return (
    <>
      {todos.map((todo: Todo) => (
        <TodoEntry
          title={todo.title}
          completed={todo.completed}
          id={todo.id}
          key={todo.title}
        />
      ))}
      <NewTodoEntry handleClick={addTodo} />
    </>
  );
};
