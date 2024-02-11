import RestaurantClass from '../../models/Restaurant';
import Restaurant from '../Restaurant';
import { ListRestaurants, RestaurantContainer } from './styles';
import hiokiSushi from '../../assets/images/hioki-sushi.png';
import laDolceVitaTrattoria from '../../assets/images/la-dolce-vita-trattoria.png';

const restaurants: RestaurantClass[] = [
    {
        id: 1,
        title: 'Hioki Sushi',
        image: hiokiSushi,
        infos: ['Destaque da semana', 'Japonesa'],
        score: 4.9,
        description:
            'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        image: laDolceVitaTrattoria,
        infos: ['Italiana'],
        score: 4.6,
        description:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    },
    {
        id: 3,
        title: 'La Dolce Vita Trattoria',
        image: laDolceVitaTrattoria,
        infos: ['Italiana'],
        score: 4.6,
        description:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    },
    {
        id: 4,
        title: 'La Dolce Vita Trattoria',
        image: laDolceVitaTrattoria,
        infos: ['Italiana'],
        score: 4.6,
        description:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    },
    {
        id: 5,
        title: 'La Dolce Vita Trattoria',
        image: laDolceVitaTrattoria,
        infos: ['Italiana'],
        score: 4.6,
        description:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    },
    {
        id: 6,
        title: 'La Dolce Vita Trattoria',
        image: laDolceVitaTrattoria,
        infos: ['Italiana'],
        score: 4.6,
        description:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    },
];

const Restaurants = () => (
    <RestaurantContainer>
        <div className="container">
            <ListRestaurants>
                {restaurants.map(restaurant => (
                    <li>
                        <Restaurant restaurant={restaurant} />
                    </li>
                ))}
            </ListRestaurants>
        </div>
    </RestaurantContainer>
);

export default Restaurants;
