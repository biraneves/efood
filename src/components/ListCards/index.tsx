import { useParams } from 'react-router-dom';
import Card from '../Card';
import { List, ListCardsContainer } from './styles';
import Restaurant from '../../models/Restaurant';
import { useEffect, useState } from 'react';
import Product from '../../models/Product';

export type Props = {
    type: 'home' | 'profile';
};

const ListCards = ({ type }: Props) => {
    const { id } = useParams();

    const [items, setItems] = useState<Restaurant[] | Product[]>([]);

    useEffect(() => {
        if (type === 'home') {
            fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
                .then(res => res.json())
                .then(res => setItems(res));
        } else {
            fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
                .then(res => res.json())
                .then(res => setItems((res as Restaurant).cardapio));
        }
    });

    if (!items) return <h3>Carregando...</h3>;

    return (
        <ListCardsContainer type={type}>
            <div className="container">
                <List type={type}>
                    {items.map(item => (
                        <Card type={type} item={item}></Card>
                    ))}
                </List>
            </div>
        </ListCardsContainer>
    );
};

export default ListCards;
