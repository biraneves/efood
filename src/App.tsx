// Libraries
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Components
import Cart from './components/Cart';
import Footer from './components/Footer';

// Styled components
import { GlobalCSS } from './styles';

// Store
import { store } from './store';

// Routes
import AppRoutes from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <AppRoutes />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
