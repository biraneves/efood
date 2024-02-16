/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'react-router-dom';
import Card from '../Card';
import {
  AddCart,
  CloseIcon,
  List,
  ListCardsContainer,
  Modal,
  ModalContent,
} from './styles';
import Restaurant from '../../models/Restaurant';
import { useState } from 'react';
import Product from '../../models/Product';
import close from '../../assets/images/close.svg';
import { formatCurrency } from '../../utils/Format';
import {
  useGetRestaurantQuery,
  useGetRestaurantsQuery,
} from '../../services/api';
import { useDispatch } from 'react-redux';
import { add, open } from '../../store/reducers/cart';

export type Props = {
  type: 'home' | 'profile';
};

export type ModalState = {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
  visivel: boolean;
};

const ListCards = ({ type }: Props) => {
  const { id } = useParams();

  const [modalState, setModalState] = useState<ModalState>({
    id: 0,
    nome: '',
    descricao: '',
    foto: '',
    preco: 0,
    porcao: '',
    visivel: false,
  });

  let data: Restaurant[] | Product[];

  if (type === 'home') {
    data = useGetRestaurantsQuery().data as unknown as Restaurant[];
  } else {
    data = useGetRestaurantQuery(id as string).data
      ?.cardapio as unknown as Product[];
  }

  const hideModal = () => {
    setModalState({
      id: 0,
      nome: '',
      descricao: '',
      foto: '',
      preco: 0,
      porcao: '',
      visivel: false,
    });
  };

  if (data) {
    const dispatch = useDispatch();

    const addToCart = () => {
      dispatch(add(modalState));
      hideModal();
      dispatch(open());
    };

    return (
      <>
        <ListCardsContainer type={type}>
          <div className="container">
            <List type={type}>
              {data.map((item) => (
                <Card
                  key={item.id}
                  type={type}
                  item={item}
                  onClick={() => {
                    setModalState({
                      id: (item as Product).id,
                      nome: (item as Product).nome,
                      descricao: (item as Product).descricao,
                      foto: (item as Product).foto,
                      preco: (item as Product).preco,
                      porcao: (item as Product).porcao,
                      visivel: true,
                    });
                  }}
                ></Card>
              ))}
            </List>
          </div>
        </ListCardsContainer>
        {type === 'profile' && (
          <Modal className={modalState.visivel ? 'visible' : ''}>
            <ModalContent className="container">
              <div>
                <img src={modalState.foto} alt={modalState.nome} />
                <div>
                  <h3>{modalState.nome}</h3>
                  <p>
                    {modalState.descricao}
                    <br />
                    <br />
                    Serve: {modalState.porcao}
                  </p>
                  <AddCart onClick={addToCart}>
                    Adicionar ao carrinho - {formatCurrency(modalState.preco)}
                  </AddCart>
                </div>
              </div>
              <CloseIcon onClick={hideModal} src={close} alt="" />
            </ModalContent>
            <div className="overlay" onClick={hideModal}></div>
          </Modal>
        )}
      </>
    );
  }

  return <h3>Carregando...</h3>;
};

export default ListCards;
