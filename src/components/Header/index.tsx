import logo from '../../assets/images/logo.svg';
import { HeaderContainer, Logo } from './styles';

const Header = () => (
    <HeaderContainer>
        <div className="container">
            <Logo src={logo} alt="" />
            <p>Viva experiências gastronômicas no conforto da sua casa</p>
        </div>
    </HeaderContainer>
);

export default Header;
