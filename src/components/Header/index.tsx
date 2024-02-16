import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { HeaderContainer, Logo, TopContent } from './styles';

export type Props = {
  type?: 'home' | 'profile';
};

const Header = ({ type }: Props) => (
  <HeaderContainer type={type}>
    <div className="container">
      <TopContent type={type}>
        {type === 'profile' ? <Link to="/">Restaurantes</Link> : <></>}
        <Link to="/">
          <Logo src={logo} alt="" />
        </Link>
        {type === 'profile' ? <p>0 produto(s) no carrinho</p> : <></>}
      </TopContent>
      {type === 'home' ? (
        <p>Viva experiências gastronômicas no conforto da sua casa</p>
      ) : (
        <></>
      )}
    </div>
  </HeaderContainer>
);

export default Header;
