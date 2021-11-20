
import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'


export const Navbarr = () => {
    return (
        <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">REFRESH Artistry</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">REFRESH Artistry</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">শাড়ি</Nav.Link>
                <Nav.Link href="#action2">পাঞ্জাবি</Nav.Link>
                <NavDropdown title="কসমেটিক" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="চুড়ি">চুড়ি</NavDropdown.Item>
                  <NavDropdown.Item href="গহনা">গহনা</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
}
