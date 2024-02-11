import React from 'react';
import { GlobalCSS } from './styles';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <GlobalCSS />
            <AppRoutes />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
