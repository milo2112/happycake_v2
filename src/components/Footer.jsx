import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Footer() {
  return (
    <Navbar bg="danger" expand="lg" data-bs-theme="dark" fixed="bottom">
      <Container style={{display: 'flex', justifyContent: 'center'}}>
        <Navbar.Brand>Copyrights®</Navbar.Brand>
      </Container>
    </Navbar>
    
  );
}

export default Footer;