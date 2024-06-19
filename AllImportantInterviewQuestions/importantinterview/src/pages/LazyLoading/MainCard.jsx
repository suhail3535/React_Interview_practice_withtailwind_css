// App.js
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

const MainCard = () => {
    return (
        <div>
            <h1>Code-Splitting Example</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
};

export default MainCard;
