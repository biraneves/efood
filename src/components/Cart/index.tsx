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
  CartContent,
  Overlay,
  SaleInfo,
  Sidebar,
} from './styles';

// Store
import { RootReducer } from '../../store';
import {
  close,
  remove,
  hideForm,
  showDeliveryForm,
  showConfirmation,
} from '../../store/reducers/cart';

// Methods
import { getTotalPrice, parseToBRL } from '../../utils';

// Assets
import buttonBin from '../../assets/images/lixeira-de-reciclagem.svg';
import { usePurchaseMutation } from '../../services/api';

const Cart = () => {
  const { isOpen, items, formVisible } = useSelector(
    (state: RootReducer) => state.cart,
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { finishedPayment } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
    dispatch(hideForm());
  };

  const deliveryForm = () => {
    dispatch(showDeliveryForm());
  };

  const totalPrice = getTotalPrice(items);

  const removeItem = (id: number) => dispatch(remove(id));

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => closeCart()} />
      <Sidebar>
        {items.length === 0 && finishedPayment === false ? (
          <p className="empty-cart">
            O carrinho está vazio. Adicione pelo menos um item para seguir com a
            compra.
          </p>
        ) : (
          <CartContent
            className={formVisible === '' ? 'cart-content-visible' : ''}
          >
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
              <p>{parseToBRL(totalPrice)}</p>
            </SaleInfo>
            <Button
              onClick={() => deliveryForm()}
              type="button"
              title="Continuar com a entrega"
            >
              Continuar com a entrega
            </Button>
          </CartContent>
        )}
        <PurchaseForm />
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
