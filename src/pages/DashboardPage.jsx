import { BsPSquareFill, BsFillCheckSquareFill, BsCarFront, BsCalendar3, BsWrench } from "react-icons/bs";
import { Tarjetas } from "../components/props/Tarjetas";
import { useState } from "react";
import datos from '../datos.json';


export function DashboardPage() {

    const [sectorActivo, setSectorActivo] = useState('espaciosSectorA');  

    function TotalEspacios(sector) {
        return datos[sector].length;
    }
    function EspacioLibre(sector) {
        const libres = datos[sector].filter((espacio) => espacio.estado === "libre");
        return libres.length;
    }

    function EspacioOcupado(sector) {
        const ocupado = datos[sector].filter((espacio) => espacio.estado === 'ocupado');
        return ocupado.length;
    }

    function Reservado(sector) {
        const reservado = datos[sector].filter((espacio) => espacio.estado == 'reservado');
        return reservado.length;
    }

    function Mantenimiento(sector) {
        const mantencion = datos[sector].filter((espacio) => espacio.estado == 'mantenimiento');
        return mantencion.length;
    }

    return (
        <div>
            <div className="">
                <h2 className="mb-1">DashBoard</h2>
                <h4>Resumen general del estacionamiento</h4>
            </div>
            
            <div className="mb-4">
                <div className='btn btn-primary me-2' onClick={() => setSectorActivo('espaciosSectorA')}>
                    Ver sector A
                </div>
                <div className='btn btn-primary me-2' onClick={() => setSectorActivo('espaciosSectorB')}>
                    Ver sector B
                </div>
            </div>

            <div className='row g-3'>

                <Tarjetas
                    icono={<BsPSquareFill className="text-primary display-5" />}
                    titulo="Espacios"
                    numero={TotalEspacios(sectorActivo)}
                    colorTexto="text-primary"
                />

                <Tarjetas
                    icono={<BsFillCheckSquareFill className="text-success display-5" />}
                    titulo="Disponibles"
                    numero={EspacioLibre(sectorActivo)}
                    colorTexto="text-primary"
                />

                <Tarjetas
                    icono={<BsCarFront className="text-danger display-5" />}
                    titulo="Ocupados"
                    numero={EspacioOcupado(sectorActivo)}
                    colorTexto="text-primary"
                />

                <Tarjetas
                    icono={<BsCalendar3 className="text-warning display-5" />}
                    titulo="Reservados"
                    numero={Reservado(sectorActivo)}
                    colorTexto="text-primary"
                />

                <Tarjetas
                    icono={<BsWrench className="text-secondary display-5" />}
                    titulo="Mantencion"
                    numero={Mantenimiento(sectorActivo)}
                    colorTexto="text-primary"
                />
            </div>
        </div>
    );
}