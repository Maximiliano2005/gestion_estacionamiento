import { useState } from "react";

export function Registrar() {
    // 1. Creamos una memoria para cada dato que queremos pedir
    const [patente, setPatente] = useState("");
    const [marca, setMarca] = useState("");
    const [espacio, setEspacio] = useState("");
    const [mensaje, setMensaje] = useState(false);

    const manejarEnvio = (e) => {
        e.preventDefault();

        setPatente("");
        setMarca("");
        setEspacio("");

        setMensaje(true);

        setTimeout(() => {
            setMensaje(false); // Apagamos la alerta
        }, 3000);

        
    };

    return (
        <div className="card shadow-sm p-4 mt-4">
            <h3 className="mb-4 text-secondary">Registrar Ingreso</h3>

            {mensaje ? (
                <div class="alert alert-success" role="alert">
                    Vehiculo registrado con Exito!
                </div>
            ): null}
            
            <form onSubmit={manejarEnvio}>

                <div className="mb-3">
                    <label className="form-label fw-bold">Patente</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ej: AB-CD-12"
                        value={patente}
                        onChange={(e) => setPatente(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bold">Marca/Modelo</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ej: Toyota Yaris"
                        value={marca}
                        onChange={(e) => setMarca(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label fw-bold">Asignar Espacio</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ej: A1"
                        value={espacio}
                        onChange={(e) => setEspacio(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-success w-100 fw-bold">
                    Guardar Registro
                </button>

                
            </form>
        </div>
    );
}