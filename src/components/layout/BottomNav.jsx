import { NavLink } from "react-router-dom";
import { BsHouseDoorFill, BsClockHistory, BsPCircle } from "react-icons/bs";


export function BottomNav(){
    return(
        <div className="fixed-bottom bg-white shadow d-flex justify-content-around align-items-center pb-2 pt-2">
            
            <NavLink className={({ isActive }) => isActive ? "d-flex flex-column align-items-center text-decoration-none text-primary" : "d-flex flex-column align-items-center text-decoration-none text-secondary" } to="/dashboard">
                
                <BsHouseDoorFill size={24} className="mb-1"/>
                <span style={{fontSize: '12px'}}>
                    Dashboard
                </span>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "d-flex flex-column align-items-center text-decoration-none text-primary" : "d-flex flex-column align-items-center text-decoration-none text-secondary" } to="/estacionamiento">

                <BsPCircle size={24} className="mb-1" />                               
                <span style={{fontSize: '12px'}}>
                    Estacionamiento
                </span>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "d-flex flex-column align-items-center text-decoration-none text-primary" : "d-flex flex-column align-items-center text-decoration-none text-secondary" } to="/historial">
                
                <BsClockHistory size={24} className="mb-1" />
                <span style={{ fontSize: '12px' }}> 
                    Historial
                </span>
            </NavLink>
        </div>
    );
} 