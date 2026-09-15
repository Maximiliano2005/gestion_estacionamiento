import {Sidebar} from '../components/layout/Sidebar';

export function DashboardPage(){
    return (
        <div className='container-fluid p-0'>
            <div className='row'>
                <div className='col-2'>
                    <Sidebar/>
                </div>
                <div className='bg-secondary col-10'>
                    Aqui ira el contenido central
                </div>
            </div>
        </div>
    );
}