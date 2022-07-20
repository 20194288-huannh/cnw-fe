import Home from '../pages/Home/index'
import Login from '../pages/Login';
import MnProduct from '../pages/ManageProduct/MnProduct'
import DetailProduct from '../pages/DetailProduct';
import Product from '../pages/Product'
import User from '../pages/User';
import MnOrder from '../pages/ManageOrder/MnOrder';
import Register from '../pages/Register';

export const publicRoute = [
    {path: "/",  component: <Home />},
    {path: "/product", component: <Product />},
    {path: "/dress", component: <Product CategoryID='1'/>},
    {path: "/shirt", component: <Product CategoryID='2'/>},
    {path: "/skirt", component: <Product CategoryID='3'/>},
    {path: "/trousers", component: <Product CategoryID='4'/>},

    {path: "/damhaiday", component: <Product CategoryID='1' ProductTypeID='1'/>},
    {path: "/dammaxi", component: <Product CategoryID='1' ProductTypeID='2'/>},
    {path: "/damsatnach", component: <Product CategoryID='1' ProductTypeID='3'/>},
    {path: "/damtaydai", component: <Product CategoryID='1' ProductTypeID='4'/>},

    {path: "/aosomi", component: <Product CategoryID='2' ProductTypeID='5'/>},
    {path: "/aokieu", component: <Product CategoryID='2' ProductTypeID='6'/>},
    {path: "/aokhoac", component: <Product CategoryID='2' ProductTypeID='7'/>},
    {path: "/vaymaxi", component: <Product CategoryID='3' ProductTypeID='8'/>},
    {path: "/vaymidi", component: <Product CategoryID='3' ProductTypeID='9'/>},
    {path: "/vaymini", component: <Product CategoryID='3' ProductTypeID='10'/>},
    {path: "/quandai", component: <Product CategoryID='4' ProductTypeID='11'/>},
    {path: "/quanlung", component: <Product CategoryID='4' ProductTypeID='12'/>},
    {path: "/quanshort", component: <Product CategoryID='4' ProductTypeID='13'/>},

    {path: "/login", component: <Login/>},
    {path: "/register", component: <Register/>},
    {path: "/detail/:id", component: <DetailProduct/>},
    {path: "/account", component: <User/>}
]

export const privateRoute = [
    {path: "/admin/product", component: <MnProduct/>},
    {path: "/admin/order", component: <MnOrder/>},
    {path: "/",  component: <Home />},
    {path: "/login", component: <Login/>},
    {path: "/register", component: <Register/>},
    {path: "/detail/:id", component: <DetailProduct/>},
    {path: "/account", component: <User/>},

    {path: "/product", component: <Product />},
    {path: "/dress", component: <Product CategoryID='1'/>},
    {path: "/shirt", component: <Product CategoryID='2'/>},
    {path: "/skirt", component: <Product CategoryID='3'/>},
    {path: "/trousers", component: <Product CategoryID='4'/>},

    {path: "/damhaiday", component: <Product CategoryID='1' ProductTypeID='1'/>},
    {path: "/dammaxi", component: <Product CategoryID='1' ProductTypeID='2'/>},
    {path: "/damsatnach", component: <Product CategoryID='1' ProductTypeID='3'/>},
    {path: "/damtaydai", component: <Product CategoryID='1' ProductTypeID='4'/>},

    {path: "/aosomi", component: <Product CategoryID='2' ProductTypeID='5'/>},
    {path: "/aokieu", component: <Product CategoryID='2' ProductTypeID='6'/>},
    {path: "/aokhoac", component: <Product CategoryID='2' ProductTypeID='7'/>},
    {path: "/vaymaxi", component: <Product CategoryID='3' ProductTypeID='8'/>},
    {path: "/vaymidi", component: <Product CategoryID='3' ProductTypeID='9'/>},
    {path: "/vaymini", component: <Product CategoryID='3' ProductTypeID='10'/>},
    {path: "/quandai", component: <Product CategoryID='4' ProductTypeID='11'/>},
    {path: "/quanlung", component: <Product CategoryID='4' ProductTypeID='12'/>},
    {path: "/quanshort", component: <Product CategoryID='4' ProductTypeID='13'/>},
]
