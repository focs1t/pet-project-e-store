import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../shared/routes";
import {SHOP_ROUTE} from "../shared/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Element}) =>
                <Route exact key={path} path={path} element={<Element />}/>
            )}
            {publicRoutes.map(({path, Element}) =>
                <Route exact key={path} path={path} element={<Element />}/>
            )}
            <Route
                path="*"
                element={<Navigate replace to={SHOP_ROUTE}/>}
            />
        </Routes>
    );
};

export default AppRouter;