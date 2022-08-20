import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './../firebase'

import { TodosList } from './components/TodosList'
import Login from './components/Login'
import { Spinner } from './components/Spinner'
import User from './components/User'

import { UserContext } from './contexts/UserContext'

const App: React.FC = () => {
  const [user, loading, _] = useAuthState(auth)
  return (
    <UserContext.Provider value={user}>
      {user && <User />}
      <div className="App container mx-auto">
        {loading && <Spinner />}
        {!loading && !user && <Login />}
        {user && <TodosList />}
      </div>
    </UserContext.Provider>
  )
}

export default App
