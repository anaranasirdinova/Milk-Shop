import React, { Component } from "react";
import { 
     Navbar, 
     Nav,
     FormControl, 
     Container, 
     Form, 
     Button 
    } from "react-bootstrap";
import logo from "../../logo.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from '../Search/Search';



export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
               <Container>
                   <Navbar.Brand href="/">
                        <img 
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                        />{" "} Milk.kg
                        </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto"> 
                        
                            <Link className="nav-link" to="/"> Домашняя страница </Link>
                            <Link className="nav-link" to="/catalog"> Каталог продукции </Link>
                            <Link className="nav-link" to="/about"> О нас </Link>
                            <Link className="nav-link" to="/contacts"> Контакты </Link>
                            <Link className="nav-link" to="/basket"> Корзина</Link>
                        </Nav>
                        <Search/>
                   </Navbar.Collapse>
                </Container> 
            </Navbar>
         </>
        );
    }
}