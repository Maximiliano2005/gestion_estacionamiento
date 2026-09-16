import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";
import { Outlet } from "react-router-dom";
import { BottomNav } from "./BottomNav";

export function Layout() {
    return (
        <div className='container-fluid p-0 vh-100'>
            <div className='row g-0 h-100'>
                <div className='col-lg-2 p-0 d-none d-lg-block'>
                    <Sidebar />
                </div>
                <div className='col-12 col-lg-10 p-0 bg-secondary d-flex flex-column'>

                    <TopNav />

                    <div className="flex-grow-1 p-4 bg-body-tertiary">
                        <Outlet />
                    </div>

                    <div className="d-block d-lg-none">
                        <BottomNav/>
                    </div>

                </div>
            </div>
        </div>


    );
}