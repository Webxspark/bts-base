import React from 'react';
import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
    const [asideNavActive, setAsideNavActive] = useState(false);
    const [pageTitle, setPageTitle] = useState('Welcome');
    const [notificationsPanelVisibile, setNotificationsPanelVisibile] = useState(false);
    const [mobileDrawer, putMobileDrawer] = useState(false);

    const Aside = {
        active: asideNavActive, update: setAsideNavActive
    };
    const PageTitle = {
        title: pageTitle, set: setPageTitle
    }
    const NotificationsPanel = {
        visibility: notificationsPanelVisibile, show: () => setNotificationsPanelVisibile(true), hide: () => setNotificationsPanelVisibile(false), toggle: () => setNotificationsPanelVisibile(!notificationsPanelVisibile)
    }

    const drawer = {
        put: () => putMobileDrawer(true),
        reveal: mobileDrawer,
        remove: () => putMobileDrawer(false)
    }
    return (
        <GlobalContext.Provider value={{ Aside, PageTitle, NotificationsPanel, drawer }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalContextProvider };