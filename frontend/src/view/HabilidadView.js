import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InsertarHabilidadView = () => {
    const [rfcPolicia, setRfcPolicia] = useState('');
    const [codigoArma, setCodigoArma] = useState('');
    const [habilidad, setHabilidad] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            const response = await axios.post('http://localhost:3001/habilidades-poli/habilidad', { rfcPolicia, codigoArma, habilidad });
            if (response.status === 201) {
                setMessage(response.data.message);
                setRfcPolicia('');
                setCodigoArma('');
                setHabilidad('');
                navigate('/admin/insertar-habilidad', { replace: true });
            } else {
                setError('Error al insertar la habilidad');
            }
        } catch (error) {
            setError('Error al insertar la habilidad');
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Insertar Habilidad del Policía</h2>
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
                    <label htmlFor="codigoArma" className="form-label">Código Arma:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="codigoArma"
                        value={codigoArma}
                        onChange={(e) => setCodigoArma(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="habilidad" className="form-label">Habilidad:</label>
                    <select
                        id="habilidad"
                        className="form-control"
                        value={habilidad}
                        onChange={(e) => setHabilidad(e.target.value)}
                        required
                    >
                        <option value="">Seleccione un Nivel</option>
                        <option value="1"> Nivel 1</option>
                        <option value="2"> Nivel 2</option>
                        <option value="3"> Nivel 3</option>
                        <option value="4"> Nivel 4</option>
                        <option value="5"> Nivel 5</option>
                        <option value="6"> Nivel 6</option>
                        <option value="7"> Nivel 7</option>
                        <option value="8"> Nivel 8</option>
                        <option value="9"> Nivel 9</option>
                        <option value="10"> Nivel 10</option>                    
                    </select>

                </div>

                <button type="submit" className="btn btn-primary">Insertar Habilidad</button>
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

export default InsertarHabilidadView;
