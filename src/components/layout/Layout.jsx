import { Sidebar } from "./Sidebar";
import { Topnav } from "./Topnav";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div className='container-fluid p-0 vh-100 '>
            <div className='row g-0 h-100'>
                <div className='col-2 p-0'>
                    <Sidebar />
                </div>
                <div className='col-10 p-0 bg-secondary d-flex flex-column'>

                    <Topnav />

                    <div className="flex-grow-1 p-4">
                        <Outlet />
                    </div>

                </div>
            </div>
        </div>


    );
}