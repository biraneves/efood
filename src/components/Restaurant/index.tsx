import RestaurantClass from '../../models/Restaurant';
import { Card, CardInfos, RestaurantDescription, StarIcon, Tag, Tags } from './styles';

type Props = {
    restaurant: RestaurantClass;
};

const Restaurant = ({ restaurant }: Props) => (
    <Card>
        <img src={restaurant.image} alt={restaurant.title} />
        <CardInfos>
            <div>
                <h3>{restaurant.title}</h3>
                <span>
                    {restaurant.score} <StarIcon className="fa-solid fa-star"></StarIcon>
                </span>
            </div>
            <RestaurantDescription>{restaurant.description}</RestaurantDescription>
            <button>Saiba mais</button>
        </CardInfos>
        <Tags>
            {restaurant.infos.map(info => (
                <Tag>{info}</Tag>
            ))}
        </Tags>
    </Card>
);

export default Restaurant;
