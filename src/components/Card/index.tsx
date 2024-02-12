import DB from '../../db';
import Product from '../../models/Product';
import Restaurant from '../../models/Restaurant';
import Button from '../Button';
import Score from '../Score';
import { CardContainer, CardInfos, CardTitle, Tag, TagsList } from './styles';

export type Props = {
    type: string;
    item: Restaurant | Product;
};

const Card = ({ type, item }: Props) => {
    return (
        <CardContainer type={type}>
            <img src={item.image} alt={item.title} />
            <CardInfos type={type}>
                <div>
                    <CardTitle type={type}>{item.title}</CardTitle>
                    {type === 'home' ? <Score score={(item as Restaurant).score} /> : <></>}
                </div>
                <p>{item.description}</p>
                <Button
                    type={type === 'home' ? 'link' : 'button'}
                    title={item.title}
                    to={type === 'home' ? `/profile/${item.id}` : ''}
                >
                    {type === 'home' ? 'Saiba mais' : 'Adicionar ao carrinho'}
                </Button>
            </CardInfos>
            {type === 'home' ? (
                <TagsList>
                    {(item as Restaurant).infos.map(info => (
                        <Tag>{info}</Tag>
                    ))}
                </TagsList>
            ) : (
                <></>
            )}
        </CardContainer>
    );
};

export default Card;
