import Product from '../../models/Product';
import Restaurant from '../../models/Restaurant';
import { cropText } from '../../utils/Format';
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
            <img
                src={type === 'home' ? (item as Restaurant).capa : (item as Product).foto}
                alt={type === 'home' ? (item as Restaurant).titulo : (item as Product).nome}
            />
            <CardInfos type={type}>
                <div>
                    <CardTitle type={type}>
                        {type === 'home' ? (item as Restaurant).titulo : (item as Product).nome}
                    </CardTitle>
                    {type === 'home' ? <Score score={(item as Restaurant).avaliacao} /> : <></>}
                </div>
                <p>{cropText(item.descricao)}</p>
                <Button
                    type={type === 'home' ? 'link' : 'button'}
                    title={type === 'home' ? (item as Restaurant).titulo : (item as Product).nome}
                    to={type === 'home' ? `/profile/${item.id}` : ''}
                >
                    {type === 'home' ? 'Saiba mais' : 'Adicionar ao carrinho'}
                </Button>
            </CardInfos>
            {type === 'home' ? (
                <TagsList>
                    <Tag>{(item as Restaurant).tipo}</Tag>
                </TagsList>
            ) : (
                <></>
            )}
        </CardContainer>
    );
};

export default Card;
