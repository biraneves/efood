import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import ListCards from '../../components/ListCards';
import DB from '../../db';

const Profile = () => {
    const { id } = useParams();
    const restaurantId = id ? parseInt(id) : 0;
    const restaurant = DB.filter(item => item.id === restaurantId)[0];

    return (
        <>
            <Header type="profile" />
            <Banner restaurant={restaurant} />
            <ListCards type="profile" />
        </>
    );
};

export default Profile;
