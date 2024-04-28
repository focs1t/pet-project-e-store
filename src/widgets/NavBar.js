import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../shared/consts";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    function goToAdminPage() {
        navigate(ADMIN_ROUTE)
    }
    function goToLoginPage() {
        navigate(LOGIN_ROUTE)
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>E-Store</NavLink>
                {user.isAuth ?
                    <Nav className="m-lg-0" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={goToAdminPage} className="m-lg-1">Админ</Button>
                        <Button variant={"outline-light"} onClick={goToLoginPage} className="m-lg-1">Выйти</Button>
                    </Nav>
                    :
                    <Nav className="m-lg-0" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)} className="m-lg-1">Войти</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;