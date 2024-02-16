import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonBin,
  CardItem,
  CartContainer,
  Overlay,
  SaleInfo,
  Sidebar,
} from './styles';
import { RootReducer } from '../../store';
import { close, remove } from '../../store/reducers/cart';
import Button from '../Button';
import { formatCurrency } from '../../utils/Format';
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
        <ul>
          {items.map((item) => (
            <CardItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h4>{item.nome}</h4>
                <p>{formatCurrency(item.preco)}</p>
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
          <p>{formatCurrency(getTotalPrice())}</p>
        </SaleInfo>
        <Button type="button" title="Continuar com a entrega">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
