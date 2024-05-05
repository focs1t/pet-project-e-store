import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";
import NavBar from "../widgets/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {check} from "../shared/axios/userAPI";
import Spinner from "react-bootstrap/Spinner";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        check().then(data =>{
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, []);

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;
