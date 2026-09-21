import { BsPSquareFill, BsFillCheckSquareFill, BsCarFront, BsCalendar3, BsWrench } from "react-icons/bs";
import { TotalEspacios, EspacioLibre, EspacioOcupado, Reservado, Mantenimiento } from "./Estacionamiento";
import { Tarjetas } from "../components/props/Tarjetas";

export function DashboardPage() {
    return (
        <div>
            <div className="">
                <h2 className="mb-1">DashBoard</h2>
                <h4>Resumen general del estacionamiento</h4>
            </div>

            <div className='row g-3'>

                <Tarjetas
                    icono={<BsPSquareFill className="text-primary display-5" />}
                    titulo="Espacios"
                    numero={TotalEspacios()}
                    colorTexto="text-primary"
                />

                <Tarjetas
                    icono={<BsFillCheckSquareFill className="text-success display-5" />}
                    titulo="Disponibles"
                    numero={EspacioLibre()}
                    colorTexto="text-primary"
                />

                <Tarjetas
                    icono={<BsCarFront className="text-danger display-5" />}
                    titulo="Ocupados"
                    numero={EspacioOcupado()}
                    colorTexto="text-primary"
                />

                <Tarjetas
                    icono={<BsCalendar3 className="text-warning display-5" />}
                    titulo="Reservados"
                    numero={Reservado()}
                    colorTexto="text-primary"
                />

                <Tarjetas
                    icono={<BsWrench className="text-secondary display-5" />}
                    titulo="Mantencion"
                    numero={Mantenimiento()}
                    colorTexto="text-primary"
                />

            </div>


        </div>
    );
}