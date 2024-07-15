import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordInput from '../components/PasswordInput';

const AddUserView = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();  // Hook para la navegación

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Limpiar mensajes de error

        const newUser = {
            username,
            password,
            role,
            name
        };

        try {
            const response = await fetch('http://localhost:3001/add/users/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });

            const result = await response.json();

            if (response.ok) {
                // Limpiar el formulario
                setUsername('');
                setPassword('');
                setRole('');
                setName('');

                // Redirigir y forzar una recarga para asegurarse de que el formulario se vea limpio
                navigate('/admin/add-user', { replace: true });
                window.location.reload(); // Recargar la página
            } else {
                setError(result.message || 'Failed to add user');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while adding the user');
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Agregación de Usuarios</h2>
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Usuario:</label>
                    <input
                        id="username"
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña:</label>
                    <PasswordInput
                        id="password"
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="role" className="form-label">Rol:</label>
                    <select
                        id="role"
                        className="form-control"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="">Select Role</option>
                        <option value="1">Administrator</option>
                        <option value="2">Police</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre:</label>
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Agregar Usuario</button>
            </form>
            <button
                onClick={() => navigate('/admin')}
                className="btn btn-secondary mt-3"
            >
                Regresar
            </button>
        </div>
    );
};

export default AddUserView;
