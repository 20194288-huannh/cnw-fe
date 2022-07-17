import {Routes , Route} from 'react-router-dom'
import {publicRoute, privateRoute} from './Routers/route'
import DefaultLayout from './Component/Layout/DefaultLayout/index'

function App() {
  const info_user = JSON.parse(localStorage.getItem('info_user')) || [{Role: -1}]
  return (
    <Routes>
      {(info_user[0].Role === 1 ? privateRoute : publicRoute) 
        .map(({path, component}, key) =>
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

