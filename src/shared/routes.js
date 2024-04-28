import {ABOUT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, SIGNUP_ROUTE} from "./consts";
import Admin from "../pages/Admin";
import Shop from "../pages/Shop";
import Basket from "../pages/Basket";
import Auth from "../pages/Auth";
import DevicePage from "../pages/DevicePage";
import About from "../pages/About";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Element: Admin
    },
    {
        path: BASKET_ROUTE,
        Element: Basket
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Element: Auth
    },
    {
        path: SIGNUP_ROUTE,
        Element: Auth
    },
    {
        path: SHOP_ROUTE,
        Element: Shop
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Element: DevicePage
    },
    {
        path: ABOUT_ROUTE,
        Element: About
    }
]