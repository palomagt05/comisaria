import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InsertarInvestigacionView = () => {
    const [rfcPolicia, setRfcPolicia] = useState('');
    const [codigoCaso, setCodigoCaso] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            const response = await axios.post('http://localhost:3001/api/investigacion', { rfcPolicia, codigoCaso });
            if (response.status === 201) {
                setMessage(response.data.message);
                setRfcPolicia('');
                setCodigoCaso('');
                navigate('/admin/insertar-investigacion', { replace: true });
                window.location.reload(); // Recargar la página después del registro
            } else {
                setError('Error al insertar la investigación');
            }
        } catch (error) {
            setError('Error al insertar la investigación');
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Insertar Investigación del Policía</h2>
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
                {error && <div className="alert alert-danger">{error}</div>}
                {message && <div className="alert alert-success">{message}</div>}

                <div className="mb-3">
                    <label htmlFor="rfcPolicia" className="form-label">RFC Policía:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="rfcPolicia"
                        value={rfcPolicia}
                        onChange={(e) => setRfcPolicia(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="codigoCaso" className="form-label">Código del Caso:</label>
                    <select
                        id="Codigo_Caso"
                        className="form-control"
                        value={codigoCaso}
                        onChange={(e) => setCodigoCaso(e.target.value)}
                        required
                    >
                        <option value="">Seleccione un Código</option>
                        <option value="CASE001">Robo con Violencia</option>
                        <option value="CASE002">Homicidio</option>
                        <option value="CASE003">Fraude</option>
                        <option value="CASE004">Tráfico de Drogas</option>
                        <option value="CASE005">Secuestro</option>
                        <option value="CASE006">Lavado de Dinero</option>
                        <option value="CASE007">Asalto a Mano Armada</option>
                        <option value="CASE008">Delitos Cibernéticos</option>
                        <option value="CASE009">Violencia Doméstica</option>
                        <option value="CASE010">Extorsión</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Insertar Investigación</button>
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

export default InsertarInvestigacionView;
