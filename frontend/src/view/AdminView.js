import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const AdminView = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Elimina cualquier dato de sesión aquí (por ejemplo, token)
        localStorage.removeItem('authToken'); // Ejemplo: eliminar token del localStorage

        // Redirige al usuario a la página de login
        navigate('/');
    };
    const handleAddUser = () => {
        navigate('/admin/add-user');
    };
    const handleAddPoli = () =>{
        navigate('/admin/add-poli')
    };
    const handleAddArma = () =>{
        navigate('/admin/add-arma')
    };

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Panel de Administración</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#profile">Perfil</Nav.Link>
                            <Nav.Link onClick={handleAddPoli}>Agregar Policías</Nav.Link>
                            <Nav.Link onClick={handleAddUser}>Agregar Usuarios</Nav.Link>
                            <Nav.Link onClick={handleAddArma}>Agregar Armas</Nav.Link>
                        </Nav>
                        <Button variant="outline-light" onClick={handleLogout}>Cerrar Sesión</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <h1>Bienvenido Administrador!</h1>
            </div>
        </div>
    );
};

export default AdminView;
