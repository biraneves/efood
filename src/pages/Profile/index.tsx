import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import ListCards from '../../components/ListCards';
import { useEffect, useState } from 'react';
import Restaurant from '../../models/Restaurant';

const Profile = () => {
    const { id } = useParams();

    const [restaurant, setRestaurant] = useState<Restaurant>();

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then(res => res.json())
            .then(res => setRestaurant(res));
    });

    if (!restaurant) return <h3>Carregando...</h3>;

    return (
        <>
            <Header type="profile" />
            <Banner restaurant={restaurant as Restaurant} />
            <ListCards type="profile" />
        </>
    );
};

export default Profile;
