import { useState, useContext } from 'react'

import { Todo } from '../../api/todos'

import { UserContext } from '../contexts/UserContext'

interface Props {
  handleClick: (todo: Todo) => Promise<void>
}

export const NewTodoEntry: React.FC<Props> = ({ handleClick }) => {
  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState(false)
  const user = useContext(UserContext)
  const userID: string = user ? user.uid : 'guest'

  const clear = () => {
    setCompleted(false)
    setTitle('')
  }

  const handleAddTodo = async (todo: Todo) => {
    await handleClick(todo)
    clear()
  }

  return (
    <form className="p-6 max-w-sm mx-auto bg-blue-100 rounded-xl shadow-lg my-3">
      <div className="mb-6 flex flex-col">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 align-start self-start"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="What?"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-6 flex align-start">
        <div>
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
            onChange={(e) => setCompleted(e.target.checked)}
            defaultChecked={false}
          />
        </div>
        <label
          htmlFor="remember"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Completed
        </label>
      </div>

      <div className="mb-6 flex flex-col">
        <button
          type="button"
          className="border border-yellow-400 px-2 py-1 bg-yellow-100 transition transform hover:-translate-y-1 mt-2 max-w-lg leading-5 tracking-wide"
          onClick={() => {
            handleAddTodo({ id: '', title: title, completed: completed, userID: userID })
          }}
        >
          Create TODO
        </button>
      </div>
    </form>
  )
}
