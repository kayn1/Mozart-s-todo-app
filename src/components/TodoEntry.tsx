import React from 'react'
import { useState } from 'react'
import { updateTodo } from '../../api/todos'
import tw from 'twin.macro'

interface Props {
  id: string
  title: string
  handleDelete: (id: string) => void
  completed: boolean
}

export const TodoEntry: React.FC<Props> = ({ id, title, completed, handleDelete }) => {
  const [status, setStatus] = useState(completed)
  const handleClick = (event: React.MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
      return
    }
    switch (event.detail) {
      case 1: {
        updateTodo({ id: id, completed: !status })
        setStatus(!status)
        break
      }
      default: {
        break
      }
    }
  }

  return (
    <div
      css={[
        tw`p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4 my-3 justify-center w-auto
      bg-pink-100 hover:bg-pink-200 duration-300
      hover:translate-y-1
      `,
        status && tw`bg-green-100 hover:bg-green-200`,
      ]}
      onClick={handleClick}
    >
      <div className='flex flex-col'>
        <div className="text-xl font-medium text-black text-center w-100">{title}</div>
        <p className="text-slate-500 w-100">
          This task is {status ? 'completed' : 'not completed'}
        </p>
        <button
          onClick={() => {
            handleDelete(id)
          }}
          type="button"
          className="text-white self-center px-5 py-2.5 font-medium mt-5 text-sm bg-gradient-to-r from-pink-500 via-pink-500 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
