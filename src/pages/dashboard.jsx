import React, { lazy, useEffect, useRef, useState } from 'react';
import AdminPage from './adminPage';
import { useNavigate, useParams } from 'react-router-dom';
import { readContract } from "@wagmi/core";
import { wagmiConfig } from '../hooks/wagmi-config';
import { contract_abi, contract_address } from '../constants';
import { useAccount } from 'wagmi';
import Preloader from '../components/preloader';
import SuspenseWrapper from './components/dashboard/suspense-wrapper';
/**
 * Lazy imports
 */
const DashboardFormPage = lazy(() => import('./components/dashboard/sub-pages/dashboard'));
const AbuseForm = lazy(() => import('./components/dashboard/sub-pages/abuse-form'));
const Err404 = lazy(() => import('./components/dashboard/sub-pages/Err-404'));
const AdminHome = lazy(() => import('./components/dashboard/sub-pages/admin-home'));
const ReportPreview = lazy(() => import('./components/dashboard/sub-pages/report-preview'));
const ReportedCases = lazy(() => import('./components/dashboard/sub-pages/reported-cases'));
const ResourceSupport = lazy(() => import('./components/dashboard/sub-pages/resources&support'));

const Dashboard = () => {
    const [viewPage, setViewPage] = useState(false);
    const [view, setView] = useState("loading");
    const { page_id, view_key } = useParams();
    const isMounted = useRef(false);
    const { address, isConnected } = useAccount();
    const navigate = useNavigate();
    useEffect(() => {
        if (!address && !isConnected) {
            navigate("/");
        }
    }, [address, isConnected]);
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
        } else if (page_id == "reported-cases") {
            setViewPage('reported-cases');
        } else if (page_id == "resources-support") {
            setViewPage('resources-support');
        } else {
            setViewPage('404');
        }
    }, [page_id, view_key])
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            // setTimeout(() => setView("content"), 5000)
            getUserData();
        }
    }, []);
    async function getUserData() {
        const userData = await readContract(wagmiConfig, {
            abi: contract_abi,
            address: contract_address,
            functionName: "getUser",
            args: [address],
        });
        userData.id = parseInt(userData.id)
        localStorage.authUser = JSON.stringify(userData);
        setTimeout(() => setView('content'), 5000)
        if (userData.id == 0) {
            navigate('/dashboard');
        }
    }
    return (
        <div>
            <AdminPage>
                {(view == "loading" && <Preloader />) || <>
                    {
                        viewPage == 'dashboard' && <SuspenseWrapper><DashboardFormPage /></SuspenseWrapper>
                        || viewPage == 'abuse-form' && <SuspenseWrapper><AbuseForm /></SuspenseWrapper>
                        || viewPage == '404' && <SuspenseWrapper><Err404 /></SuspenseWrapper>
                        || viewPage == 'admin' && <SuspenseWrapper><AdminHome /></SuspenseWrapper>
                        || viewPage == 'admin-view' && <SuspenseWrapper><ReportPreview view_key={view_key} /></SuspenseWrapper>
                        || viewPage == 'reported-cases' && <SuspenseWrapper><ReportedCases /></SuspenseWrapper>
                        || viewPage == 'resources-support' && <SuspenseWrapper><ResourceSupport /></SuspenseWrapper>
                    }
                </>}

            </AdminPage>

        </div>
    );
}

export default Dashboard;