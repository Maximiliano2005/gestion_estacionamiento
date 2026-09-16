

export function TopNav(){
    return(
        <nav className="navbar bg-body-tertiary shadow-sm">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar espacio, patente, sector..." aria-label="Search" />
                    
                </form>
            </div>
        </nav>
    );
}