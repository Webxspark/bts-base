import React, { useEffect, useState } from 'react';
import AdminPage from './adminPage';
import { useParams } from 'react-router-dom';
import DashboardFormPage from './components/dashboard/sub-pages/dashboard';
import AbuseForm from './components/dashboard/sub-pages/abuse-form';
import Err404 from './components/dashboard/sub-pages/Err-404';
import AdminHome from './components/dashboard/sub-pages/admin-home';
import ReportPreview from './components/dashboard/sub-pages/report-preview';
import ReportedCases from './components/dashboard/sub-pages/reported-cases';
import ResourceSupport from './components/dashboard/sub-pages/resources&support';
const Dashboard = () => {
    const [viewPage, setViewPage] = useState(false);
    const { page_id, view_key } = useParams();

    useEffect(() => {
        if (page_id == "" || page_id == null) {
            setViewPage('dashboard');
        } else if (page_id == "abuse-form") {
            setViewPage('abuse-form')
        } else if (page_id == "admin") {
            if (view_key == "" || view_key == null) {
                setViewPage('admin');
            } else {
                setViewPage('admin-view');
            }
        } else if(page_id == "reported-cases"){
            setViewPage('reported-cases');
        } else if(page_id == "resources-support"){
            setViewPage('resources-support');
        } else {
            setViewPage('404');
        }
    }, [page_id, view_key])
    return (
        <div>
            <AdminPage>
                {
                    viewPage == 'dashboard' && <DashboardFormPage />
                    || viewPage == 'abuse-form' && <AbuseForm />
                    || viewPage == '404' && <Err404 />
                    || viewPage == 'admin' && <AdminHome />
                    || viewPage == 'admin-view' && <ReportPreview view_key={view_key} />
                    || viewPage == 'reported-cases' && <ReportedCases />
                    || viewPage == 'resources-support' && <ResourceSupport />
                }
            </AdminPage>

        </div>
    );
}

export default Dashboard;