import React, { Suspense } from 'react';
import Preloader from '../../../components/preloader';

const SuspenseWrapper = ({ children }) => {
    return (
        <Suspense fallback={<Preloader />} >
            {children}
        </Suspense>
    );
};

export default SuspenseWrapper;