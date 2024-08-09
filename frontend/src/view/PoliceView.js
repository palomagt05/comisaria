import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const PoliceView = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Elimina cualquier dato de sesión aquí (por ejemplo, token)
        localStorage.removeItem('authToken'); // Ejemplo: eliminar token del localStorage

        // Redirige al usuario a la página de login
        navigate('/');
    };

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Panel de Policia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#profile">Profile</Nav.Link>
                            <Nav.Link href="#reports">Reports</Nav.Link>
                        </Nav>
                        <Button variant="outline-light" onClick={handleLogout}>Cerrar Sesión</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container mt-4">
                <h1>Bienvenido Oficial de Policía!</h1>
            </div>
        </div>
    );
};

export default PoliceView;
