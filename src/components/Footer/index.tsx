import { FooterContainer, Logo, SocialLinks } from './styles';
import logo from '../../assets/images/logo.svg';
import instagram from '../../assets/images/instagram.svg';
import facebook from '../../assets/images/facebook.svg';
import twitter from '../../assets/images/twitter.svg';

const Footer = () => (
    <FooterContainer>
        <div className="container">
            <Logo src={logo} alt="" />
            <SocialLinks>
                <li>
                    <a href="#">
                        <img src={instagram} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={facebook} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={twitter} alt="" />
                    </a>
                </li>
            </SocialLinks>
            <p>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade
                dos produtos é toda do estabelecimento contratado.
            </p>
        </div>
    </FooterContainer>
);

export default Footer;
