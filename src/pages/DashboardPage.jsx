import { BsPSquareFill, BsFillCheckSquareFill, BsCarFront, BsCalendar3, BsWrench } from "react-icons/bs";
import { TotalEspacios, EspacioLibre, EspacioOcupado, Reservado, Mantenimiento } from "./Estacionamiento";

export function DashboardPage() {
    return (
        <div>
            <div className="">
                <h2 className="mb-1">DashBoard</h2>
                <h4>Resumen general del estacionamiento</h4>
            </div>

            <div className='row g-3'>

                <div className='col-6 col-md-4 col-lg-2'>
                    <div className="bg-white rounded-2 shadow-sm p-3 d-flex flex-column align-items-start justify-content-center h-100">
                        <BsPSquareFill className="text-primary display-5"/>
                        <span className="text-muted fs-5 mt-2">Espacios</span>
                        <h2 className="display-6 fw-bold text-primary mb-0">{TotalEspacios()}</h2>
                    </div>

                </div>

                <div className='col-6 col-md-4 col-lg-2'>
                    <div className="bg-white rounded-2 shadow-sm p-3 d-flex flex-column align-items-start justify-content-center h-100">
                        <BsFillCheckSquareFill className="text-success display-5"/>
                        <span className="text-muted fs-5 mt-2">Disponibles</span>
                        <h2 className="display-6 fw-bold text-primary mb-0">{EspacioLibre()}</h2>
                    </div>

                </div>

                <div className='col-6 col-md-4 col-lg-2'>
                    <div className="bg-white rounded-2 shadow-sm p-3 d-flex flex-column align-items-start justify-content-center h-100">
                        <BsCarFront className="text-danger display-5"/>
                        <span className="text-muted fs-5 mt-2">Ocupados</span>
                        <h2 className="display-6 fw-bold text-primary mb-0">{EspacioOcupado()}</h2>
                    </div>
                </div>

                <div className='col-6 col-md-4 col-lg-2'>
                    <div className="bg-white rounded-2 shadow-sm p-3 d-flex flex-column align-items-start justify-content-center h-100">
                        <BsCalendar3 className="text-warning display-5"/>
                        <span className="text-muted fs-5 mt-2">Reservados</span>
                        <h2 className="display-6 fw-bold text-primary mb-0">{Reservado()}</h2>
                    </div>
                </div>

                <div className='col-6 col-md-4 col-lg-2'>
                    <div className="bg-white rounded-2 shadow-sm p-3 d-flex flex-column align-items-start justify-content-center h-100">
                        <BsWrench className="text-secondary display-5"/>
                        <span className="text-muted fs-5 mt-2">Mantencion</span>
                        <h2 className="display-6 fw-bold text-primary mb-0">{Mantenimiento()}</h2>
                    </div>
                </div>

            </div>


        </div>
    );
}