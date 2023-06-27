import './IconLocation.css';
import Icon from '@mdi/react';
import { mdiStoreMarker } from '@mdi/js';
import { useState } from 'react';

const Location = () => {

    const [mostrarIcono, setMostrarIcono] = useState(true);
    const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState('');

    const handleSeleccionUbicacion = (e) => {
        setUbicacionSeleccionada(e.target.value);
        setMostrarIcono(true);
    };

    return (
        <div>
            {mostrarIcono ? (
                <Icon onClick={() => setMostrarIcono(false)} className='iconLocation' path={mdiStoreMarker} size={2} />
            ) : (
                <div>
                    <label htmlFor="selectUbicacion"></label>
                    <select
                        id="selectUbicacion"
                        value={ubicacionSeleccionada}
                        onChange={handleSeleccionUbicacion}
                    >
                        <option value="disable">Seleccionar</option>
                        <option value="opcion2">Concon</option>
                        <option value="opcion3">Paso Hondo</option>
                        <option value="opcion3">Reñaca</option>
                        <option value="opcion3">Quilpue</option>
                        <option value="opcion3">Valparaiso</option>
                        <option value="opcion3">Viña del Mar</option>
                        <option value="opcion3">Villa Alemana</option>
                    </select>
                </div>
            )}
        </div>
    )
}

export default Location