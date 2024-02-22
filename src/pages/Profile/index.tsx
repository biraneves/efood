// Libraries
import { useParams } from 'react-router-dom';

// Components
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import ListCards from '../../components/ListCards';

// Services
import { useGetRestaurantQuery } from '../../services/api';
import Loader from '../../components/Loader';

const Profile = () => {
  const { id } = useParams();

  const { data } = useGetRestaurantQuery(id as string);

  if (data) {
    return (
      <>
        <Header type="profile" />
        <Banner restaurant={data as Restaurant} />
        <ListCards type="profile" />
      </>
    );
  }

  return <Loader />;
};

export default Profile;
