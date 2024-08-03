import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InsertarJefeView = () => {
    const [rfcJefe, setRfcJefe] = useState('');
    const [rfcSubordinado, setRfcSubordinado] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            const response = await axios.post('http://localhost:3001/insertarj/jefes', { rfcJefe, rfcSubordinado });
            if (response.status === 201) {
                setMessage(response.data.message);
                setRfcJefe('');
                setRfcSubordinado('');
                navigate('/admin/insertar-jefe', { replace: true });
                window.location.reload(); // Recargar la página después del registro
            } else {
                setError('Error al insertar la relación de jefe y subordinado');
            }
        } catch (error) {
            setError('Error al insertar la relación de jefe y subordinado');
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Insertar Relación de Jefe y Subordinado</h2>
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
                {error && <div className="alert alert-danger">{error}</div>}
                {message && <div className="alert alert-success">{message}</div>}

                <div className="mb-3">
                    <label htmlFor="rfcJefe" className="form-label">RFC Jefe:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="rfcJefe"
                        value={rfcJefe}
                        onChange={(e) => setRfcJefe(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="rfcSubordinado" className="form-label">RFC Subordinado:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="rfcSubordinado"
                        value={rfcSubordinado}
                        onChange={(e) => setRfcSubordinado(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Insertar Relación</button>
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

export default InsertarJefeView;
