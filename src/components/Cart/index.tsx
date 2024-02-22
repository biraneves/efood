// Libraries
import { useDispatch, useSelector } from 'react-redux';

// Components
import Button from '../Button';
import PurchaseForm from '../PurchaseForm';

// Styled components
import {
  ButtonBin,
  CardItem,
  CartContainer,
  Overlay,
  SaleInfo,
  Sidebar,
} from './styles';

// Store
import { RootReducer } from '../../store';
import { close, remove } from '../../store/reducers/cart';

// Methods
import { parseToBRL } from '../../utils/Format';

// Assets
import buttonBin from '../../assets/images/lixeira-de-reciclagem.svg';

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => dispatch(close());

  const removeItem = (id: number) => dispatch(remove(id));

  const getTotalPrice = () =>
    items.reduce((total, present) => (total += present.preco), 0);

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => closeCart()} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CardItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h4>{item.nome}</h4>
                    <p>{parseToBRL(item.preco)}</p>
                  </div>
                  <ButtonBin
                    onClick={() => removeItem(item.id)}
                    src={buttonBin}
                    alt="Remover produto"
                  />
                </CardItem>
              ))}
            </ul>
            <SaleInfo>
              <p>Valor total</p>
              <p>{parseToBRL(getTotalPrice())}</p>
            </SaleInfo>
            <Button type="button" title="Continuar com a entrega">
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p className="empty-cart">
            O carrinho está vazio. Adicione pelo menos um item para seguir com a
            compra.
          </p>
        )}
        <PurchaseForm />
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
