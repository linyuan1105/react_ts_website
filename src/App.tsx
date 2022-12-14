import { useRoutes } from 'react-router-dom'
import Home from './view/Home'
import Calendar from './view/Calendar'
import Buttons from './view/Buttons'
import Loading from './view/Loading'
import Click from './view/Click'
import Icons from './view/Icons'


















function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/Icons',
      element: <Icons />,
    },
    {
      path: '/Calendar',
      element: <Calendar />,
    },
    {
      path: '/Buttons',
      element: <Buttons />,
    },
    {
      path: '/Loading',
      element: <Loading />,
    },
    {
      path: '/Click',
      element: <Click />,
    }
  ])
  return element
}

export default App
