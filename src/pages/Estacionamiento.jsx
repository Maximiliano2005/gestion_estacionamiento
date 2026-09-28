import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import datos from "../datos.json";

export function Estacionamiento() {
    const [historial, setHistorial] = useState([]);
    const [espacioSeleccionado, setEspacioSeleccionado] = useState(null);
    const [autoSeleccionado, setAutoSeleccionado] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);

    const [sectorActivo, setSectorActivo] = useState(
        "espaciosSectorA"
    );

    //cargar los autos guardados en localStorage
    useEffect(() => {
        const guardados = JSON.parse(
            localStorage.getItem("historial_estacionamiento") || "[]"
        );

        setHistorial(guardados);
    }, []);

    const handleClicEspacio = (espacio) => {
        const auto = historial.find(
            (item) =>
                item.espacio?.trim().toUpperCase() ===
                espacio.nombre?.trim().toUpperCase()
        );

        setEspacioSeleccionado(espacio);
        setAutoSeleccionado(auto || null);
        setMostrarModal(true);
    };

    //determina el estado
    function obtenerColor(estado) {
        if (estado === "libre") {
            return "bg-success";
        }

        if (estado === "ocupado") {
            return "bg-danger";
        }

        if (estado === "reservado") {
            return "bg-warning";
        }

        if (estado === "mantenimiento") {
            return "bg-secondary";
        }

        return "bg-secondary";
    }

    return (
        <div>
            {/* Botones para cambiar de sector */}
            <div className="mb-4">
                <button
                    type="button"
                    className="btn btn-primary me-2"
                    onClick={() =>
                        setSectorActivo("espaciosSectorA")
                    }
                >
                    Ver sector A
                </button>
                
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() =>
                        setSectorActivo("espaciosSectorB")
                    }
                >
                    Ver sector B
                </button>

                <h3 className="mb-3 mt-3 fw-bold text-secondary">
                    Mostrando: {sectorActivo}
                </h3>
            </div>

            {/* Espacios del estacionamiento */}
            <div className="row g-3">

                {datos[sectorActivo]?.map((espacio) => (
                    <div
                        key={espacio.nombre}
                        onClick={() =>
                            handleClicEspacio(espacio)
                        }
                        className={`text-white rounded-3 p-3 d-flex justify-content-center align-items-center shadow-sm ${obtenerColor(
                            espacio.estado
                        )}`}
                        style={{
                            height: "80px",
                            cursor: "pointer"
                        }}
                    >
                        {espacio.nombre}
                    </div>
                ))}

            </div>

            {/* aqui empieza todo relacionado con los espacios*/}
            <Modal
                show={mostrarModal}
                onHide={() => setMostrarModal(false)}
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title>
                        Detalle del Box{" "}
                        {espacioSeleccionado?.nombre}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {espacioSeleccionado?.estado === "ocupado" && (
                        <div>
                    <p>
                        <strong>Estado:</strong>{" "}
                            Ocupado
                    </p>
                    {autoSeleccionado ? (
                        <div>
                    <p>
                        <strong>
                            Patente:
                        </strong>{" "}
                    {
                        autoSeleccionado.patente
                    }
                    </p> <p>
                    <strong>
                        Marca/Modelo:
                    </strong>{" "}
                    {
                        autoSeleccionado.tipo
                    }
                    </p> <p>
                    <strong>
                        Hora de ingreso:
                    </strong>{" "}
                    {
                        autoSeleccionado.horaIngreso
                    }
                    </p>
                            </div>
                        ) : (
                    <div className="alert">
                                    No se encontró información
                                    del vehículo.
                    </div>
                        )}

                    </div>
                    )}


                    {espacioSeleccionado?.estado === "libre" && (
                        <div>
                            <p>
                                <strong>Estado:</strong>{" "}
                                    Disponible
                            </p>
                            <p>
                                Espacio libre.
                            </p>
                        </div>
                    )}


            {espacioSeleccionado?.estado === "reservado" && (
        <div>
            <p>
            <strong>Estado:</strong>{" "}
                Reservado
            </p>
                <p>
                    Este espacio está reservado.
                </p>
            </div>
        )}



            {espacioSeleccionado?.estado === "mantenimiento" && (
            <div>
                <p>
                <strong>Estado:</strong>{" "}
                    En mantenimiento
                </p>
                    <p>
                    Este espacio no está disponible
                    </p>
                </div>
            )}


                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() =>
                            setMostrarModal(false)
                        }
                    >
                        Cerrar
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}