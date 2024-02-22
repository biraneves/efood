// Styled components
import { BannerContainer, RestaurantName, Tag } from './styles';

export type Props = {
  restaurant: Restaurant;
};

const Banner = ({ restaurant }: Props) => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <div>
          <Tag>{restaurant.tipo}</Tag>
        </div>
        <RestaurantName>{restaurant.titulo}</RestaurantName>
      </div>
    </BannerContainer>
  );
};

export default Banner;
