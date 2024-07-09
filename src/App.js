import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [folio, setFolio] = useState('');
    const [hash, setHash] = useState('');
    const [error, setError] = useState('');

    const handleClick = async () => {
        try {
            const response = await axios.post('http://localhost:3033/gethash', { folio });
            setHash(response.data.hash);
            setError('');
        } catch (error) {
            console.error('Error al consumir el servicio de folios', error);
            setError('Error al consumir el servicio de folios');
            setHash('');
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Folios Apps</h1>
                <div>
                    <label htmlFor="folioInput">Folio:</label>
                    <input
                        id="folioInput"
                        type="text"
                        value={folio}
                        onChange={(e) => setFolio(e.target.value)}
                        placeholder="Ingresar folio"
                    />
                    <button onClick={handleClick}>Generar Hash</button>
                </div>
                {error && <p>{error}</p>}
                {hash && <p>Hash: {hash}</p>}

            </header>
        </div>
    );
}

export default App;