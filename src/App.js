import {Routes , Route} from 'react-router-dom'
import route from './Routers/route'
import DefaultLayout from './Component/Layout/DefaultLayout/index'

function App() {
  return (
    <Routes>
      {
        route.map(({path, component}, key) =>
          <Route key={key} path={path} element={
            <DefaultLayout>
            {component}
            </DefaultLayout>} />
        )
      }
    </Routes>
  )
}

export default App;

