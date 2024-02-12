import RestaurantClass from '../../models/Restaurant';
import { BannerContainer, RestaurantName, Tag } from './styles';

type Props = {
    restaurant: RestaurantClass;
};

const Banner = ({ restaurant }: Props) => {
    return (
        <BannerContainer restaurant={restaurant}>
            <div className="container">
                <div>
                    {restaurant.infos.map(info => (
                        <Tag>{info}</Tag>
                    ))}
                </div>
                <RestaurantName>{restaurant.title}</RestaurantName>
            </div>
        </BannerContainer>
    );
};

export default Banner;
