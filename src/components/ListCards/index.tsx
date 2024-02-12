import { useParams } from 'react-router-dom';
import DB from '../../db';
import Card from '../Card';
import { List, ListCardsContainer } from './styles';

export type Props = {
    type: 'home' | 'profile';
};

const ListCards = ({ type }: Props) => {
    const { id } = useParams();
    const itemId = id ? parseInt(id) : 0;
    const renderList = type === 'home' ? DB : DB.filter(item => item.id === itemId)[0].products;

    return (
        <ListCardsContainer type={type}>
            <div className="container">
                <List type={type}>
                    {renderList.map(item => (
                        <Card type={type} item={item}></Card>
                    ))}
                </List>
            </div>
        </ListCardsContainer>
    );
};

export default ListCards;
