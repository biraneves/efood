import React from 'react';
import { GlobalCSS } from './styles';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
