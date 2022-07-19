import React from "react";
import { useEffect, useState } from "react";
import { fetchTodos, Todo, createTodo } from "../../api/todos";
import { NewTodoEntry } from "./NewTodoEntry";
import { Spinner } from "./Spinner";
import { TodoEntry } from "./TodoEntry";
import { deleteTodo } from "../../api/todos";

export const TodosList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (todo: Todo) => {
    const newTodos = [...todos, todo];
    createTodo(todo);
    setTodos(newTodos);
  };

  const [loading, setLoading] = useState(true);
  const handleDelete = (id : string) : void => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
    deleteTodo(id)
    return
  }

  const todosList = () => {
    return todos.map((todo: Todo) => (
      <TodoEntry
        id={todo.id}
        title={todo.title}
        initialCompleted={todo.completed}
        key={todo.title}
        handleDelete={() => handleDelete(todo.id)}
      />
    ));
  };

  useEffect(() => {
    setLoading(true);
    fetchTodos().then((data) => {
      setTodos(data);
      setLoading(false)
    });
  }, []);

  return (
    <>
      { loading && <Spinner /> }
      { !loading && todosList() }
      <NewTodoEntry handleClick={addTodo} />
    </>
  );
};
