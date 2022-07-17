import Home from '../pages/Home/index'
import Dress from '../pages/Product/Dress'
import Login from '../pages/Login';
import MnDress from '../pages/ManageProduct/MnDress'
import DetailProduct from '../pages/DetailProduct';
import User from '../pages/User';

export const publicRoute = [
    {path: "/",  component: <Home />},
    {path: "/dress", component: <Dress />},
    {path: "/account/login", component: <Login/>},
    {path: "/detail", component: <DetailProduct/>},
    {path: "/account", component: <User/>}
]

export const privateRoute = [
    {path: "/admin/dress", component: <MnDress/>},
    {path: "/",  component: <Home />},
    {path: "/dress", component: <Dress />},
    {path: "/account/login", component: <Login/>},
    {path: "/detail", component: <DetailProduct/>},
    {path: "/account", component: <User/>}
]
