import { Container, FooterSection, Links, SectionTitle, Link } from './styles'
const currentYear = new Date().getFullYear()
const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link to="categories#rpg">RPG</Link>
          </li>
          <li>
            <Link to="categories#action">Ação</Link>
          </li>
          <li>
            <Link to="categories#sports">Esportes</Link>
          </li>
          <li>
            <Link to="categories#simulition">Simulação</Link>
          </li>
          <li>
            <Link to="categories#fight">Luta</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link to="/#on-sale">Promoções</Link>
          </li>
          <li>
            <Link to="/#coming-soon">Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados </p>
    </div>
  </Container>
)

export default Footer
