import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../store/userSlice";
import "./home.css"
import {Button, Nav, Navbar} from "react-bootstrap";

const Home = () => {

    const dispatch = useDispatch();
    const user = useSelector(state=> state.appUser.user);

    const onLogoutClick = useCallback(() => {
        dispatch(deleteUser());
    }, [])

    return (
       <Navbar collapseOnSelect expand = "lg" bg="dark" variant="dark">
        <Navbar.Brand>FitnessTrainer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className = "mr-auto">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>About</Nav.Link>
                <Nav.Link className="me-2">My Gym</Nav.Link>
            </Nav>
            <Nav>
                <Button variant="primary" className="me-2">Log In</Button>
                <Button variant="primary" onClick={onLogoutClick}>Sign Out</Button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default Home