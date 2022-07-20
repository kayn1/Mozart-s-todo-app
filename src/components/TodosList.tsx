import React from "react";
import { useEffect, useState } from "react";
import { fetchTodos, Todo, createTodo } from "../../api/todos";
import { NewTodoEntry } from "./NewTodoEntry";
import { Spinner } from "./Spinner";
import { TodoEntry } from "./TodoEntry";
import { deleteTodo } from "../../api/todos";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles.css";

export const TodosList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = async (todo: Todo) => {
    const newTodo = await createTodo(todo);
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const [loading, setLoading] = useState(true);
  const handleDelete = (id: string): void => {
    deleteTodo(id);
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    return;
  };

  const todosList = () => {
    return (
      <TransitionGroup component="div">
        {todos.map((todo: Todo, index: number) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            <TodoEntry
              id={todo.id}
              title={todo.title}
              initialCompleted={todo.completed}
              key={todo.title}
              handleDelete={handleDelete}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  };

  useEffect(() => {
    setLoading(true);
    fetchTodos().then((data) => {
      setTodos(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {!loading && todosList()}
      <NewTodoEntry handleClick={addTodo} />
    </>
  );
};
