import { useState } from 'react';
import datos from '../datos.json';


export function Estacionamiento(){
    
    const [sectorActivo, setSectorActivo] = useState('espaciosSectorA');  

    function obtenerColor(estado){
        if(estado == 'libre'){
            return 'bg-success'
        }else if (estado == 'ocupado'){
            return 'bg-danger'
        }else if (estado == 'reservado'){
            return 'bg-warning'
        }else (estado == 'mantenimiento');{
            return 'bg-secondary'
        }
    }

    return(
        <div>
            
            <div className='mb-4'>
                <div className='btn btn-primary me-2' onClick={() => setSectorActivo('espaciosSectorA')}>
                    Ver sector A
                </div>
                <div className='btn btn-primary me-2' onClick={() => setSectorActivo('espaciosSectorB')}>
                    Ver sector B
                </div>

                <h3 className="mb-3 fw-bold text-secondary">
                    Mostrando: {sectorActivo}
                </h3>
            </div>


            <div className='row g-3'>
                {datos[sectorActivo].map((espacio) => (
                    
                    <div key={espacio.id} className="col-2 col-md-1 col-lg-2">
                        <div
                            className={`text-white rounded-3 p-3 d-flex justify-content-center 
                            align-items-center shadow-sm ${obtenerColor(espacio.estado)}`}
                            style={{ height: '80px' }}
                            >
                            <h4 className="mb-0 fw-bold">{espacio.nombre}</h4>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}
