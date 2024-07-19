import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AssignDelincuenteView = () => {
    const [CURP_Delincuente, setCURP_Delincuente] = useState('');
    const [Codigo_Calabozo, setCodigo_Calabozo] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            const response = await axios.post('http://localhost:3001/delincuente-calabozo/assign', { CURP_Delincuente, Codigo_Calabozo });
            if (response.status === 201) {
                setMessage(response.data.message);
                setCURP_Delincuente('');
                setCodigo_Calabozo('');
                navigate('/admin/assign-delincuente', { replace: true });
                window.location.reload();
            } else {
                setError('Error al asignar el delincuente al calabozo');
            }
        } catch (error) {
            setError('Error al asignar el delincuente al calabozo');
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Asignar Delincuente a Calabozo</h2>
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
                {error && <div className="alert alert-danger">{error}</div>}
                {message && <div className="alert alert-success">{message}</div>}
                <div className="mb-3">
                    <label htmlFor="CURP_Delincuente" className="form-label">CURP Delincuente:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="CURP_Delincuente"
                        value={CURP_Delincuente}
                        onChange={(e) => setCURP_Delincuente(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Codigo_Calabozo" className="form-label">Código Calabozo:</label>
                    <select
                        id="Codigo_Calabozo"
                        className="form-control"
                        value={Codigo_Calabozo}
                        onChange={(e) => setCodigo_Calabozo(e.target.value)}
                    >
                        <option value="">Seleccione Ubicación</option>
                        <option value="CAL001">Bloque A, Nivel 1</option>
                        <option value="CAL002">Bloque A, Nivel 2</option>
                        <option value="CAL003">Bloque B, Nivel 1</option>
                        <option value="CAL004">Bloque B, Nivel 2</option>
                        <option value="CAL005">Bloque C, Nivel 1</option>
                        <option value="CAL006">Bloque C, Nivel 2</option>
                        <option value="CAL007">Bloque D, Nivel 1</option>
                        <option value="CAL008">Bloque D, Nivel 2</option>
                        <option value="CAL009">Bloque E, Nivel 1</option>
                        <option value="CAL010">Bloque E, Nivel 2</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Asignar</button>
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

export default AssignDelincuenteView;
