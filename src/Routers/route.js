import Home from '../pages/Home/index'
import Dress from '../pages/Product/Dress'
import Login from '../pages/Login';
const route = [
    {path: "/",  component: <Home />},
    {path: "/dress", component: <Dress />},
    {path: "/account/login", component: <Login/>}
]

export default route;