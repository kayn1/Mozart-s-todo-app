import './App.css'
import { TodosList } from './components/TodosList'

const App:React.FC =() => {
  return (
    <div className="App container mx-auto">
      <TodosList />
    </div>
  )
}

export default App
