import React from 'react';
//import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link,  Outlet} from "react-router-dom";


function Menu (){
    return <> <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
       <Container>
        <Navbar.Brand href="#home">OKKK</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to= "menu">MENU </Nav.Link>
            <Nav.Link as={Link} to= "example">EXAMPLE </Nav.Link>
            <Nav.Link as={Link} to= "call_listcard">LISTCARD</Nav.Link>
            <Nav.Link as={Link} to= "call_listproduct">LISTPRODUCT</Nav.Link>
            <Nav.Link as={Link} to= "login">LOGIN</Nav.Link>
            <Nav.Link as={Link} to="About">About</Nav.Link>
            
            
            

            




            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ABOUT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                A
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">COSA1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                SEPARADOR COSA3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to= "login">LOGIN</Nav.Link>
            <Nav.Link eventKey={2} href="https://react-bootstrap.netlify.app/docs/components/navbar">
              LINKREACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
      <Container>
        <Outlet>

        </Outlet>
      </Container>
    </section>
    </>
}

export default Menu;

/*if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <Menu/>
        </React.StrictMode>
    )
}*/


