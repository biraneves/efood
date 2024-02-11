import React from 'react';
import { GlobalCSS } from './styles';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
    return (
        <BrowserRouter>
            <GlobalCSS />
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
