export const espaciosSectorA = [
    { id: 1, nombre: "A1", estado: "libre" },
    { id: 2, nombre: "A2", estado: "reservado" },
    { id: 3, nombre: "A3", estado: "libre" },
    { id: 4, nombre: "A4", estado: "ocupado" },
    { id: 5, nombre: "A5", estado: "mantenimiento" },
    { id: 6, nombre: "A6", estado: "mantenimiento" }
];


export function Estacionamiento(){
    
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
            <h3 className="mb-3 fw-bold text-secondary">Sector A</h3>

            <div className='row g-3'>
                {espaciosSectorA.map((espacio) => (
                    
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

export function TotalEspacios(){
    return espaciosSectorA.length;
}
export function EspacioLibre() {
    const libres = espaciosSectorA.filter((espacio) => espacio.estado === "libre");
    return libres.length;
}

export function EspacioOcupado(){
    const ocupado = espaciosSectorA.filter((espacio) => espacio.estado === 'ocupado');
    return ocupado.length;
}

export function Reservado(){
    const reservado = espaciosSectorA.filter((espacio) => espacio.estado == 'reservado');
    return reservado.length;
}

export function Mantenimiento(){
    const mantencion = espaciosSectorA.filter((espacio) => espacio.estado == 'mantenimiento');
    return mantencion.length;
}
