import './App.scss'
import { Header } from './components'
import { routes } from './router';
import {
  useRoutes,
} from "react-router-dom";

function App() {
  const router = useRoutes(routes);

  return (
    <div className='app'>
      <Header/>
      {router}
    </div>
  )
}

export default App
