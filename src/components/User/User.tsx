import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { logOut } from '../../../api/auth'

export const User: React.FC = () => {
  const user = useContext(UserContext)

  return (
    <div className="text-center my-20 mb-10">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
        className="rounded-full w-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <p className="text-gray-500">{user?.email}</p>
      <button
        onClick={() => logOut()}
        type="button"
        className="my-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Log out
      </button>
    </div>
  )
}
