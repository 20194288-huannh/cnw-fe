import Home from '../pages/Home/index'
import Dress from '../pages/Product/Dress'
import Login from '../pages/Login';
import MnDress from '../pages/ManageProduct/MnDress'
const route = [
    {path: "/",  component: <Home />},
    {path: "/dress", component: <Dress />},
    {path: "/account/login", component: <Login/>},
    {path: "/admin/dress", component: <MnDress/>}
]

export default route;