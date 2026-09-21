export function Tarjetas(props){
    return(
        <div className='col-6 col-md-4 col-lg-2'>
            <div className="bg-white rounded-2 shadow-sm p-3 d-flex flex-column align-items-start justify-content-center h-100">
                {props.icono}
                <span className="text-muted fs-5 mt-2">{props.titulo}</span>
                <h2 className={`display-6 fw-bold mb-0 ${props.colorTexto}`}>
                    {props.numero}
                </h2>
            </div>
        </div>
    );
}