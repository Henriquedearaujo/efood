import { Container, FooterSection, Link, Links } from './styles'
import logo from '../../assets/images/logo.png'
import Twitter from '../../assets/images/twitter.png'
import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'

const Footer = () => (
  <Container>
    <FooterSection>
      <img src={logo} alt="" />
      <Links>
        <li>
          <Link href="">
            <img src={Instagram} alt="" />
          </Link>
        </li>
        <li>
          <Link href="">
            <img src={Facebook} alt="" />
          </Link>
        </li>
        <li>
          <Link href="">
            <img src={Twitter} alt="" />
          </Link>
        </li>
      </Links>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </FooterSection>
  </Container>
)

export default Footer
