import React from 'react';
import { useState } from 'react';

import tw, { css } from 'twin.macro';
import { updateTodo } from "../../api/todos";


interface Props {
  id: string;
  title: string;
  initialCompleted: boolean;
}

export const TodoEntry: React.FC<Props> = ({ id, title, initialCompleted }) => {
  const [completed, setCompleted] = useState(initialCompleted)
  const handleClick = event => {
    switch (event.detail) {
      case 1: {
        updateTodo({ id: id, completed: !completed })
        setCompleted(!completed)
        break;
      }
      case 2: {
        console.log('double click');
        break;
      }
      case 3: {
        console.log('triple click');
        break;
      }
      default: {
        break;
      }
    }
  };


  return (
    <div
      css={[tw`p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4 my-3 justify-center w-auto
      bg-pink-100 hover:bg-pink-200 duration-300
      hover:translate-y-1
      `, completed && tw`bg-green-100 hover:bg-green-200`]}
      onClick={handleClick}
    >
      <div>
        <div className="text-xl font-medium text-black text-center w-100">{title}</div>
        <p className="text-slate-500 w-100">
          This task is {completed ? "completed" : "not completed"}
        </p>
      </div>
    </div>
  )
}
