import './App.css'
import { createContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './../firebase'

import { TodosList } from './components/TodosList'
import Login from './components/Login'
import { Spinner } from './components/Spinner'

import { UserContext } from './contexts/UserContext'

const App: React.FC = () => {
  const [user, loading, error] = useAuthState(auth)
  return (
    <UserContext.Provider value={user}>
      <div className="text-center my-5 mb-10">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
          className="rounded-full w-32 mb-4 mx-auto"
          alt="Avatar"
        />
        <h5 className="text-xl font-medium leading-tight mb-2">Daniel Wojnar</h5>
        <p className="text-gray-500">{user?.email}</p>
      </div>
      <div className="App container mx-auto">
        {loading && !user && <Spinner />}
        {!loading && !user && <Login />}
        {user && <TodosList />}
      </div>
    </UserContext.Provider>
  )
}

export default App
