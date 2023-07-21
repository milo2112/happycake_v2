import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header() {
    return (
        <Navbar bg="danger" expand="lg" data-bs-theme="dark">
            <Container className="reverse">
                <Link to="/" className="text-white ms-3 text-decoration-none">
                    <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Link to="/" className="text-white ms-3 text-decoration-none">Home 🏠</Link>
                    <Link to="/ContactForm" className="text-white ms-3 text-decoration-none">Contacto ✉️</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}
export default Header;
