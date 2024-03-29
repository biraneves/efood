// Libraries
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Styled components
import { CartButton, HeaderContainer, Logo, TopContent } from './styles';

// Store
import { RootReducer } from '../../store';
import { open } from '../../store/reducers/cart';

// Assets
import logo from '../../assets/images/logo.svg';

export type Props = {
  type?: 'home' | 'profile';
};

const Header = ({ type }: Props) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => dispatch(open());

  return (
    <HeaderContainer type={type}>
      <div className="container">
        <TopContent type={type}>
          {type === 'profile' ? <Link to="/">Restaurantes</Link> : <></>}
          <Link to="/">
            <Logo src={logo} alt="" />
          </Link>
          {type === 'profile' ? (
            <CartButton onClick={openCart}>
              {items.length} produto(s) no carrinho
            </CartButton>
          ) : (
            <></>
          )}
        </TopContent>
        {type === 'home' ? (
          <p>Viva experiências gastronômicas no conforto da sua casa</p>
        ) : (
          <></>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
