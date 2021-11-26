import { Container, Nav, Navbar } from "react-bootstrap";





const Menu = () => {


  
    return ( 
      <>  
     
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Refrish</Navbar.Brand>
        <Nav className="me-auto">

       
          <Nav.Link href="shari">Shari</Nav.Link>
          <Nav.Link href="gohona">Gohona</Nav.Link>
          <Nav.Link href="panjabi">Panjabi</Nav.Link>
       
        </Nav>
        </Container>
      </Navbar>
     
    </>  
  
    );
    
};

export default Menu;